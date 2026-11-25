import { Link, useLocation } from 'react-router-dom'

// Rota "*": aparece quando nenhuma outra rota combina com a URL
function NaoEncontrado() {
  const { pathname } = useLocation()

  return (
    <div className="mx-auto max-w-lg rounded-xl bg-white p-8 text-center shadow-md">
      <p className="text-6xl font-extrabold text-sky-500">404</p>
      <h1 className="mt-2 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-2 text-gray-600">
        A rota <code className="rounded bg-gray-100 px-2 py-0.5">{pathname}</code> não existe.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-sky-500 px-5 py-2 font-semibold text-white hover:bg-sky-600"
      >
        Ir para a Home
      </Link>
    </div>
  )
}

export default NaoEncontrado
