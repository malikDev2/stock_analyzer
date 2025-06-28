import { Link } from "react-router-dom";

const Home = () => {
    return(<>
    <h1>hello</h1>
      <h2>Stock project</h2>
      <div className="home">
      <Link to="/timeline" className="L">
        <div className="homediv">
          <h1>Timeline</h1>
          <p>View the growth in market cap of Tech companies over the years</p>
        </div>
      </Link>
      <Link to="/presidencies" className="L">
        <div className="homediv">
          <h1>Presidencies</h1>
          
        </div>
      </Link>
      <Link to="/trends" className="L">
        <div className="homediv" style={{ backgroundColor: 'rgba(0, 149, 255, 0.23)' }} >
          <h1>Trends</h1>
          
        </div>
      </Link>
      </div>
      
        <h3>yo</h3>
      
      <div>
        <button>Tech market cap timeline</button>
        <button>Presidencies</button>
        <button>tech trends</button>
      </div>
    
    
    
    
    </>)

}

export default Home;