import { User } from "../types/User";

type Error = {

    [key:string]:string
};

export const validate = (data:User) => { //o uso de export possibilita chamar a função em outro doc do projeto

    const errors: Error = {};

    if (!data.name) { //o uso do "data " corresponde a dizer que a função validate aceita um argumento data que deve ser um objeto correspondente ao tipo User.
        
        errors["name"] = "O nome é obrigatório";

        return errors;
    }
};