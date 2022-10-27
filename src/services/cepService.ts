import axios from "axios";

const baseURL = "https://ws.apicep.com/cep.json?code="

// export async function verifyCep(cep: string) {
//   await axios.get(baseURL + cep).catch((error) => {
//     throw { type: "not_found", message: error.response.data };
//   });

//   return;
// }

export async function getAddress(cep: string) {
  const address = await axios
    .get(baseURL + cep)
    .catch((error) => {
      throw { type: "not_found", message: error.response.data };
    });
    
  return address;
}