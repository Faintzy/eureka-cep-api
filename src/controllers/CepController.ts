import { getRepository } from "typeorm";
import { Request, Response } from "express"; 
import { cepExists, insertCep } from "../utils/cepUtils";
import Cep from "../models/Cep";
import axios from "axios";

export const cepQuery = async (request: Request, response: Response) => {

    const { cep } = request.params;
    const exists = await cepExists(cep);

    if (exists) {
        var cepFromDB = await getRepository(Cep).findOne({
            cep: cep
        });

        return response.status(200).json({
            success: true,
            msg: cepFromDB.address
        });
    }

    var res;

    try {
        res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    } catch (error) {
        return response.status(200).json({
            success: false,
            msg: "CEP não encontrado"
        });
    }

    await insertCep(cep, JSON.stringify(res.data));

    return response.status(200).json({
        success: true,
        msg: res.data
    });

}

export const saveCep = async (request: Request, response: Response) => {

    var cep: string = request.body.cep;
    cep = cep.replace("-", "");

    var res = await axios.get(`/cep/${cep}`);

    if (!cepExists(cep)) {
        insertCep(cep, res.data);

        return response.status(201).json({
            success: true,
            msg: "Cep salvo com sucesso"
        });
    } else {
        return response.status(200).json({
            success: false,
            msg: "CEP já cadastrado"
        });
    }

}
