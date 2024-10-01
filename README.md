## Ambiente ReactJS

01 - Rodar o comando para criar o projeto ReactJS

```bash
npm create vite@latest my-react-app -- --template react-ts
```

02 - Abrir a pasta do projeto criado

03 - Instalar as dependências (node modules)

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


## Criação do projeto ReactJS

01 - Dentro da pasta `src`, criar a pasta `components`, dentro de `components`, criar a pasta `styleds`

02 - Instalar o `react-router-dom`

```bash
npm i react-router-dom
```

OBS: configuração [React Router Dom](https://reactrouter.com/en/main/start/overview)

03 - Instalar o `Styled-Components`

```bash
npm install styled-components
```

04 - Dentro da pasta `src`, criar a pasta `configs`. Dentro de `configs` criar a pasta `routes`

05 - Criar o arquivo `AppRoutes.tsx` dentro da pasta `routes`. Colar o código abaixo

```bash
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
       path: '/',
       element: <div></div>,
    },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />;
}
```

06 - No arquivo `App.tsx` colocar o seguinte código

```bash
import AppRoutes from "./configs/routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
```

07 - Criar a pasta `pages` dentro de `src`. Criar os arquivos que vão representar as páginas, ex: `Home.tsx`

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

08 - Dentro da pasta `configs` criar a pasta `global`, criar o arquivo `GlobalStyles.tsx` e inserir o código abaixo

```bash
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   }

   body {
    background-color: #ffff;
    font-family: "Poppins", sans-serif;
   }
`;
```

08 - Chamar o `<GlobalStyle />` no arquivo `App.tsx`

```bash
import { GlobalStyle } from "./configs/global/GlobalStyles";
import { AppRoutes } from "./configs/routes/AppRoutes";

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


