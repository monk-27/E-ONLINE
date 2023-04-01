import React,{useState} from 'react';
import './cards.css';
import Cardsdata from './carddetails';


const Card1 = ({ imgSrc, title, description }) => {
  const [data, setData] = useState(Cardsdata);
  return (
  <>
        <div className='main-card'>
        {data.map((element, id) => {
      return (
    <div key={id} className="contain">
    <div className="card1">
      <img className="card-img-top1" src={element.imgdata} alt="website design" />
      <div className="card-body1">
        <h5 className="card-title1">{element.rname}</h5>
        <p className="card-text1">Lecturer <span style={{color:"teal"}}>admin</span> in <span style={{color:"teal"}}>Creative Design</span> </p>
      <hr />

      </div>
      <div className='card-description1'>
        <span><img src='./images/user.png'alt="website design"/>{element.date}</span>
        <span><img src='./images/clock.png' alt="website design"/>{element.time}</span>
        <span><img src='./images/bookmark.png' alt="website design"/>{element.topic}</span>

      </div>
    </div>
    </div>
    );
    })}
        </div>
    
  </>
    
  );
};

export default Card1;
