import axios from "axios";

const baseURL = "https://ws.apicep.com/cep.json?code="

export async function getAddress(cep: string) {
  const { data } = await axios.get(baseURL + cep)

  if (data.status === 400) {
    throw { type: "bad_request", message: data.message };
  }

  if (data.status === 404) {
    throw { type: "not_found", message: data.message };
  }
    
  return data;
}