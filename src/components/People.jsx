import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const People = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>People</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Team members:</p>
        {/* Add a list of team members or contacts here */}
      </CardContent>
    </Card>
  );
};

export default People;