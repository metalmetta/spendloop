import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Expenses = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total expenses this month: $1,500</p>
        {/* Add a list or table of expenses here */}
      </CardContent>
    </Card>
  );
};

export default Expenses;