import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LoginPage from './login/LoginPage';
import SearchBar from '../Search/SearchBar'

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='navbar'>
        <Link to='/'>
            <img
                className="airbnb_logo"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt=""
            />
        </Link>
        {showSearch && <SearchBar/>}
        <div className='quick_search'>
            <SearchIcon className="search_icon" />
            <input type="text" onClick={() => setShowSearch(!showSearch)}/>
        </div> 
        <div className='drop_downs'>
            <p>Become a host</p>
            <div className="language">
                <LanguageIcon />
                <ExpandMore />
            </div>
            <LoginPage />
        </div>
    </div>

  )
}

export default Navbar;
