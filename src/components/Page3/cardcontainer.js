
import React,{useState} from 'react';
import './cardcontainer.css';

import Cardcontainer from './cardcontainerdetails';


const Card3 = ({ imgSrc, title, description }) => {
  const [data, setData] = useState(Cardcontainer);
  return (
  <>
  <div className='main-card-1'>
  {data.map((element, id) => {
      return (
    <div key={id} className="contain">
    <div className="card1">
      <img className="card-img-top1" src={element.imgdata} alt="ecommerce website" />
      <div className="card-body2">
        <h5 className="card-title1">{element.rname}</h5>
        <p className="card-text1">{element.designation}</p>
      <hr />

      </div>
      <div className='card-description-2'>
        <span><img src='./images/user.png' alt="ecommerce website"/>{element.total_students}</span>
        
        <span><img src='./images/bookmark.png' alt="ecommerce website"/>{element.courses}</span>

      </div>
    </div>
    </div>
    );
    })}
  </div>
    
  </>
    
  );
};

export default Card3;
