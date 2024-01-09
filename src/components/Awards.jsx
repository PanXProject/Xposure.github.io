import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import sortlist from "../assets/images/sortlist.png";
import techbehemoths from "../assets/images/techbehemoths.png";
import clutch from "../assets/images/clutch.png";
import goodfirms from "../assets/images/goodfirms.png";
import designrush from "../assets/images/designrush.png";

const awardsData = [
  {
    awardName: "SEO Company",
    givenBy: "by Tech Behemoth",
    image: techbehemoths,
  },
  {
    awardName: "Link Building Company",
    givenBy: "by Clutch",
    image: clutch,
  },
  {
    awardName: "SMM Company",
    givenBy: "by Tech Behemoth",
    image: techbehemoths,
  },
  {
    awardName: "Local SEO Company",
    givenBy: "by Tech Behemoth",
    image: techbehemoths,
  },
  {
    awardName: "Digital Marketing Company",
    givenBy: "by Good Firms",
    image: goodfirms,
  },
  {
    awardName: "Reputation Management Company",
    givenBy: "by Tech Behemoth",
    image: techbehemoths,
  },
  {
    awardName: "SEO Company",
    givenBy: "by Good Firms",
    image: goodfirms,
  },
  {
    awardName: "Link Building Company",
    givenBy: "by Clutch",
    image: clutch,
  },
  {
    awardName: "SEO Company",
    givenBy: "by Sort List",
    image: sortlist,
  },
  {
    awardName: "Digital Marketing Agency",
    givenBy: "by Design Rush",
    image: designrush,
  },
];

export const Awards = () => {
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const awardsPerRow = 3;

  const handlePreviousAward = () => {
    setCurrentAwardIndex((prevIndex) => (prevIndex - 1 + awardsData.length * 2) % awardsData.length); // Wrap around to the end and repeat
  };

  const handleNextAward = () => {
    setCurrentAwardIndex((prevIndex) => (prevIndex + 1) % awardsData.length); // Wrap around to the beginning
  };

  useEffect(() => {
    const interval = setInterval(handleNextAward, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center pt-24 mb-16 lg:mb-32 bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="feedback" />
      <div className="flex flex-col w-full lg:w-[1150px] justify-center md:w-11/12 sm:w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="custom-block-subtitle text-center mb-16">
              Featured as top ⭐⭐⭐⭐⭐
          </div>
          <div className="flex items-center justify-center">
          <button className="custom-content-text-white custom-border-gray rounded-full w-10 h-10 bg-transparent border-l-4 mr-4 ml-4 hover:bg-customDarkBg3" onClick={handlePreviousAward}>
              {/* Add a left arrow icon here if desired */}
              ￩
            </button>
        {/* Display 3 awards in a single row, ensuring a seamless cycle */}
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
      {awardsData
        .slice(currentAwardIndex, currentAwardIndex + 3)
        .concat(awardsData.slice(0, Math.max(0, awardsPerRow - (awardsData.length - currentAwardIndex)))) // Add extra awards from the beginning for smooth transition
        .map((award, index) => (
          <div key={index} className="w-full rounded-xl bg-customDarkBg2 flex flex-col items-center justify-center px-6 py-4">
            <img src={award.image} alt="" width="130px" className="mb-3" />
              <div className="flex flex-col text-center">
                <div className="custom-content-text-white font-medium">{award.awardName}</div>
                <div className="custom-content-text-gray">{award.givenBy}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="custom-content-text-white custom-border-gray rounded-full w-10 h-10 bg-transparent border-r-4 mr-4 ml-4 hover:bg-customDarkBg3" onClick={handleNextAward}>
              {/* Add a right arrow icon here if desired */}
              ￫
            </button>
      </div>
        </motion.div>
      </div>
    </section>
  );
};

