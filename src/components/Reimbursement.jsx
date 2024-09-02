import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reimbursement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reimbursement</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pending reimbursements: $300</p>
        {/* Add a list of reimbursement requests here */}
      </CardContent>
    </Card>
  );
};

export default Reimbursement;