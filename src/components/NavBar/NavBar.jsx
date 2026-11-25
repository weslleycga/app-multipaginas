import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const links = [
  { para: '/', rotulo: 'Home' },
  { para: '/itens', rotulo: 'Listagem' },
  { para: '/item/1', rotulo: 'Detalhes' },
]

const estiloBase = 'block rounded-lg px-4 py-2 font-medium transition'
const estiloAtivo = 'bg-sky-500 text-white'
const estiloInativo = 'text-gray-300 hover:bg-gray-800 hover:text-white'

// O NavLink passa { isActive } para a função de className.
// isActive = true quando a URL atual corresponde ao "to" do link.
//
// Caso especial: o link "Detalhes" aponta para /item/1, mas deve ficar
// ativo em QUALQUER /item/:id (ex: /item/5). Por isso conferimos o pathname.
function criarClasse(link, pathname) {
  return ({ isActive }) => {
    const ativo = link.rotulo === 'Detalhes' ? pathname.startsWith('/item/') : isActive
    return clsx(estiloBase, ativo ? estiloAtivo : estiloInativo)
  }
}

// PARTE 2 – NavBar fixa no topo e responsiva
// - "fixed top-0" prende a barra no topo mesmo rolando a página
// - no celular os links ficam escondidos atrás do botão ☰
// - a partir de "md:" (768px) os links aparecem lado a lado
function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { pathname } = useLocation()

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900 shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" onClick={fecharMenu} className="text-xl font-bold text-sky-400">
          &lt;DevTech /&gt;
        </Link>

        {/* Botão hambúrguer: só aparece no celular (md:hidden) */}
        <button
          type="button"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          className="rounded-lg p-2 text-2xl text-gray-300 hover:bg-gray-800 md:hidden"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        {/* Links no desktop */}
        <ul className="hidden gap-2 md:flex">
          {links.map((link) => (
            <li key={link.para}>
              {/* "end" faz o "/" ficar ativo SÓ na Home, e não em todas as rotas */}
              <NavLink to={link.para} end className={criarClasse(link, pathname)}>
                {link.rotulo}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Links no celular (abre e fecha) */}
      {menuAberto && (
        <ul className="flex flex-col gap-1 border-t border-gray-800 px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.para}>
              <NavLink to={link.para} end onClick={fecharMenu} className={criarClasse(link, pathname)}>
                {link.rotulo}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default NavBar
