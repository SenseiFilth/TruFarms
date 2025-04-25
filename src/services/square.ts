/**
 * Represents a transaction processed through Square.
 */
export interface SquareTransaction {
  /**
   * The unique ID of the transaction in Square.
   */
  transactionId: string;
  /**
   * The amount of the transaction in cents.
   */
  amountCents: number;
  /**
   * The currency code of the transaction (e.g., 'USD').
   */
  currencyCode: string;
  /**
   * The date and time the transaction was processed.
   */
  createdAt: string;
}

/**
 * Asynchronously processes a payment using Square.
 *
 * @param amountCents The amount to charge, in cents.
 * @param currencyCode The currency code for the transaction.
 * @returns A promise that resolves to a SquareTransaction object.
 */
export async function processPayment(
  amountCents: number,
  currencyCode: string
): Promise<SquareTransaction> {
  // TODO: Implement this by calling the Square API.

  return {
    transactionId: 'fake-transaction-id',
    amountCents: amountCents,
    currencyCode: currencyCode,
    createdAt: new Date().toISOString(),
  };
}
