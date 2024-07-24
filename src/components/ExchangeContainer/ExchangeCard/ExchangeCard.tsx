import { AVAILABLE_CURRENCIES } from "../../../constants/AvailableCurrencies";

interface ExchangeCardProps {
  currencyValue: number;
  currency: string | null;
  onCurrencyChange: (currency: string) => void;
  onCurrencyValueChange: (value: number) => void;
}

export function ExchangeCard(props: ExchangeCardProps) {
  const { currency, currencyValue, onCurrencyChange, onCurrencyValueChange } =
    props;

  return (
    <div className="card1">
      <p>
        <i>Ahhble 38 2019-8-18/19-13:02 GMT + 03:00</i>
      </p>
      <h3>Y MeHr ecTb</h3>
      <div className="selection">
        <select
          className="select"
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
          value={`${currency}`}
        >
          {AVAILABLE_CURRENCIES.map((cur) => (
            <option className="option" value={cur.currency}>
              {cur.name}
            </option>
          ))}
        </select>
      </div>

      <div className="inputfield">
        <input
          type="number"
          className="firstInput"
          value={currencyValue}
          onChange={(e) => {
            onCurrencyValueChange(Number(e.target.value));
          }}
        />
        <input
          type="text"
          value="exchange-currency"
          className="secondInput"
          disabled
        />
      </div>
    </div>
  );
}
