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
        caption: "Through the first five months of Trump's second administration, the major tech stocks have mostly stagnated. Stocks prices fell from February to April due to  the briefly implemented tariffs. Stock prices have been slowly recovering ever since.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Second Trump Presidency",
        imageSrc: valstrmp,
        caption: "Trump's second term kicked off with the introduction of new tariffs, which reduced the value of most tech stocks by about 20%. Palantir has nearly doubled in value since Trump's inauguration due to announcements of Palantir's involvement in the federal government. On the other hand , Tesla has lost 40% of it's value through the past five months as the partnership between Elon and Trump grew into a disaster.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Biden Presidency",
        imageSrc: mcb,
        caption: "Tech stocks struggled through the first two years of the Biden Administration as global markets recovered from COVID. However in the final two years, companies such as Apple, Microsoft, and Amazon were able to double in value. Nvidia was the biggest winner of the presidency, as the company grew nearly 10x in value, briefly becoming the most valued company in the world.",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Biden Presidency",
        imageSrc: valbid,
        caption: "During the Biden administration, generative AI became the fastest growing industry. Artifical Intelligence requires lots of processing power, allowing Nvidia, a company focused on computer performance, to grow 1000% in just four years.",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Biden Presidency",
        imageSrc: valbid2,
        caption: "Another chart with Nvidia excluded is required to gague the other tech stocks properly. Most major tech stocks were able to grow 50-150% through the Biden administration despite losing value during the COVID recovery years. Palantir and Tesla became booming stocks during the final months of the Biden administration. While Palantir's growth can be attributed to how new the company is to investors, Tesla grew with anticipation of Trump's second term, which was heavily funded by Elon Musk.",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "First Trump Presidency",
        imageSrc: mcftrmp,
        caption: "Trump's first presidency was a great time for major tech companies as most grew 200-400% during the four year window.  Technology was one of the few economic sectors that thrived during COVID's lockdown. The most notable stock of Trump's first term was Tesla, as their eletric vehicles became a nation wide sensation.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "First Trump Presidency",
        imageSrc: valftrmp,
        caption: "The fastest growing stock by far during the first Trump administration was Tesla, which increased it's value nearly twenty times over.  Growing concerns over the environment throughout the 2010's helped set the stage for the eletric vehicle company's success.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "First Trump Presidency",
        imageSrc: valftrmp2,
        caption: "With Tesla's stock removed, the 100-400% gains of the other major tech companies come into view. Although companies such as Apple, Amazon, and Microsoft were able to double in value during the first three years of Trump's first term, tech stocks truly began to skyrocket in value as a direct result of the pandemic.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Obama Presidency",
        imageSrc: mco,
        caption: "During Obama's eight years, the world grew into an era where not owning a smartphone is unusual. As a result, it's no surprise that under Obama, tech companies  finally solidified themselves as the most valued companies in the world. Apple, Google, Amazon, Meta, and many others grew 5-10 fold during this eight year period.",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Obama Presidency",
        imageSrc: valo,
        caption: "Obama's presidency consisted of years of economic growth following the '08 recession. It also took place during the fastest growth of cellphones and social media. With those factors, it's no wonder that major tech companies grew ten times over on average, with Netflix ending the presidency thirty times as valuable.",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Bush Presidency",
        imageSrc: mcbu,
        caption: "Not only was the Bush presdiency placed after the .com burst and before the social-media era, but it also started with 9/11 and ended with the recession. With those factors in mind, it's no surprise that tech stocks didn't really grow during his presidency.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Bush Presidency",
        imageSrc: valbu,
        caption: "Technology experienced decent growth under Bush. Apple was the fastest grower due to the creation of the iPhone at 700%, however that number was approaching 2000% prior to the recession. ",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Bush Presidency",
        imageSrc: valbu2,
        caption: "Without the outliar Apple, most major tech corporations experienced similar performance. The value of these companies grew by 100-500% by 2008 just for the profits to fall to 0-200% by the end of the term. Microsoft, unlike it's counterparts, experienced virtually zero growth during the eight year period.",
        backgroundColor: "rgb(247, 147, 147)",
        pageBackgroundColor: "rgb(255, 5, 5)",
    },
    {
        header: "Clinton Presidency",
        imageSrc: mcc,
        caption: "The Clinton presidency oversaw the rise of the world wide web, growing tech companies by well over one thousand percent. However, companies such as Amazon would lose well over 90% of their new gains following the .com burst.",
        backgroundColor: "rgb(147, 184, 247)",
        pageBackgroundColor: "rgb(26, 5, 255)",
    },
    {
        header: "Clinton Presidency",
        imageSrc: valc,
        caption: "The Clinton administration captures the excitement that the spread of the world wide web generated. Prior to the .com burst, both Cisco and Amazon grew by over 5000%. While most tech companies saw returns of around 1000% during the Clinton presidency, Apple experienced no growth as their computers struggled to compete with Microsoft.",
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
