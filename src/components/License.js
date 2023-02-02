import React from 'react';
import { Link } from 'react-router-dom';
function License(){
return <div id="mylic" className="container"><br/>
<div class="dropdown">
  <button class="dropbtn">VIEW DOCUMENTS</button>
  <div class="dropdown-content">
  <Link to='/myrc'>REGISTRATION CERTIFICATES</Link>
  <Link to='/mylic'>LICENSE</Link>
  <Link to='/myper'>PERMITS</Link>
  </div>
</div>
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
<button onclick="window.print()">Print</button>
</div>
}
export default License;