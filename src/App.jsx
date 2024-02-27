import Card from "./assets/componentes/card";
import EstilosGlobais from "./assets/componentes/estilosGlobais"
import styled from "styled-components";
import { ContextProvider } from "./assets/context/Context";


const ContainerApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`


function App() {

  return (
    <ContainerApp>
      <EstilosGlobais />
      <ContextProvider>
        <Card />
      </ContextProvider>
    </ContainerApp>
  )
}

export default App
