"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import { useState } from "react";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "Construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "Professional construction services for residential and commercial projects.",
    serviceList: [
      "Residential construction",
      "Structural engineering",
      "Commercial construction",
      "Building renovation",
      "Interior design",
      "Electrical and plumbing services",
    ],
    thumbs: [
      {
        url: "/assets_2/img/services/thumb-1.jpg",
      },
      {
        url: "/assets_2/img/services/thumb-2.jpg",
      },
    ],
  },
  {
    name: "Renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "Complete renovation and remodeling services for your property.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "carpentry",
      "painting",
    ],
    thumbs: [
      {
        url: "/assets_2/img/services/thumb-3.jpg",
      },
      {
        url: "/assets_2/img/services/thumb-4.jpg",
      },
    ],
  },
  {
    name: "Restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      {
        url: "/assets_2/img/services/thumb-4.jpg",
      },
      { url: "/assets_2/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "Consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description: "Expert guidance and insights for your construction projects.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Safety",
      "Roof Restore",
    ],
    thumbs: [
      {
        url: "/assets_2/img/services/thumb-1.jpg",
      },
      {
        url: "/assets_2/img/services/thumb-3.jpg",
      },
    ],
  },
];
const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation.
          </p>
        </div>
        {/* tabs */}
        <Tabs
          defaultValue="Construction"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] rounded-none p-0 w-full h-full xl:w-[345px] bg-transparent">
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-primary"
                    }`}
                  >
                    <div>{item.icon}</div>
                  </div>
                  <div className="uppercase text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px]">
                  {/* image */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className=" relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                      >
                        <Image src={thumb.url} fill alt="" />
                      </div>
                    ))}
                  </div>
                  {/* text and button */}
                  <div>
                    <div>
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10">{item.description}</p>
                      {/* service list */}
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service, index) => (
                          <li key={index} className="flex items-center gap-4">
                            <div className="w-[6px] h-[6px] bg-accent"></div>
                            <div className="capitalize font-medium text-primary">
                              {service}
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* btn */}
                      <Button text="read more" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
