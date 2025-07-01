import React from 'react';
import { menuList } from "../helpers/MenuList";

import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {menuList.map((menuItem, index) => {
         
       return <MenuItem index={index} image={menuItem.image} name={menuItem.name} price={menuItem.price} contact={menuItem.contact}/>
        })}

      </div>
    </div>
  );
}

export default Menu;
