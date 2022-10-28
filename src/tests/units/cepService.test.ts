import * as cepService from "../../services/cepService.js"

describe("search CEP", () => {
  it("should return CEP address", async () => {
    const cep = "22620061"
    const data = await cepService.getAddress(cep);
    
    expect(data.status).toBe(200);
  })

  it("should fail invalid CEP address - not found", async () => {
    const cep = "12345678"
    const data = await cepService.getAddress(cep);

    expect(data).rejects.toEqual({
      type: "not_found",
      message: "CEP não encontrado",
    });
  })
});