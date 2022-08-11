import React, { useContext } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { DonationContext } from '../../App';



<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>;


const Header = () => {

    const [donation, setDonation ] = useContext(DonationContext);
    console.log(donation);
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
                 
           
                 
           
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
  <table class="table bg-white">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>  
   
  </div>
</div>
            </div>

        </div>
    );
};

export default Header;