
'use client';

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to TruScan POS!');

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{welcomeMessage}</h1>

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
              <CardTitle>In-Store Kiosk</CardTitle>
              <CardDescription>Customer-facing mode for in-store use.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleNavigation('/kiosk')}>Go to Kiosk</Button>
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
