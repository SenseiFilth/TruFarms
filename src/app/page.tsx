'use client';

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useRouter} from 'next/navigation';
import MainNav from '@/components/ui/main-nav';

export default function Home() {
  const router = useRouter();
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to TruScan POS!');
  // Mock data for key metrics
  const [todaySales, setTodaySales] = useState(1250);
  const [lowStockItems, setLowStockItems] = useState(5);
  const [customersServed, setCustomersServed] = useState(75);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <MainNav />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{welcomeMessage}</h1>
        <p className="text-gray-600 mb-8">Your all-in-one dispensary management solution.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 w-full max-w-5xl">
          <Card>
            <CardHeader>
              <CardTitle>Today's Sales</CardTitle>
              <CardDescription>Total sales for today.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">${todaySales}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Low Stock Alerts</CardTitle>
              <CardDescription>Items running low on stock.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-500">{lowStockItems}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customers Served</CardTitle>
              <CardDescription>Number of customers served today.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">{customersServed}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>Manage your inventory items.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/products')}>Go to Products</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>View and manage customer records.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/customers')}>Go to Customers</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payments</CardTitle>
              <CardDescription>Process and log transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/payments')}>Go to Payments</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employee Management</CardTitle>
              <CardDescription>Manage employee records and access control.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/employees')}>Go to Employees</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>User info and app session management.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/profile')}>Go to Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>App preferences and customization.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/settings')}>Go to Settings</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
