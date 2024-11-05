import { Link } from "react-router-dom"
import "./PricingCardStyles.css"
import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">

          <div className="card">
            <h3>- Basic - </h3>
            <span className="bar"></span>
            <p className="budget">$ 100</p>
            <p>- 2Days -</p>
            <p>- 2Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Buy Now</Link>
          </div>

          <div className="card">
            <h3>- Standard -</h3>
            <span className="bar"></span>
            <p className="budget">$ 200</p>
            <p>- 5Days -</p>
            <p>- 3Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Buy Now</Link>
          </div>

          <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="budget">$ 300</p>
            <p>- 7Days -</p>
            <p>- 5Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Buy Now</Link>
          </div>

          
          <div className="card">
            <h3>- Buisiness -</h3>
            <span className="bar"></span>
            <p className="budget">$ 500</p>
            <p>- 10Days -</p>
            <p>- 8Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Buy Now</Link>
          </div>



        </div>
    </div>
  )
}

export default PricingCard