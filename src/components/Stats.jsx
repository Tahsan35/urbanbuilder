"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Successful Projects",
  },
  {
    endCountNum: 26,
    endCountText: "+",
    text: "Years of Experience",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-12 w-full">
      <div className="container flex justify-around">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div
                  className="text-5xl
                  font-semibold"
                >
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
