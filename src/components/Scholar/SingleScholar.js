import React from 'react';
import './SingleScholar.css'

const SingleScholar = ({scholar}) => {
    const {_id, phone, nid, area, city, upazila, postCode, status, scholarName, scholarId, scholarEmail, userName, userEmail, bookingDate} = scholar
    return (
        <div className='scholar-cart'>
            <h4>Name: {userName} </h4>
            <p>scholarName: {scholarName} </p>
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
                       <input type="text" name="name" placeholder='ScholarName' id="" />
                       <input type="number" name="number" placeholder='Phone' id="" />
                       <input type="number" name="number" placeholder='Nid' id="" />
                       <input type="text" name="name" placeholder='City' id="" />
                       <input type="text" name="name" placeholder='status' id="" />
                       <input type="text" name="name" placeholder='Upazila' id="" />
                       <input type="text" name="name" placeholder='PostCode' id="" />
                       <input type="email" name="email" placeholder='email' id="" />
                       <input type="number" name="number" placeholder='BookingDate' id="" />
               </form>
            
        </div>
    );
};

export default SingleScholar;