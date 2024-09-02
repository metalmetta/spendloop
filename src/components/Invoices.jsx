import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({ description: '', amount: '', file: null });

  const onDrop = useCallback(acceptedFiles => {
    setNewInvoice(prev => ({ ...prev, file: acceptedFiles[0] }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'application/pdf' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newInvoice.description && newInvoice.amount && newInvoice.file) {
      // OCR function using Tesseract.js
      const performOCR = async (file) => {
        const result = await Tesseract.recognize(
          file,
          'eng',
          {
            logger: m => console.log(m)
          }
        );
        return result.data.text;
      };

      const ocrResult = await performOCR(newInvoice.file);
      
      setInvoices(prev => [...prev, { ...newInvoice, id: Date.now(), ocrResult }]);
      setNewInvoice({ description: '', amount: '', file: null });
    }
  };

  return (
    <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <CardTitle className="text-2xl font-bold text-white">Invoices</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <Label htmlFor="description" className="text-gray-700">Description</Label>
            <Input
              id="description"
              name="description"
              value={newInvoice.description}
              onChange={handleInputChange}
              placeholder="Enter invoice description"
              className="mt-1 w-full"
            />
          </div>
          <div>
            <Label htmlFor="amount" className="text-gray-700">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={newInvoice.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="mt-1 w-full"
            />
          </div>
          <div {...getRootProps()} className={`p-4 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}`}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p className="text-blue-500">Drop the PDF file here ...</p> :
                <p className="text-gray-500">Drag 'n' drop a PDF invoice here, or click to select a file</p>
            }
          </div>
          {newInvoice.file && (
            <p className="text-sm text-gray-600">File selected: {newInvoice.file.name}</p>
          )}
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded">
            Add Invoice
          </Button>
        </form>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Recent Invoices</h3>
          {invoices.length > 0 ? (
            <ul className="space-y-2">
              {invoices.map(invoice => (
                <li key={invoice.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow">
                  <div>
                    <span className="font-medium text-gray-800">{invoice.description}</span>
                    <p className="text-sm text-gray-600">OCR Result: {invoice.ocrResult}</p>
                  </div>
                  <span className="font-semibold text-indigo-600">${invoice.amount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No invoices added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Invoices;