/**
 * Represents data extracted from a scanned ID.
 */
export interface IDScanResult {
  /**
   * The full name of the ID holder.
   */
  fullName: string;
  /**
   * The date of birth of the ID holder (ISO 8601 format).
   */
  dateOfBirth: string;
  /**
   * The ID number.
   */
  idNumber: string;
}

/**
 * Asynchronously scans an ID and extracts relevant information.
 *
 * @param imageBase64 The base64 encoded image of the ID to scan.
 * @returns A promise that resolves to an IDScanResult object containing the extracted data.
 */
export async function scanID(imageBase64: string): Promise<IDScanResult> {
  // TODO: Implement this by calling an ID scanning API.

  return {
    fullName: 'John Doe',
    dateOfBirth: '1990-01-01',
    idNumber: '123456789',
  };
}
