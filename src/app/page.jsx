"use client";
import { useEffect, useState } from "react";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Topbar from "@/components/Topbar";
import Faq from "@/components/Faq";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false); // Initial state is false, which is good.

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pageSections = [
    { Component: Topbar, name: "Topbar" },
    {
      Component: Header,
      name: "Header",
      props: { headerActive: headerActive },
    },
    { Component: Hero, name: "Hero" },
    { Component: About, name: "About" },
    { Component: Stats, name: "Stats" },
    { Component: Services, name: "Services" },
    { Component: Work, name: "Work" },
    { Component: Testimonials, name: "Testimonials" },
    { Component: Faq, name: "Faq" },
    { Component: Contact, name: "Contact" },
    { Component: Footer, name: "Footer" },
  ];

  return (
    <div>
      {pageSections.map(({ Component, name, props }) => (
        <Component key={name} {...props} />
      ))}
    </div>
  );
};

export default Home;
