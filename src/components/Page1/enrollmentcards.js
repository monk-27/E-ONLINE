import React from 'react';
import "./ecard.css"

const Enrollmentcards = () => {
  return (
  <>
    <div>
    <div className='cards'>
    <div class="card">
  <img src="./images/log1.png" alt="web design" />
  <div class="card-info">
    <h4 style={{color:"black", fontWeight:"bold"}}>Enrolled Students</h4>
    <h2>80,000+</h2>
  </div>
  
</div>
<div class="card">
  <img src="./images/log2.png" alt="web design" />
  
  <div class="card-info">
  <h4 style={{color:"black", fontWeight:"bold"}}>Online Courses</h4>
  <h2>1,200+</h2>
  </div>
  
</div>
<div class="card">
<img src="./images/log3.png" alt="web design" />

  <div class="card-info">
  <h4 style={{color:"black", fontWeight:"bold"}}>Expert instructors</h4>
  <h2>80,000+</h2>
  </div>
  
</div></div>
    
  
    </div>
  </>
    
  );
}

export default Enrollmentcards;
