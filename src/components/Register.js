import React from 'react';
function Register(){
    return <>
    <div  className="container">
    <h2 id="regformhead">Vehicle Registration Form</h2>
    <form>
      <div className="row">
        <div className="col-25">
          <label for="fname">Full Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="fname" name="fullname" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="age">Age</label>
        </div>
        <div className="col-75">
          <input type="number" id="age" name="age" required/>
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
        <div className="col-75">
          <input type="text" id="perad" name="perad" required/>
        </div>
      </div>
       <div className="row">
        <div className="col-25">
          <label for="tempad">Temporary Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="tempad" name="tempad" required/>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label for="dob">Date of Birth</label>
        </div>
        <div className="col-75">
          <input type="date" id="dob" name="dob" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="dad">Address of the dealer</label>
        </div>
        <div class="col-75">
          <input type="text" id="dad" name="dad" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="vehcls">Class of Vehicle</label>
        </div>
        <div class="col-75">
          <input type="text" id="vehcls" name="vehcls" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="eng">Engine Number</label>
        </div>
        <div className="col-75">
          <input type="number" id="eng" name="eng" required/>
        </div>
      </div>
      <br/>
      <div id="ressub" className="row">
        <input id="ressub"  type="reset" value="Reset"/>
        <input id="ressub" type="submit" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" value="Submit"/>  
      </div>
    {/* </div> */}
</form>
</div>
</>
}
export default Register;