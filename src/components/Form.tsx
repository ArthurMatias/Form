import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validade";

const Form = () => {

    //cria-se os states para usar o useState do react
    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);//False para começar desmarcado e o user ter a opção de marcar

    const [erros,setErros] = useState<User | null>(null); //Foi tipado, já que os dados começam como nulo e só depois recebe as infos do user
    
    const handlesubmit = (e: FormEvent) => { //"e" foi typado com o FormEvent para usar ele
        e.preventDefault(); //Prevenir o comportamento padrão de envio do formulário
        
        setErros(null);
        
        const data: User = {
            name,
            email,
            agree,
        };

        const validateErros = validate(data);

        console.log(data, validateErros)

        if (Object.keys(validateErros).length > 0){
            
            setErros(validateErros);

            alert("há algum erro!");

            return
        }

        alert("Obrigado por se inscrever!");
    };

    return <form className="flex flex-col gap-3" onSubmit={handlesubmit}>

        <div className="flex flex-col">
            <label  className="text-sm" htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite seu nome:" value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder: text-stone-600"/>
        
            {erros?.name &&(
                <small className="text-xs text-red-500 mt-1">{erros?.name}</small>)}{/*O operador lógico && é usado para condicionalmente renderizar o conteúdo à direita somente se a expressão à esquerda for avaliada como verdadeira.*/}

        </div> 

        <div className="flex flex-col">
            <label  className="text-sm" htmlFor="email">E-mail</label>
            <input type="email" placeholder="Insira seu E-mail:" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder: text-stone-600"/>
        </div>

        <div className="flex flex-col">
            <a className="text-xs underline mb-2"> Leia os Termos</a>
            <div className="flex items-center gap-2">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.value)}/>
                <label htmlFor="agree" className="text-sm" >Concordo com os termos</label>
            </div>
        </div>

        <button type="submit" className="bg-slate-900 hover:bg-slate-700 font-medium text-lg px-2 py-1 rounded-lg text-white">Cadastrar</button>
    </form>
}

export default Form