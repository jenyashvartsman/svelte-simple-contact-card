import type { ContactDto } from "../dto/contact.dto";

const API_URL = "http://localhost:3000/api";

export async function getContact(): Promise<ContactDto> {
  const res = await fetch(`${API_URL}/contact`);

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("Request failed");
  }
}
