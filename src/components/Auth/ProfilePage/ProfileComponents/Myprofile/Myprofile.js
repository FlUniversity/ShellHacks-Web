import React, { Component } from 'react';
/* eslint-disable */

let containerStyle = {
  'max-width' :'100%',
}


import '../component.css'
class Myprofile extends Component {
  constructor() {
    super();
    this.state = {
    	
    };
  }


/* eslint-disable */
  render() {
    return (
<div className = "outer">
  <h3> My Profile </h3><br/>
  <h4> Personal Info </h4>
  <input type="text" value="First Name" readonly />
  <input type="text" value="Last Name" readonly />
  <input type="text" value="Phone Number" readonly />
  <input type="text" value="Email" readonly /><br/>
  <h4> School </h4>
  <input type="text" value="School" readonly />
  <h4> Birthdate </h4>
  <input type="text" value="01/01/1111" readonly />
  <h4> Ethnicity </h4>
  <input type="text" value="Hispanic" readonly />
  <h4> Gender </h4>
  <input type="text" value="Male" readonly />
  <h4> Major </h4>
  <input type="text" value="Computer Science" readonly />
  <h4> Class Standing </h4>
  <input type="text" value="Junior" readonly />
  <h4> Expected Graduation Year </h4>
  <input type="text" value="2020" readonly />
  <h4> Shirt Size </h4>
  <input type="text" value="M" readonly />
  <h4> First Hackathon </h4>
  <input type="text" value="No" readonly />
  <h4> Dietary Restrictions</h4>
  <input type="text" value="N/A" readonly />
  <h4> Additional Diet Info</h4>
  <input type="text" value="" readonly />
  <h4> LinkedIn Url</h4>
  <input type="text" value="" readonly />
  <h4> GitHub Url</h4>
  <input type="text" value="" readonly />
  
</div>
    );
  }
}

export default Myprofile;