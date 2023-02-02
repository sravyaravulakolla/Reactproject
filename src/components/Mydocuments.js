import React from 'react';
import { Link } from 'react-router-dom';
function Mydocuments(){
return <div id="mydocs" className="container"><br/>
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
  <h3 id="h1">MY LICENSE</h3>
  <br/>
  <table id="Info">
    <tr><td>LICENSE NUMBER:</td></tr>
    <tr><td>HOLDER'S NAME:</td></tr>
    <tr><td>ADDRESS:</td></tr>
    <tr><td>MOBILE NUMBER:</td></tr>
    <tr><td>DATE OF ISSUE:</td></tr>
    <tr><td>VALIDITY:</td></tr>
</table>
<br/> 
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
<button onclick="window.print()">Print</button>
</div>
</div>
}
export default Mydocuments;