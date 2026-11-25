import { Link } from 'react-router-dom'

// Card de uma tecnologia. O Link monta a URL dinâmica /item/:id
function CardItem({ tecnologia }) {
  return (
    <Link
      to={`/item/${tecnologia.id}`}
      className="group flex flex-col rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="text-4xl">{tecnologia.emoji}</span>
      <h3 className="mt-3 text-lg font-bold group-hover:text-sky-600">{tecnologia.nome}</h3>
      <span className="mt-1 w-fit rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">
        {tecnologia.categoria}
      </span>
      <p className="mt-3 flex-1 text-sm text-gray-600">{tecnologia.resumo}</p>
      <span className="mt-4 text-sm font-semibold text-sky-600">Ver detalhes →</span>
    </Link>
  )
}

export default CardItem
