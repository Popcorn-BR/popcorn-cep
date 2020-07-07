export async function http<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(`https://viacep.com.br/ws/${endpoint}/json/`);
  const body = await response.json();
  return body;
}