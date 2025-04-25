'use client';

import React, {useState} from 'react';
import {scanID} from '@/services/id-scanner';
import {scanBarcode} from '@/services/barcode-scanner';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import {ArrowLeft} from 'lucide-react';

const KioskPage = () => {
  const [idScanResult, setIdScanResult] = useState(null);
  const [barcodeScanResult, setBarcodeScanResult] = useState(null);
  const [isIdScanned, setIsIdScanned] = useState(false);
  const router = useRouter();

  const handleIDScan = async () => {
    // Mock base64 image
    const mockImageBase64 = 'base64_encoded_image_data';
    const result = await scanID(mockImageBase64);
    setIdScanResult(result);
    setIsIdScanned(true);
  };

  const handleBarcodeScan = async () => {
    // Mock base64 image
    const mockImageBase64 = 'base64_encoded_barcode_image_data';
    const result = await scanBarcode(mockImageBase64);
    setBarcodeScanResult(result);
  };

  const handleBackToDashboard = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <header className="flex items-center justify-between p-4">
        <Button variant="ghost" onClick={handleBackToDashboard}>
          <ArrowLeft className="mr-2 h-4 w-4"/>
          Back to Dashboard
        </Button>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        {!isIdScanned ? (
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold">Please Scan Your ID</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button onClick={handleIDScan}>Scan ID</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="w-full max-w-md">
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">ID Information</CardTitle>
              </CardHeader>
              <CardContent>
                {idScanResult ? (
                  <div>
                    <p>
                      <strong>Full Name:</strong> {idScanResult.fullName}
                    </p>
                    <p>
                      <strong>Date of Birth:</strong> {idScanResult.dateOfBirth}
                    </p>
                    <p>
                      <strong>ID Number:</strong> {idScanResult.idNumber}
                    </p>
                  </div>
                ) : (
                  <p>No ID scanned yet.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Scan Barcode</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button onClick={handleBarcodeScan}>Scan Barcode</Button>
              </CardContent>
            </Card>

            {barcodeScanResult && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Barcode Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Data:</strong> {barcodeScanResult.data}
                  </p>
                  <p>
                    <strong>Barcode Type:</strong> {barcodeScanResult.barcodeType}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default KioskPage;
