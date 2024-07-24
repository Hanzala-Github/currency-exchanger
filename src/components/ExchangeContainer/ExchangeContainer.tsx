import { useEffect, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import styled from "styled-components";
import { ExchangeCard } from "./ExchangeCard";

const Card = styled.div`
  width: 1000px;
  background-color: #e0dbdb;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .card1,
  .card2 {
    padding: 1.5rem;
    width: 400px;
    height: 270px;
    background-color: #fff;
    p {
      color: #888;
      font-size: 0.7rem;
      margin-bottom: 0.7rem;
    }
    h3 {
      font-size: 1rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .selection {
      display: flex;
      justify-content: center;
      .select {
        width: 200px;
        margin-top: 1rem;
      }
    }

    .inputfield {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 2rem;

      .firstInput {
        width: 300px;
        height: 80px;
        font-size: 4rem;
        font-weight: 700;
        border: none;

        border-bottom: 2px solid #000;

        &:focus {
          outline: none;
        }
      }
      .secondInput {
        width: 300px;
        height: 30px;
        border: none;
        color: #666;
        font-style: italic;
        font-weight: 700;

        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export function ExchangeContainer() {
  const [exchangeData, setExchangeData] = useState<null | any>(null);

  const [currencyExchangeFromValue, setCurrencyExchangeFromValue] = useState(0);
  const [currencyExchangeFrom, setCurrencyExchangeFrom] = useState<
    string | null
  >(null);

  const [currencyExchangeToValue, setCurrencyExchangeToValue] = useState(0);
  const [currencyExchangeTo, setCurrencyExchangeTo] = useState<string | null>(
    null
  );

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/1a8d31477397bd147920336b/latest/USD"
    ).then(async (res) => {
      const data = await res.json();
      setExchangeData(data);
    });
  }, []);

  useEffect(() => {
    if (exchangeData && currencyExchangeFrom && currencyExchangeTo) {
      const fromConversionRate =
        exchangeData.conversion_rates[currencyExchangeFrom];
      const toConversionRate =
        exchangeData.conversion_rates[currencyExchangeTo];

      const convertedFromValueInUsd =
        currencyExchangeFromValue / fromConversionRate;

      const calculation = toConversionRate * convertedFromValueInUsd;

      setCurrencyExchangeToValue(calculation);
    }
  }, [
    exchangeData,
    currencyExchangeFrom,
    currencyExchangeTo,
    currencyExchangeFromValue,
    currencyExchangeToValue,
  ]);

  return (
    <Card>
      <ExchangeCard
        currency={currencyExchangeFrom}
        currencyValue={currencyExchangeFromValue}
        onCurrencyChange={(currency) => {
          setCurrencyExchangeFrom(currency);
        }}
        onCurrencyValueChange={(value) => {
          setCurrencyExchangeFromValue(value);
        }}
      />
      <FaExchangeAlt
        onClick={() => {
          setCurrencyExchangeFrom(currencyExchangeTo);
          setCurrencyExchangeTo(currencyExchangeFrom);
          setCurrencyExchangeFromValue(currencyExchangeToValue);
        }}
        style={{
          border: ".5px solid #d1cfcf",
          fontSize: "2rem",
          color: "#444",
          padding: "4px",
        }}
      />
      <ExchangeCard
        currency={currencyExchangeTo}
        currencyValue={currencyExchangeToValue}
        onCurrencyChange={(currency) => {
          setCurrencyExchangeTo(currency);
        }}
        onCurrencyValueChange={(value) => {
          setCurrencyExchangeToValue(value);
        }}
      />
    </Card>
  );
}
