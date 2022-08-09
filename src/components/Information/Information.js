import React, { useContext } from 'react';
import { InformationContext } from '../../App';

const Information = () => {
    const [userInfo, setUserInfo ] = useContext(InformationContext);
    console.log(userInfo)
    return (
        <div>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">UserName</th>
      <th scope="col">ScholarName</th>
      <th scope="col">Phone</th>
      <th scope="col">Nid</th>
      <th scope="col">City</th>
      <th scope="col">Status</th>
      <th scope="col">Upazila</th>
      <th scope="col">PostCode</th>
      <th scope="col">Email</th>
      <th scope="col">BookingDate</th>
    </tr>
  </thead>
  <tbody>
     
     {
        userInfo.map(singleUser => <tr>

            <td> {singleUser.UserName} </td>
            <td> {singleUser.ScholarName} </td>
            <td> {singleUser.Phone} </td>
            <td> {singleUser.Nid} </td>
            <td> {singleUser.City} </td>
            <td> {singleUser.status} </td>
            <td> {singleUser.Upazila} </td>
            <td> {singleUser.PostCode} </td>
            <td> {singleUser.email} </td>
            <td> {singleUser.BookingDate} </td>
        </tr>)
     }

    
  </tbody>
</table>
        </div>
    );
};

export default Information;