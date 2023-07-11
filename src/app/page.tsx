export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl mb-6">Login</h1>

      <form className="w-[400px] flex flex-col gap-6">
        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="text" 
          name="email" 
          placeholder="Digite seu e-mail" 
        />

        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="password" 
          name="password" 
          placeholder="Digite sua senha" 
        />

        <button
          className="h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
