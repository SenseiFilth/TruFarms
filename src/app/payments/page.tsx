'use client';

import React, {useState, useEffect} from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {processPayment, SquareTransaction} from '@/services/square'; // Assuming this is the correct path
import MainNav from '@/components/ui/main-nav';
import {Button} from '@/components/ui/button';

// Mock transaction data (replace with Firebase data later)
const mockTransactions: SquareTransaction[] = [
  {
    transactionId: '1',
    amountCents: 5000,
    currencyCode: 'USD',
    createdAt: '2024-07-01T12:00:00.000Z',
  },
  {
    transactionId: '2',
    amountCents: 10000,
    currencyCode: 'USD',
    createdAt: '2024-07-05T15:30:00.000Z',
  },
  {
    transactionId: '3',
    amountCents: 2500,
    currencyCode: 'USD',
    createdAt: '2024-07-10T09:15:00.000Z',
  },
];

const PaymentsPage = () => {
  const [transactions, setTransactions] = useState<SquareTransaction[]>(mockTransactions);

  // Function to format amount from cents to dollars
  const formatAmount = (amountCents: number) => {
    return (amountCents / 100).toFixed(2);
  };

  useEffect(() => {
    // Fetch transaction history from Firebase here and setTransactions
    // Example:
    // const fetchTransactions = async () => {
    //   const transactions = await getTransactionsFromFirebase();
    //   setTransactions(transactions);
    // };
    // fetchTransactions();
  }, []);

  // State for payment processing
  const [paymentAmount, setPaymentAmount] = useState<number>(0);

  const handleProcessPayment = async () => {
    try {
      // Call the Square API to process the payment
      const transaction = await processPayment(paymentAmount, 'USD');

      // Update the transaction history with the new transaction
      setTransactions(prevTransactions => [...prevTransactions, transaction]);

      // Clear the payment amount input
      setPaymentAmount(0);

      // Optionally, store the transaction in Firebase
      // await storeTransactionInFirebase(transaction);

    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <h1 className="text-3xl font-bold mb-5">Payments Page</h1>

      {/* Payment Processing Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Process Payment</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="number"
            placeholder="Enter amount in cents"
            className="border p-2 rounded"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(Number(e.target.value))}
          />
          <Button onClick={handleProcessPayment}>Process Payment</Button>
        </div>
      </div>

      <Table>
        <TableCaption>A list of completed transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transactionId}>
              <TableCell>{transaction.transactionId}</TableCell>
              <TableCell>{formatAmount(transaction.amountCents)}</TableCell>
              <TableCell>{transaction.currencyCode}</TableCell>
              <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentsPage;
