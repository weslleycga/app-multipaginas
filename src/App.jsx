import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Listagem from './pages/Listagem/Listagem'
import Detalhes from './pages/Detalhes/Detalhes'
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado'

// PARTE 1 – Routes e Route
// <Routes> olha a URL atual e renderiza só a <Route> que combina com ela.
//
// PARTE 2 – Rotas aninhadas
// A rota "/" usa o <Layout> (NavBar + Footer). As rotas de dentro
// aparecem no lugar do <Outlet /> que fica dentro do Layout.
// Assim NavBar e Footer são escritos uma vez só.
//
// PARTE 3 – Rota dinâmica
// "item/:id" → o ":id" é um parâmetro. /item/1, /item/7, /item/abc...
// todas caem nessa rota, e a página Detalhes lê o valor com useParams().
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="itens" element={<Listagem />} />
        <Route path="item/:id" element={<Detalhes />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default App
