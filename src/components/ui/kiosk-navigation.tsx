
'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

const KioskNavigation = () => {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push('/');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-secondary">
      <h1 className="text-2xl font-bold">TruScan POS - In-Store Kiosk</h1>
      <Button variant="outline" onClick={handleBackToDashboard}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default KioskNavigation;
