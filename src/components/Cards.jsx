import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cards = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cards</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Your linked cards:</p>
        {/* Add a list of cards here */}
      </CardContent>
    </Card>
  );
};

export default Cards;