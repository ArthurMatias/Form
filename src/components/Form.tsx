import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {

    //cria-se os states para usar o useState do react
    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);//False para começar desmarcado e o user ter a opção de marcar

    const [errors,setErrors] = useState<User | null>(null); //Foi tipado, já que os dados começam como nulo e só depois recebe as infos do user
    
    const handleSubmit = (e:FormEvent) => { //"e" foi typado com o FormEvent para usar ele
        
        e.preventDefault(); //Prevenir o comportamento padrão de envio do formulário

        setErrors(null);
        
        const data: User = {
            name,
            email,
            agree,
        };

        let validateErrors: User | null = null;

        try {

            validateErrors = validate(data);

        }catch (error){

            console.error("Erro durante a validação:", error); // Lida com o erro durante a validação, se necessário.
        }

        if (validateErrors && Object.keys(validateErrors).length > 0){

            setErrors(validateErrors);
            
            return;
        }

        setName("");
        setEmail("");
        setAgree(false);

        alert("Inscrito com Sucesso!");
            
    };

    return <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

        <div className="flex flex-col">
            <label  className="text-sm" htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite seu nome:" className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder: text-stone-600" value={name} onChange={(e) => setName(e.target.value)}/>
        
            {errors?.name &&(
                <small className="text-xs text-red-500 mt-1">{errors?.name}</small>)}{/*O operador lógico && é usado para condicionalmente renderizar o conteúdo à direita somente se a expressão à esquerda for avaliada como verdadeira.*/}

        </div> 

        <div className="flex flex-col">
            <label  className="text-sm" htmlFor="email">E-mail</label>
            <input type="email" placeholder="Insira seu E-mail:" className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder: text-stone-600" value={email} onChange={(e) => setEmail(e.target.value)}/>
        
            {errors?.email &&(
                <small className="text-xs text-red-500 mt-1">{errors?.email}</small>)}  
        
        </div>

        <div className="flex flex-col">
            <a className="text-xs underline mb-2"> Leia os Termos</a>
            <div className="flex items-center gap-2">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}/>
                <label htmlFor="agree" className="text-sm" >Concordo com os termos</label>
            </div>
            {errors?.agree &&(
                <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>)}
        </div>

        <button type="submit" className="bg-slate-900 hover:bg-slate-700 font-medium text-lg px-2 py-1 rounded-lg text-white">Cadastrar</button>
    </form>
}

export default Form