import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
           
            <nav>
                <ul>
                <CustomLink className="list" to="/home">Home</CustomLink>
                <CustomLink className="list" to="/information">Information</CustomLink>
                <CustomLink className="list" to="/scholar">Scholar Schedule</CustomLink>
                <CustomLink className="list" to="/donation">Donation</CustomLink>
                </ul>
          
            </nav>
        </div>
    );
};

export default Header;