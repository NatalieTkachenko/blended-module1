// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

function convertCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: 'USD' | 'EUR' | 'UAH';
}): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 1000, currency: 'UAH' });
