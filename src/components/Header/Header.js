import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>;


const Header = () => {
    return (
        <div className='navbar-style'>
           
            <div>
                <nav>
                   <ul>
                   <CustomLink className="list" to="/home">Home</CustomLink>
                   <CustomLink className="list" to="/scholar">Schedule</CustomLink>
                   <CustomLink className="list" to="/information">Information</CustomLink>
                   <CustomLink className="list" to="/donation">Donation</CustomLink>
                   </ul>
          
                </nav>
            </div>

            <div>
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default Header;