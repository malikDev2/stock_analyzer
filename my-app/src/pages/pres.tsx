import { useState, useEffect } from "react";
import CI from "./chartdiv.tsx";
import mcstrmp from "../assets/mcstrmp.png";
import mcb from "../assets/mcb.png";
import mcftrmp from "../assets/mcftrmp.png";
import mco from "../assets/mco.png";
import mcbu from "../assets/mcbu.png";
import mcc from "../assets/mcc.png";
import valstrmp from "../assets/valstrmp.png";
import valbid from "../assets/valbid.png";
import valbid2 from "../assets/valbid2.png";
import valftrmp from "../assets/valftrmp.png";
import valftrmp2 from "../assets/valftrmp2.png";
import valo from "../assets/valo.png";
import valbu from "../assets/valbu.png";
import valbu2 from "../assets/valbu2.png";
import valc from "../assets/valc.png";
import { Link } from "react-router-dom";


const Pres = () => {
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
    {
        header: "Second Trump Presidency",
        imageSrc: mcstrmp,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Second Trump Presidency",
        imageSrc: valstrmp,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Biden Presidency",
        imageSrc: mcb,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Biden Presidency",
        imageSrc: valbid,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Biden Presidency",
        imageSrc: valbid2,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "First Trump Presidency",
        imageSrc: mcftrmp,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "First Trump Presidency",
        imageSrc: valftrmp,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "First Trump Presidency",
        imageSrc: valftrmp2,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Obama Presidency",
        imageSrc: mco,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Obama Presidency",
        imageSrc: valo,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Bush Presidency",
        imageSrc: mcbu,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Bush Presidency",
        imageSrc: valbu,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Bush Presidency",
        imageSrc: valbu2,
        caption: "",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Clinton Presidency",
        imageSrc: mcc,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Clinton Presidency",
        imageSrc: valc,
        caption: "",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    
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
        Stock Timeline
      </h1>
      <div className="stockpage"
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
      <Link to="/" className="L">
        <button className="back">Back</button>
      </Link>
    </div>
  );
};

export default Pres;
