import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CI from "./chartdiv.tsx";
import mcfive from "../assets/mcfive.png";
import mcten from "../assets/mcten.png";
import mctwo from "../assets/mctwo.png";
import mcthirty from "../assets/mcthirty.png";

const Time = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageBackground, setPageBackground] = useState("#ffffff");

  const cards = [
    {
      header: "2 Year View",
      imageSrc: mctwo,
      caption: "Through the last two years, tech stock prices have mostly stagnated. The most notable stock has been Nvidia, growing from the forth, to briefly the most valued tech stock during the short period.",
      backgroundColor: "rgb(119, 119, 252)",
      pageBackgroundColor: "rgb(60, 0, 255)",
    },
    {
      header: "5 Year View",
      imageSrc: mcfive,
      caption: "By viewing major tech stocks over the past five years, you're able to see the battle for most valued company shift from Apple/Microsoft/Amazon to Apple/Microsoft/Nvidia. This change reflects how the world progressed from quarentine  and the online shopping reliance it caused  towards the AI boom we see today.",
      backgroundColor: "rgb(255, 96, 96)",
      pageBackgroundColor: "rgb(255, 0, 0)",
    },
    {
      header: "10 Year View",
      imageSrc: mcten,
      caption: "Over a ten year window, nearly every tech stock has produced impressive returns. As our world becomes more and more digital, this trend will likely continue.",
      backgroundColor: "rgb(102, 255, 46)",
      pageBackgroundColor: "rgb(0, 255, 17)",
    },
    {
      header: "30 Year View",
      imageSrc: mcthirty,
      caption: "With a thirty year window, the rapid growth of tech companies in their entirety comes to view.",
      backgroundColor: "rgb(232, 129, 255)",
      pageBackgroundColor: "rgb(147, 4, 179)",
    },
    

  ];

  useEffect(() => {
    setPageBackground(cards[currentIndex].pageBackgroundColor);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div style={{ backgroundColor: pageBackground, minHeight: "100vh", padding: "2rem" , transition:'1s'}}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
        Stock Timeline
      </h1>
      <div className="stockpage" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
        <button onClick={handlePrev} className="arrow-button">←</button>
        <CI {...cards[currentIndex]} />
        <button onClick={handleNext} className="arrow-button">→</button>
      </div>
      <Link to="/" className="L">
        <button className="back">Back</button>
      </Link>
    </div>
  );
};

export default Time;
