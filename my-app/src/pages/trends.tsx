import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import valgrten  from "../assets/valgrten.png";
import valgrten2  from "../assets/valgrten2.png";
import valgrcel from "../assets/valgrcel.png";


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
    {
        header: "Market Cap of Highest Three Valued Companies Today",
        imageSrc: mcthree,
        caption: "Today, the world's three highest valued companies are Microsoft, Apple, and Nvidia. The moments where each of the companies became the world's highest valued reflect the recent trends within technology.",
        backgroundColor: "rgba(247, 107, 107, 1)",
        pageBackgroundColor: "rgba(255, 5, 5, 1)",
    },
    {
        header: "Tech ETF Price as % of S&P 500 Price",
        imageSrc: etfsp,
        caption: "When viewing the value of technology-based ETFs compared to the S&P 500, it becomes clear that the tech sector outpaces the overall market in growth. ETF shares worth 3% of a S&P share's price twenty years ago are now approaching the 10% mark.",
        backgroundColor: "rgba(255, 192, 140, 1)",
        pageBackgroundColor: "rgba(255, 59, 5, 1)",
    },
    {
        header: "Tech ETF Value Growth Relative to S&P 500",
        imageSrc: etfsp2,
        caption: "When comparing the growth of tech ETF's to the S&P 500, the growth of the tech sector becomes even more clear. Since 1998, these ETF's have grown 150-350% faster than the ETF representing 500 of the nations largest corporations.",
        backgroundColor: "rgba(255, 207, 163, 1)",
        pageBackgroundColor: "rgba(255, 115, 0, 1)",
    },
    {
        header: "Tech ETF Value Growth Relative to S&P 500 (Since .com Burst)",
        imageSrc: etfsp3,
        caption: "The '.com' burst of the early 2000's chipped away lots of value from the tech industry. When comparing tech to the S&P  500 only after the burst, starting in 2004, tech ETF's have outperformed the S&P 500 by 250-475%.",
        backgroundColor: "rgba(255, 232, 132, 1)",
        pageBackgroundColor: "rgba(255, 242, 0, 1)",
    },
    {
        header: "Tech Value Growth During Digital Era",
        imageSrc: valgrdig,
        caption: "The Digital Era represents the period from 2004 onwards, in which every aspect of life, from communication, to transactions, to entertainmant has become more and more virtual. It's no wonder that Netflix is 700 times more valuable today than it was 21 years ago as movies left theaters, sitcoms left television, and DVD's grew outdated in favor of online streaming.",
        backgroundColor: "rgb(255, 253, 151)",
        pageBackgroundColor: "rgb(234, 255, 0)",
    },
    {
        header: "Tech Value Growth During Digital Era (Without Netflix)",
        imageSrc: valgrdig2,
        caption: "With Meta and Google growing 2000-4000%, Amazon growing  by 10,000%, and Apple/Tesla approaching 20,000%, the tech industry has thrived during today's Digital age.",
        backgroundColor: "rgb(181, 255, 91)",
        pageBackgroundColor: "rgb(134, 255, 5)",
    },
    {
        header: "Tech Value Growth During Computing Era",
        imageSrc: valgrcom2,
        caption: "In the twelve year period between 1988 and 2000, Microsoft became 140 times and Intel 50 times more valuable, primarily due to the spread of the internet and the world wide web.  Those two innovations rapidly expanded the market for computers, resulting in the staggering gains.",
        backgroundColor: "rgba(142, 255, 176, 1)",
        pageBackgroundColor: "rgba(5, 255, 113, 1)",
    },
    {
        header: "Tech Value Growth During Computing Era (Without Microsoft/Intel)",
        imageSrc: valgrcom3,
        caption: "Other players in the computer market such as IBM, HP, and Texas Instrumentals grew at least 400% during the twelve year period. Even Apple, which struggled in the years leading up to the iPhone, doubled it's value during the span.",
        backgroundColor: "rgba(156, 255, 234, 1)",
        pageBackgroundColor: "rgba(5, 255, 172, 1)",
    },
    {
        header: "Tech Value Growth During .Com Era",
        imageSrc: valgrcom,
        caption: "The 90's saw early internet stocks such as Amazon, Ebay, and Cisco grow by well over 1000%, just for nearly all gains to be erased. Despite the .com crash, computing companies were able to grow by 500% during this period, while website based stocks tallied returns in the 1000-3000% range.",
        backgroundColor: "rgba(149, 227, 255, 1)",
        pageBackgroundColor: "rgba(5, 155, 255, 1)",
    },
    {
        header: "Tech Value Growth During Smartphone Era",
        imageSrc: valgrcel,
        caption: "Smartphones have become a necessity despite only existing for thirty years. The iPhone was the main catalyst of this shift, growing Apple by 60,000% since 2002 as a result. Apple killing off Blackberry, and completley outpacing Microsoft can also be credited to the new innovation.",
        backgroundColor: "rgba(151, 180, 255, 1)",
        pageBackgroundColor: "rgba(0, 21, 255, 1)",
    },
    {
        header: "Tech Value Growth During AI Era",
        imageSrc: valgrai,
        caption: "Generative AI tools such as Chat GPT, Deepseek, and Claude have captured the world's attention, and as a result, companies related to computer performance, data bases, cloud computing, and server hosting have seen rampant increases in investment. Nvidia is nearly 25 times as valuable as it was in 2020. Vistra and Palantir, are 7 and 13 times as valuable in that same span respectively.",
        backgroundColor: "rgb(221, 129, 255)",
        pageBackgroundColor: "rgb(134, 5, 255)",
    },
    {
        header: "Tech Value Growth Through Past 10 Years",
        imageSrc: valgrten,
        caption: "Over the past ten years, Nvidia has grown the most of the major tech companies by far. This is no surprise as the other tech companies were already well established ten years ago, while generative AI had not become a sensation yet.",
        backgroundColor: "rgb(253, 150, 255)",
        pageBackgroundColor: "rgb(255, 5, 238)",
    },
    {
        header: "Tech Value Growth Through Past 10 Years (Without Nvidia)",
        imageSrc: valgrten2,
        caption: "Without Nvidia, a consistant 500-1500% growth rate can be seen over the past ten years for major tech companies. Tesla during the middle of this span, and Palantir towards the end are by far the fastest growers when excluding Nvidia.",
        backgroundColor: "rgb(247, 147, 160)",
        pageBackgroundColor: "rgb(255, 5, 68)",
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
         
      </h1>
      <div className="stockpage" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexDirection: 'column' }}>
              <CI {...cards[currentIndex]} />
              <div className="arrow2">
                <button onClick={handlePrev} className="arrow-button">←</button>
                <button onClick={handleNext} className="arrow-button">→</button>
              </div>
            </div>
      <Link to="/" className="L">
        <button className="back">Back</button>
      </Link>
    </div>
  );
};

export default Trends;
