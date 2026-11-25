import { useParams, Link, useNavigate } from 'react-router-dom'
import { buscarPorId, tecnologias } from '../../data/tecnologias'

// PARTE 3 – Rota dinâmica /item/:id
function Detalhes() {
  // useParams devolve um objeto com os parâmetros da URL.
  // Em /item/3 → { id: "3" }   (sempre vem como TEXTO)
  const { id } = useParams()
  const navigate = useNavigate()

  // Validação do parâmetro: converte para número e confere se existe
  const idNumero = Number(id)
  const idValido = Number.isInteger(idNumero) && idNumero > 0
  const tecnologia = idValido ? buscarPorId(idNumero) : undefined

  if (!tecnologia) {
    return (
      <div className="mx-auto max-w-lg rounded-xl bg-white p-8 text-center shadow-md">
        <p className="text-5xl">🤔</p>
        <h1 className="mt-4 text-2xl font-bold">Item não encontrado</h1>
        <p className="mt-2 text-gray-600">
          O ID recebido da URL foi{' '}
          <code className="rounded bg-red-100 px-2 py-0.5 font-bold text-red-700">{id}</code>
          {idValido
            ? `, mas só existem itens de 1 a ${tecnologias.length}.`
            : ', que não é um número válido.'}
        </p>
        <Link
          to="/itens"
          className="mt-6 inline-block rounded-lg bg-sky-500 px-5 py-2 font-semibold text-white hover:bg-sky-600"
        >
          Voltar para a listagem
        </Link>
      </div>
    )
  }

  const anterior = buscarPorId(idNumero - 1)
  const proximo = buscarPorId(idNumero + 1)

  return (
    <div className="mx-auto max-w-3xl">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-4 text-sm font-semibold text-sky-600 hover:underline"
      >
        ← Voltar
      </button>

      {/* Mostra na tela o ID capturado da URL */}
      <div className="mb-4 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800">
        <code>useParams()</code> capturou da URL o <strong>id = {id}</strong>
      </div>

      <article className="rounded-xl bg-white p-6 shadow-md sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="text-6xl">{tecnologia.emoji}</span>
          <div>
            <h1 className="text-3xl font-extrabold">{tecnologia.nome}</h1>
            <span className="mt-1 inline-block rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">
              {tecnologia.categoria}
            </span>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-gray-700">{tecnologia.descricao}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-4">
            <dt className="text-xs font-semibold uppercase text-gray-500">Criado em</dt>
            <dd className="text-lg font-bold">{tecnologia.ano}</dd>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <dt className="text-xs font-semibold uppercase text-gray-500">Criador</dt>
            <dd className="text-lg font-bold">{tecnologia.criador}</dd>
          </div>
        </dl>
      </article>

      {/* Navegação entre itens: muda só o :id da URL */}
      <div className="mt-6 flex justify-between gap-4">
        {anterior ? (
          <Link to={`/item/${anterior.id}`} className="font-semibold text-sky-600 hover:underline">
            ← {anterior.nome}
          </Link>
        ) : (
          <span />
        )}
        {proximo && (
          <Link to={`/item/${proximo.id}`} className="font-semibold text-sky-600 hover:underline">
            {proximo.nome} →
          </Link>
        )}
      </div>
    </div>
  )
}

export default Detalhes
