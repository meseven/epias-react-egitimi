import React, { useState } from "react";
import { useEffect } from "react";
import Products from "./Products";

function ConvertToUSD() {
  const [title, setTitle] = useState("Doviz Çevrim");
  const [USDTL, setUSDTL] = useState(17.32);
  const [input, setInput] = useState(100);

  useEffect(() => {
    console.log("DOLAR/TL DEĞİŞTİ");
  }, [USDTL]);

  return (
    <div className="convert">
      <h2>{title}</h2>
      <button onClick={() => setTitle("Doviz Çevrim İşlemi")}>Click</button>

      <br />
      <br />

      <button onClick={() => setUSDTL((prev) => prev - 0.5)}>Azalt</button>
      <button onClick={() => setUSDTL((prev) => prev + 0.5)}>Arttır</button>

      <br />
      <br />

      <div>
        1 USD ={" "}
        <input value={USDTL} onChange={(e) => setUSDTL(e.target.value)} /> TL
      </div>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Kaç dolar eder?"
        />{" "}
        TL = {USDTL && <span>{(input / USDTL).toFixed(2)}$</span>}
      </div>

      <hr />

      <Products money={(input / USDTL).toFixed(2)} />
    </div>
  );
}

export default ConvertToUSD;
