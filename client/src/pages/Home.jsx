import React, { useEffect } from "react";
import Universities from "../components/Universities";
import TopContent from "../components/home/TopContent";
import BottomContent from "../components/home/BottomContent";

function Home() {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);
  const topContentData = {
    title: `Mars Rover – AAUB`,
    description: `Get inspired and explore new frontiers with the Mars Rover Project at  Aviation and Aerospace University Bangladesh (AAUB). This initiative aims to develop an advanced prototype rover designed for planetary exploration, focusing on autonomous navigation, obstacle detection, and environmental data collection.

Our project integrates cutting-edge technologies from aeronautical engineering and avionics, showcasing the potential for space exploration. The Mars Rover features solar-powered modules, terrain analysis systems, and a remote-control interface powered by Python and ROS (Robot Operating System).

Pioneered by the Aeronautical Engineering Avionics 3rd Batch, this project is a step towards building sustainable technology for interplanetary missions. Explore this innovation along with other academic resources, including semester PDFs from BSMRAAU and beyond, designed to inspire the next generation of aerospace engineers.`,
    imageUrl: "/assets/images/NASA_Mars_Rover.webp",
    ytLink: "https://youtu.be/o0lcpDvPoP0?si=vwK9SWKaaqSyV6p8",
  };
  return (
    <div>
      <TopContent
        title={topContentData.title}
        description={topContentData.description}
        imageUrl={topContentData.imageUrl}
        ytLink={topContentData.ytLink}
      />
      {/* <Universities /> */}
    </div>
  );
}

export default Home;
