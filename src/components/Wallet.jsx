import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Wallet = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Your current balance: $5,000</p>
        {/* Add more wallet-related content here */}
      </CardContent>
    </Card>
  );
};

export default Wallet;