import React from "react";
import { useState } from "react";
import Products from "./Products";

function Converter() {
  const [USDTL, setUSDTL] = useState(17.32);
  const [money, setMoney] = useState(100);

  const fixedMoney = (money / USDTL).toFixed(2);
  return (
    <div className="converter">
      <div>
        1$ = <input value={USDTL} onChange={(e) => setUSDTL(e.target.value)} />{" "}
        TL
      </div>
      <div>
        <input
          placeholder="Elimizdeki TL"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />{" "}
        = {fixedMoney}$
      </div>

      <hr />

      <Products money={fixedMoney} />
    </div>
  );
}

export default Converter;
