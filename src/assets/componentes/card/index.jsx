import styled from "styled-components";

const ContainerCard = styled.div`

    background: hsl(0, 0%, 100%);
    width: 40%;
    height: 55%;
    padding: 2%;
    border-radius: 3% 3% 35% 3%;
`

const Card = () =>{
    return(
        <ContainerCard>
            <input type="nunber" />

        </ContainerCard>
    )
}

export default Card;