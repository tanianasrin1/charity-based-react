import React from 'react';
import { useEffect , useState} from 'react';
import SingleScholar from './SingleScholar';
import './Scholar.css'


const Scholar = () => {
    const [scholars , setScholars] =useState([]);

    useEffect(()=>{
        fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
        .then( res => res.json())
        .then(data => setScholars(data) )
    },[])
    
    return (
        <div className='cart-item'>
            
            {
               scholars.map(scholar => <SingleScholar
                key = {scholar._id}
                scholar = {scholar}
               ></SingleScholar>) 
            } 

        </div>
    );
};

export default Scholar;