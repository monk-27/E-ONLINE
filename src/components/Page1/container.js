import React from "react";

import "./container.css";

const Container = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ display: "inline-block", textAlign: "center" }}>
          <h1>Learn best Online Courses</h1>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px 0"
        }}
      >
        <span style={{ display: "inline-block", textAlign: "center" }}>
          48000 Online Courses for you
        </span>
      </div>
      <div class="dropdown-search-container">
  <div class="dropdown">
    <button class="dropbtn">
      Category <i class="arrow down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
  <div class="search-container">
    <input type="text" placeholder="What do you want to learn?" />
    <button type="submit">Search
      <i class="fa fa-search"></i>
    </button>
  </div>
</div>



      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0"

        }}
      >
        <img
          src="./images/image.png"
          alt="graphic design"
          
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Container;
