
import React,{useState} from 'react';
import './readmorecard.css';

import Cardreadmore from './readmoredarddetails';


const Card4 = ({ imgSrc, title, description }) => {
  const [data, setData] = useState(Cardreadmore);
  return (
  <>
  <div className='main-card-2'>
  {data.map((element, id) => {
      return (
    <div key={id} className="contain">
    <div className="card1">
      <img className="card-img-top1" src={element.imgdata} alt="app development courses" />
      <div className="card-body2">
      <div className='card-description2'>
        <span >{element.date}</span>
        <span>{element.comments}</span>

      </div>
        <p className="card-text1">{element.description}</p>
      

      </div>
        <span style={{color:"teal"}}>READ MORE...</span>
    </div>
    </div>
    );
    })}
  </div>
    
  </>
    
  );
};

export default Card4;
