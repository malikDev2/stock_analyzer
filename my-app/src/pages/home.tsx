import { Link } from "react-router-dom";

const Home = () => {
    return(<>
    <h1>Tech Stock Trends Analysis</h1>
      
      <div className="home">
      <Link to="/timeline" className="L">
        <div className="homediv">
          <h1>Timeline</h1>
          <p>View the growth in market cap of Tech companies over the years</p>
        </div>
      </Link>
      <Link to="/presidencies" className="L">
        <div className="homediv" style={{ backgroundColor: 'rgba(60, 122, 255, 0.99)' }}>
          <h1>Presidencies</h1>
          
        </div>
      </Link>
      <Link to="/trends" className="L">
        <div className="homediv" style={{ backgroundColor: 'rgba(180, 0, 197, 0.79)' }} >
          <h1>Trends</h1>
          
        </div>
      </Link>
      </div>
      
      
      
    
    
    
    
    </>)

}

export default Home;