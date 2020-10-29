import React from 'react';

import Navigationitem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const navigationItems = () => (
    <ul className="NavigationItems" >
        <Navigationitem link="/" active >Burger Builder</Navigationitem>
        <Navigationitem link="/"  >Checkout</Navigationitem>
    </ul>
);



export default navigationItems;