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
import {Button} from '@/components/ui/button';
import MainNav from '@/components/ui/main-nav';

// Mock employee data (replace with Firebase data later)
const mockEmployees = [
  {
    id: '1',
    fullName: 'Alice Johnson',
    username: 'alice.j',
    role: 'Manager',
  },
  {
    id: '2',
    fullName: 'Bob Williams',
    username: 'bob.w',
    role: 'Sales Associate',
  },
];

const EmployeesPage = () => {
  const [employees, setEmployees] = useState(mockEmployees);

  useEffect(() => {
    // TODO: Fetch employee data from Firebase and setEmployees
  }, []);

  const handleAddEmployee = () => {
    // TODO: Implement add employee functionality
    alert('Add employee functionality not implemented yet.');
  };

  const handleEditEmployee = (employeeId: string) => {
    // TODO: Implement edit employee functionality
    alert(`Edit employee functionality not implemented yet for employee ID: ${employeeId}`);
  };

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <h1 className="text-3xl font-bold mb-5">Employee Management Page</h1>

      <Button className="mb-4" onClick={handleAddEmployee}>Add Employee</Button>

      <Table>
        <TableCaption>A list of your employees.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell>{employee.username}</TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleEditEmployee(employee.id)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeesPage;
