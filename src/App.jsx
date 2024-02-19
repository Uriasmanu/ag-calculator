import Card from "./assets/componentes/card";
import EstilosGlobais from "./assets/componentes/estilosGlobais"
import styled from "styled-components";

const ContainerApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`


function App() {

  return (
    <ContainerApp>
      <EstilosGlobais/>
      <Card/>
    </ContainerApp>
  )
}

export default App
