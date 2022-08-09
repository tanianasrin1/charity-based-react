import React from 'react';
import './SingleScholar.css'

const SingleScholar = ({scholar}) => {
    const {_id, phone, nid, area, city, upazila, postCode, status, scholarName, scholarId, scholarEmail, userName, userEmail, bookingDate} = scholar
    return (
        <div className='scholar-cart'>
            <h4>Name: {userName} </h4>
            <p>Id: {_id} </p>
            <p>Phone: {phone} </p>
            <p>Nid: {nid} </p>
            <p>City: {city} </p>
            <p>Status: {status} </p>
            <p>Upazila : {upazila} </p>
            <p>PostCode: {postCode} </p>
            <p>UserEmail: {userEmail} </p>
            <p>BookingDate: {bookingDate} </p>

            <h2>Form</h2>
               <form >
                       <input type="text" name="name" placeholder='UserName' id="" />
                       <input type="number" name="number" placeholder='number' id="" />
                       <input type="email" name="email" placeholder='email' id="" />
               </form>
            
        </div>
    );
};

export default SingleScholar;