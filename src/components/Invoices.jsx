import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Invoices = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Recent invoices:</p>
        {/* Add a list or table of invoices here */}
      </CardContent>
    </Card>
  );
};

export default Invoices;