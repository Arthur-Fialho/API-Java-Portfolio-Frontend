# Portfólio Pessoal - Front-end com React

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-cyan?logo=tailwindcss)
![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-deployed-orange?logo=awsamplify)

> Status: Concluído e implantado na AWS ✅

## 🚀 **[Aceda à versão online aqui!](https://arthurfialho.com.br/)**

![Screenshot do Portfólio](./src/assets/homepage.png)

---

Este projeto é o front-end desenvolvido para consumir a **[API de Portfólio em Java/Spring Boot](https://github.com/Arthur-Fialho/API-Java-Portfolio)**. Ele é responsável por buscar e exibir os dados de projetos, habilidades e outras informações numa interface web moderna, responsiva e dinâmica.

## ✨ Funcionalidades Principais

- **Página Única (SPA):** Design moderno de página única com navegação por rolagem suave.
- **Carregamento Dinâmico:** Todos os dados (projetos, habilidades, etc.) são carregados de forma assíncrona a partir da API back-end.
- **Design Responsivo:** A interface adapta-se perfeitamente a ecrãs de desktop, tablets e telemóveis.
- **Tema Dinâmico (Dark/Light Mode):** Um seletor de tema que altera a aparência do site e guarda a preferência do utilizador.
- **Animações em CSS:** Efeitos como um fundo dinâmico e animações de hover que criam uma experiência de utilizador mais rica.

## 🏗️ Arquitetura de Deploy (AWS)

O front-end está implantado utilizando o **AWS Amplify**, configurado para um fluxo de CI/CD (Integração e Entrega Contínua):
- Cada `push` para a branch `main` no GitHub aciona um novo build e deploy automático.
- O Amplify gere a distribuição global do site através de um CDN, garantindo tempos de carregamento rápidos em todo o mundo.
- As variáveis de ambiente, como o URL da API, são geridas de forma segura no painel do Amplify.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Core** | React 18, Vite |
| **Estilização** | Tailwind CSS |
| **Comunicação API** | Axios |
| **Ícones** | React Icons |
| **Qualidade de Código** | ESLint, Prettier |
| **Deploy** | AWS Amplify, Git & GitHub |

## ⚙️ Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Arthur-Fialho/API-Java-Portfolio-Frontend.git](https://github.com/Arthur-Fialho/API-Java-Portfolio-Frontend.git)
    cd API-Java-Portfolio-Frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Crie um ficheiro chamado `.env` na raiz do projeto.
    - Adicione a seguinte variável, apontando para o endereço da sua API back-end (local ou na nuvem):
      ```
      VITE_API_BASE_URL=http://localhost:8080
      ```

4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
    O servidor de desenvolvimento será iniciado em `http://localhost:5173`.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para produção na pasta `dist`.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.

---

## Autor

**Arthur Fialho**
* [GitHub](https://github.com/Arthur-Fialho)
* [LinkedIn](https://www.linkedin.com/in/arthurfialho/)