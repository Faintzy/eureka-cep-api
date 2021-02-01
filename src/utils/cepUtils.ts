import { getRepository, getConnection } from "typeorm";
import Cep from "../models/Cep";

export const cepExists = async (cep: string) => {

    const cepModel = await getRepository(Cep).findOne({
        cep: cep
    });

    var cepJson;

    if (cepModel) {
        cepJson = JSON.parse(JSON.stringify(cepModel));

        if (cepJson.id) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    
}

export const insertCep = async (cep: string, address: string) => {
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Cep)
        .values({
            cep: cep,
            address: address
        }).execute();
}