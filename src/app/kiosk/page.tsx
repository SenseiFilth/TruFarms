
'use client';

import React, {useState} from 'react';
import KioskNavigation from '@/components/ui/kiosk-navigation';
import {scanID} from '@/services/id-scanner';
import {scanBarcode} from '@/services/barcode-scanner';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const KioskPage = () => {
  const [idScanResult, setIdScanResult] = useState(null);
  const [barcodeScanResult, setBarcodeScanResult] = useState(null);
  const [isIdScanned, setIsIdScanned] = useState(false);

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

  return (
    <div className="flex flex-col min-h-screen">
      <KioskNavigation />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {!isIdScanned ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Please Scan Your ID</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button onClick={handleIDScan}>Scan ID</Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>ID Information</CardTitle>
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
                <CardTitle>Scan Barcode</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button onClick={handleBarcodeScan}>Scan Barcode</Button>
              </CardContent>
            </Card>

            {barcodeScanResult && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Barcode Information</CardTitle>
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
          </>
        )}
      </main>
    </div>
  );
};

export default KioskPage;
