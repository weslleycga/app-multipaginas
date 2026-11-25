// "Banco de dados" falso da aplicação.
// Em um projeto real, esses dados viriam de uma API.
export const tecnologias = [
  {
    id: 1,
    nome: 'JavaScript',
    emoji: '🟨',
    categoria: 'Linguagem',
    ano: 1995,
    criador: 'Brendan Eich',
    resumo: 'A linguagem da web, roda no navegador e no servidor.',
    descricao:
      'JavaScript nasceu para deixar páginas web interativas. Hoje roda no navegador, no servidor (Node.js), em apps mobile e até em desktops. É a base do React.',
  },
  {
    id: 2,
    nome: 'React',
    emoji: '⚛️',
    categoria: 'Biblioteca',
    ano: 2013,
    criador: 'Meta (Facebook)',
    resumo: 'Biblioteca para criar interfaces com componentes.',
    descricao:
      'React divide a interface em componentes reutilizáveis que reagem a mudanças de estado. Ele atualiza só o que mudou na tela, usando o Virtual DOM.',
  },
  {
    id: 3,
    nome: 'React Router',
    emoji: '🧭',
    categoria: 'Biblioteca',
    ano: 2014,
    criador: 'Remix Software',
    resumo: 'Roteamento de páginas em aplicações React.',
    descricao:
      'React Router troca o componente exibido conforme a URL, sem recarregar a página. Oferece rotas aninhadas, parâmetros dinâmicos e navegação com NavLink.',
  },
  {
    id: 4,
    nome: 'Tailwind CSS',
    emoji: '🎨',
    categoria: 'Framework CSS',
    ano: 2017,
    criador: 'Adam Wathan',
    resumo: 'CSS com classes utilitárias direto no HTML.',
    descricao:
      'Tailwind fornece classes pequenas (p-4, text-xl, md:flex) que você combina no próprio JSX. Os prefixos sm:, md: e lg: deixam o layout responsivo.',
  },
  {
    id: 5,
    nome: 'Vite',
    emoji: '⚡',
    categoria: 'Ferramenta',
    ano: 2020,
    criador: 'Evan You',
    resumo: 'Servidor de desenvolvimento e build muito rápidos.',
    descricao:
      'Vite sobe o projeto em milissegundos e atualiza a tela assim que você salva o arquivo. Na hora de publicar, gera arquivos otimizados com npm run build.',
  },
  {
    id: 6,
    nome: 'Node.js',
    emoji: '🟩',
    categoria: 'Runtime',
    ano: 2009,
    criador: 'Ryan Dahl',
    resumo: 'JavaScript fora do navegador, no servidor.',
    descricao:
      'Node.js permite rodar JavaScript no computador e em servidores. É usado para criar APIs, ferramentas de linha de comando e é ele que executa o npm.',
  },
  {
    id: 7,
    nome: 'Git',
    emoji: '🌿',
    categoria: 'Ferramenta',
    ano: 2005,
    criador: 'Linus Torvalds',
    resumo: 'Controle de versão para acompanhar o código.',
    descricao:
      'Git guarda o histórico de alterações do projeto em commits. Junto com o GitHub, permite trabalhar em equipe e publicar o código.',
  },
  {
    id: 8,
    nome: 'TypeScript',
    emoji: '🔷',
    categoria: 'Linguagem',
    ano: 2012,
    criador: 'Microsoft',
    resumo: 'JavaScript com tipos, para encontrar erros antes.',
    descricao:
      'TypeScript adiciona tipos ao JavaScript. O editor avisa erros enquanto você digita, o que ajuda muito em projetos grandes.',
  },
]

// Busca uma tecnologia pelo id (retorna undefined se não existir)
export function buscarPorId(id) {
  return tecnologias.find((tec) => tec.id === id)
}
