import React from "react";

const name = "Ahmet";
const isLoggedIn = false;
const isActive = true;

function Header() {
  const handleClick = () => {
    alert("Hello");
  };

  return (
    <div>
      HEADER
      <hr />
      {/* {isLoggedIn ? "Hoş geldin " + name : "Giriş Yapın"} */}
      {/* {isLoggedIn ? "Hoş geldin " + name : null} */}
      {isLoggedIn && isActive && "Hoş geldin " + name}
      {!isLoggedIn && "Giriş Yap"}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Header;
