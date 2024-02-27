import styled from "styled-components";
import icon from '/public/icon-arrow.svg';
import { useState } from "react";
import Span from "../span";
import useDateInput from "../../hooks/hooks";

const CardMaster = styled.div`
    display: flex;
    flex-direction: column;
    background: hsl(0, 0%, 100%);
    width: 40%;
    height: 55%;
    padding: 2%;
    border-radius: 3% 3% 35% 3%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        background: hsl(0, 0%, 100%);
        width: 94%;
        height: 45%;
        padding: 2%;
        border-radius: 3% 3% 35% 3%;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    }
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

    @media screen and (max-width: 600px) {
        section{
            margin-top: 5%;
            width: 114%;
        }

            button{
                z-index: 1;
                right: 50%;
                position: relative;
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

    @media screen and (max-width: 600px) {
        width: 33%;
    }
`;

const Spans = styled.div`
    display: flex;
    flex-direction: column;
`

const Card = () => {
    const { day, month, year, setDay, setMonth, setYear } = useDateInput();
   
    const [ageYears, setAgeYears] = useState('--');
    const [ageMonths, setAgeMonths] = useState('--');
    const [ageDays, setAgeDays] = useState('--');
  

    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Calculate age
        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();
        let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
        let monthsDiff = currentDate.getMonth() - birthDate.getMonth();
        let daysDiff = currentDate.getDate() - birthDate.getDate();

        // Adjust age if current date has not yet reached birthdate
        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            yearsDiff--;
            monthsDiff += 12;
            if (daysDiff < 0) {
                monthsDiff--;
                const tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                daysDiff = tempDate.getDate() + daysDiff;
            }
        }

        setAgeYears(yearsDiff);
        setAgeMonths(monthsDiff);
        setAgeDays(daysDiff);
    };

    return (
        <CardMaster>
            <ContainerCard onSubmit={handleFormSubmit}>
                <Div>
                    <ContainerInput>
                        <label htmlFor="day">Day</label>
                        <input
                            type="number"
                            id="dia"
                            placeholder="DD"
                            onChange={handleChangeDay}
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
                            onChange={handleChangeMonth}
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
                            onChange={handleChangeYear}
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
            <Spans>
                <Span valor={ageYears} texto="years" />
                <Span valor={ageMonths} texto="months" />
                <Span valor={ageDays} texto="days" />
            </Spans>
        </CardMaster>
    );
};

export default Card;

