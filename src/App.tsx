import React from "react";
import styled from "styled-components";
import { FaExchangeAlt } from "react-icons/fa";

function App() {
  return (
    <Card>
      <div className="card1">
        <p>
          <i>Ahhble 38 2019-8-18/19-13:02 GMT + 03:00</i>
        </p>
        <h3>Y MeHr ecTb</h3>
        <div className="selection">
          <select className="select">
            <option className="option" value="MDL">
              MDL
            </option>
            <option className="option" value="USD">
              USD
            </option>
            <option className="option" value="EUR">
              EUR
            </option>
            <option className="option" value="RON">
              RON
            </option>
            <option className="option" value="UAH">
              UAH
            </option>
          </select>
        </div>

        <div className="inputfield">
          <input type="number" className="firstInput" />
          <input
            type="text"
            value="exchange-currency"
            className="secondInput"
            disabled
          />
        </div>
      </div>
      <FaExchangeAlt
        style={{
          border: ".5px solid #d1cfcf",
          fontSize: "2rem",
          color: "#444",
          padding: "4px",
        }}
      />
      <div className="card2">
        <p>
          <i>Ahhble 38 2019-8-18/19-13:02 GMT + 03:00</i>
        </p>
        <h3>Y MeHr ecTb</h3>
        <div className="selection">
          <select className="select">
            <option className="option" value="MDL">
              MDL
            </option>
            <option className="option" value="USD">
              USD
            </option>
            <option className="option" value="EUR">
              EUR
            </option>
            <option className="option" value="RON">
              RON
            </option>
            <option className="option" value="UAH">
              UAH
            </option>
          </select>
        </div>

        <div className="inputfield">
          <input type="number" className="firstInput" />
          <input
            type="text"
            value="exchange-currency"
            className="secondInput"
            disabled
          />
        </div>
      </div>
    </Card>
  );
}

export default App;

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
