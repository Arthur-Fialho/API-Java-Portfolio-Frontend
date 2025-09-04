# Frontend - API de Portfólio

Este projeto é o frontend desenvolvido para consumir a [API de Portfólio](https://github.com/Arthur-Fialho/API-Java-Portfolio). Ele é responsável por buscar e exibir os dados de educação, experiências profissionais e projetos em uma interface web moderna e responsiva.

## ✨ Funcionalidades

- Exibição da seção "Sobre Mim" (Hero).
- Galeria de projetos com links e descrições.
- Listagem da formação acadêmica.
- Listagem de todas as experiências profissionais.

## 🚀 Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface de usuário.
- **Vite:** Ferramenta de build para um desenvolvimento rápido.
- **Tailwind CSS:** Framework CSS para estilização.
- **Axios:** Cliente HTTP para realizar as chamadas à API.
- **ESLint:** Ferramenta para linting e padronização de código.

## ⚙️ Configuração e Instalação

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Arthur-Fialho/API-Java-Portfolio-Frontend.git
    ```

2.  **Navegue até o diretório do frontend:**
    ```bash
    cd api-portifolios/API-Java-Portfolio-Frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    - Crie um arquivo chamado `.env` na raiz do diretório do frontend.
    - Adicione a seguinte variável, apontando para o endereço da sua API backend:
      ```
      VITE_API_BASE_URL=http://localhost:8080
      ```

5.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
    O servidor de desenvolvimento será iniciado em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o aplicativo em modo de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção na pasta `dist`.
- `npm run lint`: Executa o linter (ESLint) para verificar a qualidade do código.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.
