import React, { Component } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ResponsePage = ()=>{
    return(
        <div className='responsePageDiv'>
            <h2>Your Transaction has been created Succesfully</h2>
            <FaCheckCircle size='10rem' color='#007538' />
            <p>Click <NavLink className='previewLink' to='/transactionPreview/buyerPay'><b>here</b> </NavLink> to preview Your Transaction</p>
            
        </div>
    )
}
export default ResponsePage;
