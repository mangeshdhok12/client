// components/Header.js
"use client"
import React  from 'react';
import styles from './Header.module.css'
import { useState } from 'react';

const Header = () => {
  const [status, setStatus] = useState('active');

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
  };

    return (
      <div>
        <h1>Sales Entry</h1>
        <h2 style={{backgroundColor:'hsl(65, 93%, 50%)', textAlign:'center', padding:'10px'}}>Header</h2>
       <p style={{marginLeft:'200px'}}>
        Vr NO:-<input type='number'  style={{ marginRight: '50px'}}/> 
        Vr Date:-<input type="date" style={{ marginRight: '50px'}}/>
       
       <label htmlFor="statusDropdown">Status:</label>
      
      <select
        id="statusDropdown"
        name="statusDropdown"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      {/* <p>Selected Status: {status}</p> */}
  
  </p>
        <br/>
        <p  style={{marginLeft:'200px'}}>Ac Name: <input type='varchar(200)' style={{marginRight:'50px'}}/>
         Ac.Amt <input type='number' /> </p>
      </div>
    );
  };
  
  export default Header;
  // components/Header.js


  