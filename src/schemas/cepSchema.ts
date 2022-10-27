import joi from "joi";

export const cepSchema = joi.object({
  cep: joi.string().pattern(new RegExp('^[0-9]{8}$')).required()
});