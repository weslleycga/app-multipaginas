import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

// PARTE 2 – Layout padrão com <Outlet />
// NavBar e Footer aparecem em TODAS as páginas.
// O <Outlet /> é o "buraco" onde o React Router coloca a página atual
// (Home, Listagem, Detalhes...) de acordo com a URL.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      {/* pt-20 compensa a altura da NavBar fixa no topo */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
