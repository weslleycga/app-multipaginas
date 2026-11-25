# DevTech – App Multi-páginas com React Router

Catálogo de tecnologias feito como **SPA (Single Page Application)** com React Router. A aplicação tem 3 páginas (Home, Listagem e Detalhes), uma NavBar fixa e responsiva com link ativo, um Layout padrão com `<Outlet />` e uma rota dinâmica `/item/:id`.

## Como executar

```bash
npm install
npm run dev
```

Abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Rotas

| URL | Página | O que mostra |
|---|---|---|
| `/` | Home | Apresentação do projeto |
| `/itens` | Listagem | Cards de todas as tecnologias, com busca |
| `/item/:id` | Detalhes | Detalhes de uma tecnologia (ex: `/item/3`) |
| `*` | NaoEncontrado | Página 404 para qualquer outra URL |

## Estrutura do projeto

```
src/
├── components/
│   ├── Layout/Layout.jsx       ← NavBar + <Outlet /> + Footer
│   ├── NavBar/NavBar.jsx       ← barra fixa, responsiva, com NavLink
│   ├── Footer/Footer.jsx
│   └── CardItem/CardItem.jsx   ← card com Link para /item/:id
├── pages/
│   ├── Home/Home.jsx
│   ├── Listagem/Listagem.jsx
│   ├── Detalhes/Detalhes.jsx   ← usa useParams()
│   └── NaoEncontrado/NaoEncontrado.jsx
├── data/tecnologias.js         ← dados usados nas páginas
├── App.jsx                     ← Routes e Route
├── main.jsx                    ← BrowserRouter
└── index.css                   ← Tailwind
```

## Parte 1 – Configuração do React Router

Instalação:

```bash
npm install react-router-dom
```

O `BrowserRouter` envolve toda a aplicação no `main.jsx`. Ele acompanha a URL do navegador:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

No `App.jsx`, o `<Routes>` escolhe qual `<Route>` exibir de acordo com a URL:

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="itens" element={<Listagem />} />
    <Route path="item/:id" element={<Detalhes />} />
    <Route path="*" element={<NaoEncontrado />} />
  </Route>
</Routes>
```

## Parte 2 – App multi-páginas

**Layout com `<Outlet />`:** as rotas estão **aninhadas** dentro da rota `/`, que usa o `Layout`. O Layout tem a NavBar e o Footer, e o `<Outlet />` marca o lugar onde a página atual aparece. Assim, NavBar e Footer são escritos uma vez só.

```jsx
function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />  {/* Home, Listagem ou Detalhes aparece aqui */}
      </main>
      <Footer />
    </>
  )
}
```

**NavBar fixa e responsiva (Tailwind):**
- `fixed top-0` prende a barra no topo, mesmo rolando a página.
- No celular, os links ficam escondidos atrás de um botão ☰ (`md:hidden`).
- A partir de 768px (`md:flex`), os links aparecem lado a lado.

**`NavLink` com classe de ativo:** o `NavLink` passa `isActive` para a função do `className`. O link da página atual fica azul:

```jsx
<NavLink
  to="/itens"
  className={({ isActive }) => (isActive ? 'bg-sky-500 text-white' : 'text-gray-300')}
>
  Listagem
</NavLink>
```

- O atributo `end` impede que o link da Home (`/`) fique ativo em todas as páginas, já que toda URL começa com `/`.
- O link "Detalhes" fica ativo em **qualquer** `/item/:id`, não só em `/item/1`.

**Responsividade das páginas:** a Listagem usa `grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`. São 1 coluna no celular e até 4 em telas grandes.

## Parte 3 – Rota dinâmica com `useParams`

A rota `item/:id` aceita qualquer valor no lugar de `:id`. Na página Detalhes, o `useParams` lê esse valor da URL:

```jsx
const { id } = useParams()   // em /item/3 → id = "3"
```

O ID capturado aparece na tela, numa faixa azul acima do card.

**Validação do parâmetro:** o `useParams` sempre devolve **texto**, então o ID é convertido com `Number(id)` antes de buscar o item. Se o ID não for um número (ex: `/item/abc`) ou não existir (ex: `/item/99`), a página mostra uma mensagem de "Item não encontrado" com um link para voltar.

Para testar: acesse `/item/2`, `/item/8`, `/item/99` e `/item/abc`.

---

## Parte 4 – Reflexão

### Qual a diferença entre o roteamento tradicional do HTML (vários arquivos .html) e o roteamento de uma SPA com React Router?

**No roteamento tradicional**, cada página é um arquivo separado: `index.html`, `produtos.html`, `contato.html`. Ao clicar em um link `<a href="produtos.html">`:

1. O navegador faz uma **nova requisição** ao servidor.
2. O servidor devolve um **HTML inteiro novo**.
3. A tela fica branca por um instante e a página é **recarregada do zero**: HTML, CSS e JavaScript são carregados de novo.
4. Tudo que estava na memória (estado, o que foi digitado, a posição de um timer) **é perdido**.
5. Partes repetidas, como cabeçalho e rodapé, precisam ser **copiadas em cada arquivo**.

**Na SPA com React Router**, existe **um único `index.html`**. O navegador carrega o JavaScript uma vez e, a partir daí:

1. Ao clicar em um `<Link>` ou `<NavLink>`, o React Router **impede o recarregamento**.
2. Ele muda a URL usando a **History API** do navegador (`history.pushState`).
3. O `<Routes>` vê a nova URL e o React **troca só o componente** da página. A NavBar e o Footer continuam na tela.
4. Não há tela branca. A navegação é **instantânea** e o estado dos componentes que continuam na tela é mantido.
5. Os botões **voltar e avançar** do navegador continuam funcionando, e cada página tem sua própria URL, que pode ser copiada e compartilhada.

| | HTML tradicional | SPA com React Router |
|---|---|---|
| Arquivos HTML | Um por página | Só um (`index.html`) |
| Ao trocar de página | Recarrega tudo | Troca só o componente |
| Quem decide a página | O servidor | O JavaScript no navegador |
| Header/Footer | Repetido em cada arquivo | Escrito uma vez (Layout + `<Outlet />`) |
| Estado da aplicação | Perdido a cada navegação | Mantido |
| Páginas dinâmicas | Um arquivo por item, ou geradas no servidor | Uma rota com parâmetro (`/item/:id`) |

**Desvantagens da SPA:** o primeiro carregamento pode ser mais pesado, porque baixa todo o JavaScript de uma vez. Ferramentas de busca (SEO) também podem ter mais dificuldade de ler o conteúdo. E, ao publicar o site, o servidor precisa ser configurado para devolver o `index.html` em qualquer URL. Sem isso, acessar `/item/3` diretamente daria erro 404.

## Tecnologias

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://v3.tailwindcss.com/)
- [clsx](https://github.com/lukeed/clsx)
