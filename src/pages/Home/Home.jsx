import { Link } from 'react-router-dom'
import { tecnologias } from '../../data/tecnologias'

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 px-6 py-12 text-white shadow-lg sm:px-10 md:py-16">
        <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Catálogo de Tecnologias
        </h1>
        <p className="mt-4 max-w-2xl text-base text-sky-100 sm:text-lg">
          Uma SPA feita com React Router: navegue entre as páginas e repare que o
          navegador <strong>não recarrega</strong>. Só o conteúdo do meio muda.
        </p>
        <Link
          to="/itens"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 shadow hover:bg-sky-50"
        >
          Ver as {tecnologias.length} tecnologias →
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-md">
          <p className="text-2xl">🏠</p>
          <h2 className="mt-2 font-bold">Home</h2>
          <p className="text-sm text-gray-600">
            Rota <code className="rounded bg-gray-100 px-1">/</code> (index)
          </p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-md">
          <p className="text-2xl">📋</p>
          <h2 className="mt-2 font-bold">Listagem</h2>
          <p className="text-sm text-gray-600">
            Rota <code className="rounded bg-gray-100 px-1">/itens</code>
          </p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-md">
          <p className="text-2xl">🔎</p>
          <h2 className="mt-2 font-bold">Detalhes</h2>
          <p className="text-sm text-gray-600">
            Rota dinâmica <code className="rounded bg-gray-100 px-1">/item/:id</code>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
