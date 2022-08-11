import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import './Donation.css'

const Donation = () => {
  const [cards, setCards] = useState([]);
  
    useEffect(() => {
        fetch('cardsdata.json')
          .then(res => res.json())
        .then(data => setCards(data))
      },[])

    return (
      <>
      <h1 className=' text-center fw-bold fs-3 my-5 '> Donation </h1>      
        <div className=' container'>

        <div className=' row' >

 {
    cards.map(card => <CardDetails
      key={card.id}
    card={card}>
    </CardDetails>)

         }

           </div>

           
       </div>
      </>
    );
};

export default Donation;

  
