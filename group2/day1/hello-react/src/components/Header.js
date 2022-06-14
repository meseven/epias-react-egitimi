import React from "react";

const name = "Mehmet";
const isLoggedIn = true;

function Header() {
  return (
    <>
      <h2>HEADER</h2>

      {/* <div>{isLoggedIn ? "Hoş geldin " + name : "Giriş Yap"}</div> */}

      {/* {isLoggedIn && "Hoş geldin " + name}
      {!isLoggedIn && "Giriş Yap"} */}

      {isLoggedIn ? "Hoş geldin" + name : null}
    </>
  );
}

export default Header;
