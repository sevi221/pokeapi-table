import React, { useState } from 'react';
import Table from '../Components/Table';
import logo from '../Assets/Images/pokemon.png';
import '../Assets/Scss/main.scss';

const Layout = () => {
    return (
        <>
        <div className='container'>
            <div className='title'>
                <img src={logo} alt='logo'/>
                </div>
            <main>
                <Table/>
            </main>
        </div>
        </>
    );
}

export default Layout;