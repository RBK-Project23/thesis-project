import React from 'react';
import "./donatePage.css"

const DonatePage = () => {
  return (
    <div className="donate-page-container">
      <div className="donation-content">
        <h1>Donate to Tunisian Scouts in the Sultanate of Oman.</h1>
        <p>"Your donation is pivotal in reaching our goals. Join us in making a real difference for children globally."</p>
        <form className="donation-form">
          
          <div className="frequency-selector">
            <label><input type="radio" name="frequency" value="one-time" checked /> One-Time</label>
            <label><input type="radio" name="frequency" value="monthly" /> Monthly</label>
          </div>

          
          <div className="amount-selector">
            <button type="button">$30</button>
            <button type="button">$50</button>
            <button type="button">$100</button>
            <button type="button">$200</button>
            <button type="button">$500</button>
          </div>

         
          <input type="number" placeholder="Enter custom amount" />

          
          <div className="payment-methods">
            {/* I need find icon here */}
          </div>

          
          <div className="donation-progress">
           
            <span>$10,000 goal</span>
          </div>

          
          <button type="submit">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;
