import React from 'react';
function Applylicense(){
return<div className="container">
    <h2 id="regformhead">License Application Form</h2>
    <form >
      <div className="row">
        <div className="col-25">
          <label for="fname">Full Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="fname" name="fullname"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="oname">Son/Wife/Daughter of</label>
        </div>
        <div className="col-75">
          <input type="text" id="oname" name="oname"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="gen">Gender</label>
        </div>
        <div className="col-75">
          <select id="gen" name="gen">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label for="perad">Permanant Address</label>
        </div>
        <div class="col-75">
          <input type="text" id="perad" name="perad"/>
        </div>
      </div>
       <div className="row">
        <div className="col-25">
          <label for="tempad">Temporary Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="tempad" name="tempad"/>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label for="dob">Date of Birth</label>
        </div>
        <div className="col-75">
          <input type="date" id="dob" name="dob"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="aadhar">Aadhar number</label>
        </div>
        <div className="col-75">
          <input type="number" id="aadhar" name="aadhar"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="avatar">Upload Aadhar card:</label>
        </div>
        <div className="col-75">
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="avatar">Upload your photograph:</label>
        </div>
        <div className="col-75">
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
        </div>
      </div> 
      <div className="row">
        <div className="col-25">
          <label for="vehcls">Class of Vehicle</label>
        </div>
        <div className="col-75">
          <input type="text" id="vehcls" name="vehcls"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="eng">Phone Number</label>
        </div>
        <div className="col-75">
          <input type="number" id="eng" name="eng"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="email">Email</label>
        </div>
        <div className="col-75">
          <input type="email" id="email" name="email"/>
        </div>
      </div>
      <br/>
      <div id="ressub" className="row">
        <input id="ressub" type="reset" value="Reset"/>
        <input id="ressub" type="submit" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" value="Submit"/>
      </div>
    </form>
  </div>
  }
  export default Applylicense;