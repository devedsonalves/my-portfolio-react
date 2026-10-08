# Portfólio em formato de chat

A página inicial e `/chat` exibem o portfólio interativo. Uma pergunta inicial pode ser passada por URL: `/chat?query=Quais%20são%20suas%20habilidades%3F`.

O chat é uma simulação local: identifica assuntos por palavras-chave e apresenta respostas editoriais. Não utiliza API de IA, não envia perguntas a um servidor e não armazena o histórico. Perguntas fora dos assuntos previstos recebem sugestões de navegação.

## Personalização

- `src/data/portfolio-chat.ts`: respostas, assuntos, tecnologias e contatos.
- `src/data/projects.ts`: projetos e imagens.
- `src/data/experience.ts`: trajetória profissional e realizações.
- `src/styles/chat-portfolio.css`: identidade visual e estilos responsivos, isolados pela classe `.portfolio-chat`.
- `src/hooks/use-portfolio-chat.ts`: estado da conversa, interpretação da URL, atraso da resposta e cancelamento ao reiniciar.

O projeto contém apenas o portfólio de chat. Rotas desconhecidas, incluindo as antigas, exibem a página 404. O seletor no cabeçalho alterna entre claro e escuro, respeitando inicialmente a preferência do sistema e salvando a escolha no navegador.

## Verificação

Execute `npm run build`, `npx tsc --noEmit -p tsconfig.app.json` e `npm run lint`.

No navegador, confira perguntas digitadas e sugeridas, detalhes de projetos, experiências expansíveis, links de contato, perguntas desconhecidas, Enter e Shift+Enter, menu mobile e reinício durante uma resposta. O reinício limpa mensagens e rascunho; recarregar a página inicia outra conversa, exceto quando há uma pergunta na URL.
