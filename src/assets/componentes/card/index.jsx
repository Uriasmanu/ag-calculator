import styled from "styled-components";

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    background: hsl(0, 0%, 100%);
    width: 40%;
    height: 55%;
    padding: 2%;
    border-radius: 3% 3% 35% 3%;

    section{
        display: flex;
        align-items: center;
        gap: 10px;

        div{
            border-bottom: 1px solid #000;
            width: 90%;
        }

        button{
            border-radius: 50%;
            width: 53px;
            height: 53px;
            display: flex;
            background-color: hsl(259, 100%, 65%);
            border: none;
            align-items: center;
            justify-content: center;

            &:hover {
                cursor: pointer;
                background-color:  hsl(0, 0%, 8%);
            }

            img{
                width: 30px;
            
            }
        }
    }

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
        width: 70%;
        height: 30px;
        padding: 10px;

        &:hover {
            cursor: pointer;
            
        }

        &:focus {
            border-color: hsl(259, 100%, 65%);
        }
    }

`

import icon from '/public/icon-arrow.svg'

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
            <section>
                <div></div>
                <button> <img src={icon} alt="botao com seta para baixo" /></button>
            </section>
        </ContainerCard>
    )
}

export default Card;