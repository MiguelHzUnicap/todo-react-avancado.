# Todo React Avançado

## Objetivo
Desenvolver uma aplicação de **lista de tarefas (Todo List)** utilizando recursos avançados do **React**.  
O foco é aplicar **Hooks**, **Hooks customizados**, **Memoization** e **Context API**, promovendo organização, reuso de lógica e performance.

---

## Funcionalidades Principais
O usuário pode:
-  Adicionar uma nova tarefa  
-  Marcar uma tarefa como concluída  
-  Remover tarefas da lista  
-  Filtrar tarefas (todas, concluídas, pendentes)

---

##  Recursos Aplicados

###  Hooks
- `useState` → gerenciamento do estado da lista  
- `useEffect` → persistência de dados no **localStorage**  
- `useContext` → compartilhamento do estado global  
- `useMemo` / `React.memo` → otimização e performance

###  Context API
- Implementado em `TodoContext.jsx` para centralizar o gerenciamento da lista e dos filtros.

###  Hooks Customizados
- `useLocalStorage` → abstrai a lógica de persistência e sincronização com o **localStorage**, facilitando reuso.

###  Memoization
- `React.memo` aplicado em componentes que não precisam re-renderizar desnecessariamente (`TodoItem`).  
- `useMemo` usado na filtragem de tarefas para evitar recomputações desnecessárias.

---


---

## Tecnologias Utilizadas
- **React (Vite)**
- **JavaScript (ESModules)**
- **Context API**
- **Hooks e Custom Hooks**
- **Memoization**
- **CSS nativo (sem bibliotecas externas)**

---

## Como Rodar o Projeto Localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/<seu-usuario>/todo-react-avancado.git
   cd todo-react-avancado


## 🧱 Estrutura do Projeto
