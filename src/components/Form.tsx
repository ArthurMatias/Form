const Form = () => {
    return <form className="flex flex-col gap-3">

        <div className="flex flex-col">
            <label  className="text-sm" htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite seu nome:" className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder: text-stone-400"/>
        </div>

        <div className="flex flex-col">
            <label  className="text-sm" htmlFor="email">E-mail</label>
            <input type="email" placeholder="Insira seu E-mail:" className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder: text-stone-400"/>
        </div>

        <div className="flex flex-col">
            <a className="text-sm"> Leia os Termos</a>
            <div>
                <input type="checkbox"/>
                <label htmlFor="agree" className="text-sm" >Concordo com os termos</label>
            </div>
        </div>

        <button>Cadastrar</button>
    </form>
}

export default Form