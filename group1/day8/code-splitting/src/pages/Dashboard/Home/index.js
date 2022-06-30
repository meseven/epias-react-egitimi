import React from "react";

function Home() {
  const handleClick = () => {
    import("./Math").then((math) => {
      console.log(math.sum(1, 2));
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Hesapla</button>
    </div>
  );
}

export default Home;
