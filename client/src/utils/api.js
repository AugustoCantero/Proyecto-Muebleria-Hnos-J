export const BASE_URL = process.env.REACT_APP_API_URL

export async function apiFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  console.log("Fetching URL:", url, "with options:", options);
  return fetch(url, options);
}