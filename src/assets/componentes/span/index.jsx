import styled from "styled-components";

const Textos = styled.div `
    display: flex;
    gap: 10px;
    font-size: 40px;
    height: 15%;
    font-weight: bold;
    align-items: center;

    h2:first-child {
        color: hsl(259, 100%, 65%);
    }
`

const Span = ({valor,texto}) =>{
    return(
        <Textos>
            <h2>{valor}</h2>
            <h2>{texto}</h2>
        </Textos>
    )

}

export  default Span