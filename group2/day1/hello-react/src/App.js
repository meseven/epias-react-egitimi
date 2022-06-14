import React from "react";
// import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
// import User from "./components/User";
// import Users from "./components/Users";

function App() {
  return (
    <div className="test">
      {/* <Header /> */}
      <Paragraph text={"Benim paragrafım"} color={"11"} numberOfLines={2} />
      {/* <Paragraph text="Paragraf 2" color="gray" /> */}

      <hr />
      {/* <User data={{ id: 1, name: "Ahmet", age: 28 }} /> */}

      {/* <Users data={["Ahmet", "Mehmet", "Ayşe", "Fatma"]} /> */}
    </div>
  );
}

export default App;
