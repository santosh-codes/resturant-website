import React, { useState } from "react";
import MenuCard from "./MenuCard";
import "./style.css";
import Menu from "./MenuApi";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
