import { Header } from "antd/es/layout/layout";
import React from "react";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  background: "linear-gradient(180deg, #2a547c, #224669)",
  zIndex: 15000,
};

const HeaderComponent = () => {
  return <Header style={headerStyle}>Header</Header>;
};

export default HeaderComponent;
