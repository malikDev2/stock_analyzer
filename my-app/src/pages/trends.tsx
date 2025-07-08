import { useState, useEffect } from "react";
import CI from "./chartdiv.tsx";
import etfsp from "../assets/etfsp.png";
import etfsp2 from "../assets/etfsp2.png";
import etfsp3 from "../assets/etfsp3.png";
import mcthree from "../assets/mcthree.png";
import valgrai from "../assets/valgrai.png";
import valgrcom from "../assets/valgrcom.png";
import valgrcom2 from "../assets/valgrcom2.png";
import valgrcom3  from "../assets/valgrcom3.png";
import valgrdig  from "../assets/valgrdig.png";
import valgrdig2  from "../assets/valgrdig2.png";
import valgrten  from "../assets/valgrten2.png";


const Trends = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageBackground, setPageBackground] = useState("#ffffff");

  const cards = [
    // Fill this template array with your own card data objects:
    // {
    //   header: "",
    //   imageSrc: "",
    //   caption: "",
    //   backgroundColor: "",
    //   pageBackgroundColor: "",
    // }
  ];

  useEffect(() => {
    if (cards.length > 0) {
      setPageBackground(cards[currentIndex].pageBackgroundColor);
    }
  }, [currentIndex, cards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div
      style={{
        backgroundColor: pageBackground,
        minHeight: "100vh",
        padding: "2rem",
        transition: "1s",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
         
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <button onClick={handlePrev} className="arrow-button">
          ←
        </button>
        {cards.length > 0 && <CI {...cards[currentIndex]} />}
        <button onClick={handleNext} className="arrow-button">
          →
        </button>
      </div>
    </div>
  );
};

export default Trends;
