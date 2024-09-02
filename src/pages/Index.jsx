import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Wallet from '../components/Wallet';
import Expenses from '../components/Expenses';
import Cards from '../components/Cards';
import Reimbursement from '../components/Reimbursement';
import Invoices from '../components/Invoices';
import People from '../components/People';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-900">SpendLoop version2</h1>
          <p className="text-lg text-indigo-700">Streamline Your Expense Management</p>
        </header>
        <Tabs defaultValue="wallet" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white shadow-md rounded-lg mb-6">
            <TabsTrigger value="wallet" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-900">Wallet</TabsTrigger>
            <TabsTrigger value="expenses" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-900">Expenses</TabsTrigger>
            <TabsTrigger value="cards" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-900">Cards</TabsTrigger>
            <TabsTrigger value="reimbursement" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-900">Reimbursement</TabsTrigger>
            <TabsTrigger value="invoices" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-900">Invoices</TabsTrigger>
            <TabsTrigger value="people" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-900">People</TabsTrigger>
          </TabsList>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <TabsContent value="wallet"><Wallet /></TabsContent>
            <TabsContent value="expenses"><Expenses /></TabsContent>
            <TabsContent value="cards"><Cards /></TabsContent>
            <TabsContent value="reimbursement"><Reimbursement /></TabsContent>
            <TabsContent value="invoices"><Invoices /></TabsContent>
            <TabsContent value="people"><People /></TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;