import React from 'react';
import ScholarFrom from './ScholarFrom';
import Scholar from './Scholar';
import './ScholarHome.css'

const ScholarHome = () => {
    return (
        <div className='scholar-style'>
            <h2>ScholarHome</h2>
            <Scholar></Scholar>
            <ScholarFrom></ScholarFrom>
        </div>
    );
};

export default ScholarHome;