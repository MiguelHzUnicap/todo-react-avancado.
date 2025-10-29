# todo-react-avancado

Aplicação de lista de tarefas (Todo List) demonstrando uso avançado de React:
- Context API
- Hooks (useState, useEffect)
- Hook customizado (useLocalStorage)
- Memoization (useMemo, React.memo)

## Tecnologias
- React (Vite)
- JavaScript (ESModules)
- CSS simples (arquivo index.css)

## Como rodar localmente
1. Clone o repositório
```bash
git clone <repo-url>
cd todo-react-avancado
```
2. Instale dependências
```bash
npm install
```
3. Rode em modo desenvolvimento
```bash
npm run dev
```
> Se não tiver Vite configurado, crie com `npm create vite@latest todo-react-avancado -- --template react` e substitua `src` pelos arquivos deste projeto.

## Observações
- O projeto persiste tarefas no localStorage via hook customizado `useLocalStorage`.
- Componentes que recebem props pesadas são memorizados com React.memo e a lista de tarefas é filtrada com useMemo para evitar recomputações desnecessárias.
