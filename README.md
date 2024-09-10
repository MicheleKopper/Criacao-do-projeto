## Ambiente ReactJS

01 - Rodar o comando para criar o projeto ReactJS

```bash
npm create vite@latest my-react-app -- --template react-ts
```

02 - Abrir a pasta do projeto criado

03 - Instalar as dependências

```bash
npm install
```

04 - Rodar o script dev para subir o frontEnd. No terminal acessar o link local (ctrl + clique) http://localhost:5173/

```bash
npm run dev
```

05 - Limpar o arquivo `App.tsx`

```bash
function App() {

  return <h1>Olá mundo</h1>
}

export default App
```

05 - Excluir arquivos CSS desnecessários `(index.css, app.css)`

06 - No arquivo `main.tsx` excluir `import './index.css'`

07 - Excluir pasta `assets`

## Criação do projeto ReactJS

01 - Dentro da pasta `src`, criar a pasta `components`

02 - Instalar o `react-router-dom`

```bash
npm i react-router-dom
```

OBS: configuração [React Router Dom](https://reactrouter.com/en/main/start/overview)

03 - Dentro da pasta `src`, criar a pasta `configs`. Dentro de `configs` criar a pasta `routes`

04 - Criar o arquivo `AppRoutes.tsx` dentro da pasta `routes`. Colar o código abaixo

```bash
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
```

05 - No arquivo `App.tsx` colocar o seguinte código

```bash
import AppRoutes from "./configs/routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
```

06 - Criar a pasta `pages` dentro de `src`. Criar os arquivos que vão representar as páginas, ex: `Home.tsx` e `Login.tsx`

- Home:

```bash
function Home () {
    return (
      <>
        <h1>Bem-vindo</h1>
      </>
    );
  }

  export default Home
```

- Login:

```bash
function Login() {
  return (
    <>
      <h1>Login</h1>
    </>
  );
}

export default Login
```

07 - Dentro da pasta `configs` criar a pasta `global`, criar o arquivo `GlobalStyles.tsx` e inserir o código abaixo

```bash
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
`;
```

08 - Chamar o `<GlobalStyle />` no arquivo `App.tsx`

```bash
import { GlobalStyle } from "./configs/global/GlobalStyles";
import AppRoutes from "./configs/routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
```
09 - Criar a pasta `components` dento de `src`. Criar a pasta `styleds` dentro de `components`. Criar os arquivos .tsx para as customizações