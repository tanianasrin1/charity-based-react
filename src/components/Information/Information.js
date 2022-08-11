import React, { useContext } from 'react';
import { useEffect } from 'react';
import { InformationContext } from '../../App';
import { data} from './data';

const Information = () => {
    const [userInfo, setUserInfo ] = useContext(InformationContext);
    console.log(data);

    useEffect ( () => {
      setUserInfo(data); 

    },[data])

    const handleSearch = (e) => {
      e.preventDefault();
      const searchValue = e.target.searchInput.value;
    
      const filteredData = userInfo.filter(
        (user) =>
          user.UserName.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.ScholarName.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.Phone.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.Nid.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.City.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.status.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.PostCode.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.BookingDate.toLowerCase().includes(searchValue.toLowerCase())
      );
    
      setUserInfo(filteredData);
    };

    return (
        <div>
          <form  onSubmit={handleSearch}>
              <input type="text" name="searchInput" placeholder='search' id="" />
              <input type="submit" value="submit" />
          </form>
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