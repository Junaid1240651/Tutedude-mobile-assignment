import React from "react";
import "./App.css";
import arrow from "./images/arrow.png";
import goBackArrow from "./images/goBackArrow.png";

function App() {
  return (
    <div className="mobileView">
      <div className="tobBar">
        <div className="logoView">
          <image className="logo"></image>
        </div>
        <div className="profileButtonView">
          <p className="profileName">ProfileName</p>
          <div className="arrowView">
            <img className="profilearrow" src={arrow} alt="" />
          </div>
        </div>
        <div>
          <p className="refferAndEarnText">
            UI/UX > Refer & Earn > Friends Referred
          </p>
        </div>
        <div className="goBackView">
          <img src={goBackArrow} alt="" />
          <p className="goBackText">go back</p>
        </div>
        <div className="YourRefferalCodeView">
          <p className="YourRefferalCodeText">Your Referral Code</p>
          <div className="codeView">
            <p className="code">EDCH54</p>
          </div>
        </div>
        <div className="dashboard">
          <div className="walletBalanceView">
            <p className="walletBalance">Wallet Balance</p>
            <p className="avilableBalance">₹ 500</p>
          </div>
        </div>
        <div>
          <p className="friends">Friends who Enrolled(3)</p>
        </div>
      </div>
      <div className="card">
        <p className="coursesEnrolled">Courses Enrolled(6)</p>
        <p className="card1date">14 Sep, 2022</p>
        <p className="card1name">Dhiraj Saxsena</p>
        <div className="refferalAmountView">
          <p className="refferalAmount">Referral Amount</p>
          <p className="amount">₹185</p>
        </div>
        <div className="javaView">
          <p className="java">Java</p>
        </div>
        <div className="IllustratorView">
          <p className="Illustrator">Illustrator</p>
        </div>
        <div className="mernView">
          <p className="mern">MERN</p>
        </div>
        <div className="photoshopView">
          <p className="photoshop">Photoshop</p>
        </div>
        <div className="pythonView">
          <p className="python">Python</p>
        </div>
        <div className="uiuxView">
          <p className="uiux">UI/UX</p>
        </div>
      </div>
      <div className="card2">
        <p className="coursesEnrolled">Courses Enrolled(6)</p>
        <p className="card1date">15 Sep, 2022</p>
        <p className="card1name">Subhash Mishra </p>
        <div className="refferalAmountView">
          <p className="refferalAmount">Referral Amount</p>
          <p className="amount">₹185</p>
        </div>
        <div className="javaView">
          <p className="java">Java</p>
        </div>
        <div className="IllustratorView">
          <p className="Illustrator">Illustrator</p>
        </div>
        <div className="mernView">
          <p className="mern">MERN</p>
        </div>
        <div className="photoshopView">
          <p className="photoshop">Photoshop</p>
        </div>
        <div className="pythonView">
          <p className="python">Python</p>
        </div>
        <div className="uiuxView">
          <p className="uiux">UI/UX</p>
        </div>
      </div>
      <div className="card3">
        <p className="coursesEnrolled">Courses Enrolled(6)</p>
        <p className="card1date">16 Sep, 2022</p>
        <p className="card1name">Prafull Kumar</p>
        <div className="refferalAmountView">
          <p className="refferalAmount">Referral Amount</p>
          <p className="amount">₹185</p>
        </div>
        <div className="javaView">
          <p className="java">Java</p>
        </div>
        <div className="IllustratorView">
          <p className="Illustrator">Illustrator</p>
        </div>
        <div className="mernView">
          <p className="mern">MERN</p>
        </div>
        <div className="photoshopView">
          <p className="photoshop">Photoshop</p>
        </div>
        <div className="pythonView">
          <p className="python">Python</p>
        </div>
        <div className="uiuxView">
          <p className="uiux">UI/UX</p>
        </div>
      </div>
      <div>
        <p className="termAndCondition">Terms & Conditions</p>
      </div>
    </div>
  );
}

export default App;
