import React from 'react';

import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';


import './SideDrawer.css';

const sideDrawer = (props) => {

    let attachedClasses = ["SideDrawer", "Close"];

    if(props.open){
        attachedClasses =["SideDrawer" ," Open"];
    }

    return(
        <Auxi>
            <BackDrop show ={props.open} clicked ={props.closed} />
            <div className={attachedClasses.join(' ')}  >
                <Logo height="11%" />
                <nav  >
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );
}

export default sideDrawer;