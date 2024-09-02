import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount) {
      setExpenses(prev => [...prev, { ...newExpense, id: Date.now() }]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-indigo-900">Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              placeholder="Enter expense description"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={newExpense.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
            Add Expense
          </Button>
        </form>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-indigo-800">Recent Expenses</h3>
          {expenses.length > 0 ? (
            <ul className="space-y-2">
              {expenses.map(expense => (
                <li key={expense.id} className="flex justify-between items-center bg-indigo-50 p-2 rounded">
                  <span>{expense.description}</span>
                  <span className="font-semibold">${expense.amount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No expenses added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Expenses;