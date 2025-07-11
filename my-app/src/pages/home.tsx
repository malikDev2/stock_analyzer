import { useState } from "react";
import { useNavigate } from "react-router-dom";
import time from "../assets/time.png";
import trend from "../assets/trend.png";
import pres from "../assets/pres.png";

const Home = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<string>("white");

  const divConfigs = [
    {
      id: "timeline",
      col: "rgba(30, 255, 0, 1)",
      title: "Timeline",
      img: time,
      route: "/timeline",
      bg: "#d3ffbeff",
      description: "Explore the historical market cap growth of major tech companies."
    },
    {
      id: "presidencies",
      col:"rgba(71, 169, 255, 1)",
      title: "Presidencies",
      img: pres,
      route: "/presidencies",
      bg: "#cac4ffff",
      description: "View the performance of tech companies throughout the recent presidencies."
    },
    {
      id: "trends",
      col: "rgba(255, 62, 62, 1)",
      title: "Trends",
      img: trend,
      route: "/trends",
      bg: "#ffc8c8ff",
      description: "Visualize trends in tech and how they impacted various corporations."
    }
  ];

  const handleClick = (id: string, route: string, bg: string) => {
    if (selected === id) {
      navigate(route); 
    } else {
      setSelected(id); 
      setBgColor(bg); 
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "2rem" }}>
      <h1>Tech Stock Trends Analysis</h1>

      {selected && (
        <p style={{ marginTop: "2rem", fontSize: "1.2rem", justifySelf: "center" }}>
          {divConfigs.find((div) => div.id === selected)?.description}
        </p>
      )}

      <div className="home">
        {divConfigs.map(({ id, title, img, route, bg, col }) => (
          <div
            key={id}
            className="homediv"
            style={{ cursor: "pointer", marginBottom: "1rem", background: col }}
            onClick={() => handleClick(id, route, bg)}
          >
            <h1>{title}</h1>
            <img src={img} alt={title.toLowerCase()} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
