import React from 'react';
import { Link } from 'react-router-dom';

const Header =()=>{

    //private routes to show if logged in
    
    const token = localStorage.getItem('token');

    


    return(
        <div>
            <header>
                <h1>Friends Database</h1>
                {!token && <Link to='/login'>Login &nbsp;</Link>}
                { token && <Link to='/friendlist'>Friend List &nbsp;</Link>}
                {token && <Link to='/addfriend'>Add Friend &nbsp;</Link>}
                {token && <Link to='/logout'>Logout &nbsp;</Link> }
                
        </header>
        </div>
    )
}

export default Header;