import React from 'react';
import { Link } from 'react-router-dom';
function Permit(){
    return <div id="myper" className="container"><br/>
    <div className="dropdown">
        <button className="dropbtn">VIEW DOCUMENTS</button>
        <div className="dropdown-content">
        <Link to='/myrc'>REGISTRATION CERTIFICATES</Link>
        <Link to='/mylic'>LICENSE</Link>
        <Link to='/myper'>PERMITS</Link>
        </div>
      </div>
    <h3 id="h1">MY PERMITS</h3>
    <br/>   
    <div className="table-responsive">
    <table className="table" id="Info">
      <tr>
          <th>S.No</th>
          <th>OWNER NAME</th>
          <th>LICENSE NUMBER</th>
          <th>PLACE</th>
          <th>DATE OF ISSUE</th>
          <th>VALIDITY</th>
          <th>DOWNLOAD PERMIT</th>
      </tr>
      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
  </table>  
</div>
<div>
<button onclick="window.print()">Print</button>
</div>
</div>
}
export default Permit;