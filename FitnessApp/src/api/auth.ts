export async function login(
  email: string,
  password: string
) {
  const response = await fetch(
    "https://your-api.com/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  return response.json();
}