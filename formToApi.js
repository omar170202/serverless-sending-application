async function formToApi(event, typeOfSending) {
  event.preventDefault();

  const data = {
    typeOfSending: typeOfSending,
    destinationEmail: document.querySelector('[name="email"]')?.value || '',
    phoneNumber: document.querySelector('[name="sms"]')?.value || '',
    message: document.querySelector('[name="message"]')?.value || '',
  };

  console.log(`data: ${JSON.stringify(data)}`);

  try {
    const response = await fetch(
      'https://2xkdfqlhql.execute-api.us-east-1.amazonaws.com/sendingStage/sending',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
