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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Expense Management Platform</h1>
      <Tabs defaultValue="wallet" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="reimbursement">Reimbursement</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>
        <TabsContent value="wallet"><Wallet /></TabsContent>
        <TabsContent value="expenses"><Expenses /></TabsContent>
        <TabsContent value="cards"><Cards /></TabsContent>
        <TabsContent value="reimbursement"><Reimbursement /></TabsContent>
        <TabsContent value="invoices"><Invoices /></TabsContent>
        <TabsContent value="people"><People /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;