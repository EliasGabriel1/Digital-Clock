import React from "react";
import "./App.css";
import Image from "./Compontents/Image";
import GroupSociais from "./Compontents/GroupSociais";
import ButtonTheme from "./Compontents/ButtonThema";
import Clock from "./Compontents/Clock"

export default function App() {

  return (
    <div className="Conteudo">
      <ButtonTheme/>
      <div className="App">
          <Clock />
          <Image />
      </div>
      <GroupSociais/>
    </div>
  );
}
