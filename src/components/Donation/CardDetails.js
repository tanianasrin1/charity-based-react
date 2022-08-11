import React from 'react';
import './CardDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>;


const CardDetails = ({card}) => {
    const { id, img, name, des } = card;
    return (
        <>
           <div  className='col-sm-1 col-md-2 col-lg-4 mb-5 '>
            <div
           
                    class="shadow">
              <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title fw-bold">{name}</h5>
            <p> <small>{des}</small>  </p>
            <div className='icon'>
            <button  class="btn btn-outline-info fw-bold">
              <p>  Add to card</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
            </div>

            </div>
        </div> 
           </div> 
        </>
    );
};

export default CardDetails;