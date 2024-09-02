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
        <ul>
          <li>123455</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Cards;