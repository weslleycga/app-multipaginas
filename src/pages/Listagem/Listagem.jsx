import { useState } from 'react'
import { tecnologias } from '../../data/tecnologias'
import CardItem from '../../components/CardItem/CardItem'

function Listagem() {
  const [busca, setBusca] = useState('')

  // Filtra pelo nome ou pela categoria (sem diferenciar maiúsculas)
  const termo = busca.trim().toLowerCase()
  const filtradas = tecnologias.filter(
    (tec) =>
      tec.nome.toLowerCase().includes(termo) ||
      tec.categoria.toLowerCase().includes(termo),
  )

  return (
    <div>
      <h1 className="text-2xl font-bold sm:text-3xl">Listagem</h1>
      <p className="mt-1 text-gray-600">
        Clique em um card para abrir a página de detalhes.
      </p>

      <input
        type="search"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar por nome ou categoria..."
        className="mt-6 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 sm:max-w-sm"
      />

      {filtradas.length === 0 ? (
        <p className="mt-8 rounded-lg bg-white p-6 text-center text-gray-500 shadow">
          Nenhuma tecnologia encontrada para “{busca}”.
        </p>
      ) : (
        // Grid responsivo: 1 coluna no celular, 2 no tablet, 3 e 4 em telas grandes
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtradas.map((tec) => (
            <CardItem key={tec.id} tecnologia={tec} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Listagem
