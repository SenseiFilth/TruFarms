'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import MainNav from '@/components/ui/main-nav';
import { useToast } from '@/hooks/use-toast';
import AddCustomerForm from '@/components/forms/add-customer-form';
import EditCustomerForm from '@/components/forms/edit-customer-form';
import type { Customer } from '@/types/customer'; // Assuming you create this type definition

// Mock customer data (replace with Firebase data later)
const mockCustomers: Customer[] = [
  {
    id: '1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '555-123-4567',
    purchaseHistory: [
      { transactionId: 'T101', date: '2024-07-01', total: 75.00 },
      { transactionId: 'T105', date: '2024-07-15', total: 120.50 },
    ],
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '555-987-6543',
    purchaseHistory: [
      { transactionId: 'T202', date: '2024-06-20', total: 45.00 },
      { transactionId: 'T208', date: '2024-07-10', total: 90.00 },
    ],
  },
  {
    id: '3',
    fullName: 'David Lee',
    email: 'david.lee@example.com',
    phoneNumber: '555-246-8013',
    purchaseHistory: [
      { transactionId: 'T303', date: '2024-05-01', total: 75.00 },
      { transactionId: 'T307', date: '2024-06-10', total: 100.00 },
    ],
  },
  {
    id: '4',
    fullName: 'Emily White',
    email: 'emily.white@example.com',
    phoneNumber: '555-135-7924',
    purchaseHistory: [
      { transactionId: 'T404', date: '2024-04-20', total: 60.00 },
      { transactionId: 'T406', date: '2024-05-10', total: 70.00 },
    ],
  },
  {
    id: '5',
    fullName: 'Michael Brown',
    email: 'michael.brown@example.com',
    phoneNumber: '555-864-2075',
    purchaseHistory: [
      { transactionId: 'T501', date: '2024-03-10', total: 100.00 },
      { transactionId: 'T509', date: '2024-04-01', total: 90.00 },
    ],
  },
];

// TODO: Implement dynamic fetching of purchase history from Firebase 'transactions' collection
// based on customer ID.

const CustomersPage = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers); // Use Customer type
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const { toast } = useToast();

  const filteredCustomers = customers.filter(customer => {
    const search = searchTerm.toLowerCase();
    return (
      customer.fullName.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.phoneNumber.includes(search)
    );
  });

  const handleAddCustomer = (newCustomerData: Omit<Customer, 'id' | 'purchaseHistory'>) => {
    // TODO: Replace with Firebase addDoc call
    const newCustomer: Customer = {
      ...newCustomerData,
      id: String(Date.now()), // Temporary ID generation
      purchaseHistory: [], // New customers start with no history
    };
    setCustomers(prevCustomers => [newCustomer, ...prevCustomers]);
    setIsAddModalOpen(false);
    toast({
      title: 'Success',
      description: 'Customer added successfully.',
    });
  };

  const handleEditCustomer = (updatedCustomerData: Omit<Customer, 'purchaseHistory'>) => {
    if (!selectedCustomer) return;

    // TODO: Replace with Firebase updateDoc call using selectedCustomer.id
    setCustomers(prevCustomers =>
      prevCustomers.map(customer =>
        customer.id === selectedCustomer.id
          ? { ...customer, ...updatedCustomerData }
          : customer
      )
    );
    setIsEditModalOpen(false);
    setSelectedCustomer(null);
    toast({
      title: 'Success',
      description: 'Customer details updated.',
    });
  };

  const openEditModal = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Customers</h1>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button>Add Customer</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Customer</DialogTitle>
            </DialogHeader>
            <AddCustomerForm onSubmit={handleAddCustomer} />
          </DialogContent>
        </Dialog>
      </div>

      <Input
        type="text"
        placeholder="Search customers by name, email, or phone..."
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
            <TableHead>Purchase History (Last 2)</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.fullName}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>
                <ul className="text-xs">
                  {customer.purchaseHistory.slice(0, 2).map((purchase) => ( // Display last 2
                    <li key={purchase.transactionId}>
                      {purchase.date}: ${purchase.total.toFixed(2)}
                    </li>
                  ))}
                  {customer.purchaseHistory.length === 0 && <li>No history</li>}
                </ul>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => openEditModal(customer)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Customer Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Customer: {selectedCustomer?.fullName}</DialogTitle>
          </DialogHeader>
          {selectedCustomer && (
            <EditCustomerForm
              customer={selectedCustomer}
              onSubmit={handleEditCustomer}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomersPage;
