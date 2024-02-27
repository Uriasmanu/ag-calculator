import styled from "styled-components";
import icon from '/public/icon-arrow.svg';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import Span from "../span";

const CardMaster = styled.div`
    display: flex;
    flex-direction: column;
    background: hsl(0, 0%, 100%);
    width: 40%;
    height: 55%;
    padding: 2%;
    border-radius: 3% 3% 35% 3%;
`

const ContainerCard = styled.form`
    

    section {
        display: flex;
        align-items: center;
        gap: 10px;

        div {
            border-bottom: 1px solid #000;
            width: 90%;
        }

        button {
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
                background-color: hsl(0, 0%, 8%);
            }

            img {
                width: 30px;
            }
        }
    }
`;

const Div = styled.div`
    display: flex;
`;

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
    }
    input:focus::-webkit-input-placeholder {
    color: transparent;
    border-color: hsl(259, 100%, 65%);
    
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

const Card = () => {
    const { day, setDay, month, setMonth, year, setYear } = useContext(Context);

    const [submittedDay, setSubmittedDay] = useState('--');
    const [submittedMonth, setSubmittedMonth] = useState('--');
    const [submittedYear, setSubmittedYear] = useState('--');

    const alterarDay = (event) => {
        setDay(event.target.value);

    };

    const alterarMonth = (event) => {
        setMonth(event.target.value);
    };

    const alterarYear = (event) => {
        setYear(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedDay(day);
        setSubmittedMonth(month);
        setSubmittedYear(year);
    };

    return (
        <CardMaster>
            <ContainerCard onSubmit={handleSubmit}>
                <Div>
                    <ContainerInput>
                        <label htmlFor="day">Day</label>
                        <input
                            type="number"
                            id="dia"
                            placeholder="DD"
                            onChange={alterarDay}
                            value={day}
                            required
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <label htmlFor="month">Month</label>
                        <input
                            type="number"
                            id="mes"
                            placeholder="MM"
                            onChange={alterarMonth}
                            value={month}
                            required
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <label htmlFor="year">Year</label>
                        <input
                            type="number"
                            id="ano"
                            placeholder="YYYY"
                            onChange={alterarYear}
                            value={year}
                            required
                        />
                    </ContainerInput>
                </Div>
                <section>
                    <div></div>
                    <button> <img src={icon} alt="botao com seta para baixo" /></button>
                </section>



            </ContainerCard>
            <Span valor={submittedYear} texto="Years" />
            <Span valor={submittedMonth} texto="Months" />
            <Span valor={submittedDay} texto="Days" />
        </CardMaster>
    );
};

export default Card;
