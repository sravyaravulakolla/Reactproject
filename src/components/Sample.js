import React from 'react';
import { Link } from 'react-router-dom';
import Sampledata from "../sample.json"
function Sample(){
  return <div id="myreg" className="container"><br/>
  <h3 id="h1"> REGISTRATIONS</h3>
  <br/>
  <div className="table-responsive">
  <table class="table" id="Info">
        <thead>
        <tr>
            {/* <th>S.No</th> */}
            <th>Owner name</th>
            <th>Registration no.</th>
            <th>Chassis no.</th>
            <th>Registration date</th>
            {/* <th>Vehicle model</th>
            <th>RC Status</th> */}
        </tr>
        </thead>
        <tbody>
          {
            Sampledata.map( (record) => {
                let id=record.id;
                let oname =record.name;
                let rn = record.regno ;
                let cn = record.chassis;
                let rdate = record.date;
                return (<tr key={id}><td>{oname}</td><td>{rn}</td><td>{cn}</td><td>{rdate}</td></tr>);
            })
            }

    </tbody>
        
    </table> 
</div>
</div>
}
export default Sample;