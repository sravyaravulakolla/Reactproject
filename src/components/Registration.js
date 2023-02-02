import React from 'react';
import { Link } from 'react-router-dom';
function Registration(){
  return <div id="myreg" className="container"><br/>
  <div class="dropdown">
      <button class="dropbtn">VIEW DOCUMENTS</button>
      <div class="dropdown-content">
      <Link to='/myrc'>REGISTRATION CERTIFICATES</Link>
      <Link to='/mylic'>LICENSE</Link>
      <Link to='/myper'>PERMITS</Link>
      </div>
    </div>
  <h3 id="h1">MY REGISTRATIONS</h3>
  <br/>
  <div className="table-responsive">
  <table className="table" id="Info">
    <tr>
        <th>S.No</th>
        <th>OWNER NAME</th>
        <th>REGISTRATION NUMBER</th>
        <th>VEHICLE MODEL</th>
        <th>REGISTRATION DATE</th>
        <th>RC STATUS</th>
        <th>Download RC</th>
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
<button onclick='window.print()'>Print</button>
</div>
}
export default Registration;