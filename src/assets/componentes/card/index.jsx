import styled from "styled-components";

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    background: hsl(0, 0%, 100%);
    width: 40%;
    height: 55%;
    padding: 2%;
    border-radius: 3% 3% 35% 3%;

`
const Div = styled.div`
    display: flex;
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;

    input {
        border-radius: 5px;
        width: 80%;
        height: 40px;

    }

`

import icon from '../../../../public/icon-arrow.svg'

const Card = () => {
    return (
        <ContainerCard>
            <Div>
                <ContainerInput>
                    <label htmlFor="day">Day</label>
                    <input type="number" id="dia" />
                </ContainerInput>

                <ContainerInput>
                    <label htmlFor="month">Month</label>
                    <input type="number" id="mes" />
                </ContainerInput>

                <ContainerInput>
                    <label htmlFor="year">Year</label>
                    <input type="number" id="ano" />
                </ContainerInput>
            </Div>
            <div></div>
            <button> <img src={icon} alt="botao com seta para baixo" /></button>
        </ContainerCard>
    )
}

export default Card;