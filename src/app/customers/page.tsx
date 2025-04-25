'use client';

import React, {useState} from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {Input} from '@/components/ui/input';
import MainNav from '@/components/ui/main-nav';

// Mock customer data (replace with Firebase data later)
const mockCustomers = [
  {
    id: '1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '555-123-4567',
    purchaseHistory: [
      {transactionId: 'T101', date: '2024-07-01', total: 75.00},
      {transactionId: 'T105', date: '2024-07-15', total: 120.50},
    ],
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '555-987-6543',
    purchaseHistory: [
      {transactionId: 'T202', date: '2024-06-20', total: 45.00},
      {transactionId: 'T208', date: '2024-07-10', total: 90.00},
    ],
  },
  {
    id: '3',
    fullName: 'David Lee',
    email: 'david.lee@example.com',
    phoneNumber: '555-246-8013',
    purchaseHistory: [
      {transactionId: 'T303', date: '2024-05-01', total: 75.00},
      {transactionId: 'T307', date: '2024-06-10', total: 100.00},
    ],
  },
  {
    id: '4',
    fullName: 'Emily White',
    email: 'emily.white@example.com',
    phoneNumber: '555-135-7924',
    purchaseHistory: [
      {transactionId: 'T404', date: '2024-04-20', total: 60.00},
      {transactionId: 'T406', date: '2024-05-10', total: 70.00},
    ],
  },
  {
    id: '5',
    fullName: 'Michael Brown',
    email: 'michael.brown@example.com',
    phoneNumber: '555-864-2075',
    purchaseHistory: [
      {transactionId: 'T501', date: '2024-03-10', total: 100.00},
      {transactionId: 'T509', date: '2024-04-01', total: 90.00},
    ],
  },
];

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(customer => {
    const search = searchTerm.toLowerCase();
    return (
      customer.fullName.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.phoneNumber.includes(search)
    );
  });

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <h1 className="text-3xl font-bold mb-5">Customers Page</h1>

      <Input
        type="text"
        placeholder="Search customers..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Table>
        <TableCaption>A list of your customers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Purchase History</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.fullName}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>
                <ul>
                  {customer.purchaseHistory.map((purchase) => (
                    <li key={purchase.transactionId}>
                      {purchase.date}: ${purchase.total}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersPage;
