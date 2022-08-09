import React from 'react';
import { useContext } from 'react';
import { InformationContext } from '../../App';
import './SingleScholar.css';


const SingleScholar = ({scholar}) => {
    const [userInfo, setUserInfo ] = useContext(InformationContext);
    const {_id, phone, nid, area, city, upazila, postCode, status, scholarName, scholarId, scholarEmail, userName, userEmail, bookingDate} = scholar
    const handleformsubmit = (e) => {
        e.preventDefault();
       const UserName = e.target.UserName.value;
       const ScholarName = e.target.ScholarName.value;
       const Phone = e.target.Phone.value;
       const Nid = e.target.Nid.value;
       const City = e.target.City.value;
       const status = e.target.status.value;
       const Upazila = e.target.Upazila.value;
       const PostCode = e.target.PostCode.value;
       const email = e.target.email.value;
       const BookingDate = e.target.BookingDate.value;
       
       const user = {UserName, ScholarName, Phone, Nid, City, status, Upazila, PostCode, email, BookingDate}
       setUserInfo([...userInfo, user])
    }
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
               <form onSubmit={handleformsubmit}>
                       <input type="text" name="UserName" placeholder='UserName' id="" />
                       <input type="text" name="ScholarName" placeholder='ScholarName' id="" />
                       <input type="number" name="Phone" placeholder='Phone' id="" />
                       <input type="number" name="Nid" placeholder='Nid' id="" />
                       <input type="text" name="City" placeholder='City' id="" />
                       <input type="text" name="status" placeholder='status' id="" />
                       <input type="text" name="Upazila" placeholder='Upazila' id="" />
                       <input type="text" name="PostCode" placeholder='PostCode' id="" />
                       <input type="email" name="email" placeholder='email' id="" />
                       <input type="text" name="BookingDate" placeholder='BookingDate' id="" /> <br />
                       <input type="submit" value="submit" placeholder='submit' />
                       
               </form>
            
        </div>
    );
};

export default SingleScholar;