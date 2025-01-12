export async function getAccountAPI(username) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/accounts/" + encodeURIComponent(username)
    );
    return await response.json();
  } catch (error) {
    return { error: error.message || "Unknown error" };
  }
}

export async function createAccountAPI(
  username,
  currency,
  description,
  currentBalance
) {
  try {
    const response = await fetch("http://localhost:5000/api/accounts/", {
      method: "POST",
      body: JSON.stringify({
        user: username,
        currency: currency,
        description: description,
        balance: currentBalance,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  } catch (error) {
    return { error: error.message || "Unknown error" };
  }
}

export async function addTransactionAPI(username, date, object, amount) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/accounts/" +
        encodeURIComponent(username) +
        "/transactions",
      {
        method: "POST",
        body: JSON.stringify({
          date: date,
          object: object,
          amount: amount,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return response.json();
  } catch (error) {
    return { error: error.message || "Unknown error" };
  }
}
