import Form from "./components/Form"

function App() {

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">

      <h1 className="font-bold text-white text-[2rem]">Inscreva-se</h1>
      <p className="text-gray-400">Assine nossa Neewslatter e mantenha-se informado</p>

      <div className="w-96 mt-4 rounded-lg px-4 py-5 bg-gray-200">
        <Form /> 
      </div>

      <p className="mt-2 w-96 text-gray-400 text-xs text-center px-4 py-5">Ao se increver, você passará a receber  os nossos emails com as melhores dicas, novidades e ofertas </p>
    </div>
  )
}

export default App
