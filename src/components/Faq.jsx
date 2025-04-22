import React from "react";
import FaqItem from "./FaqItem";
import Pretitle from "./Pretitle";

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "Do I need permits for my project?",
    description:
      "Yes, most construction projects require building permits. Our team handles the entire permitting process, from application to approval, ensuring compliance with local building codes and regulations.",
  },
  {
    title: "What materials do you use?",
    description:
      "We use high-quality, industry-standard materials from trusted suppliers. Our material selection is based on durability, sustainability, and project requirements. We're happy to discuss specific material options for your project.",
  },
  {
    title: " Can I make changes to my project after it's started?",
    description:
      "Yes, changes can be made during construction, but they may impact timeline and costs. We recommend finalizing plans before starting, but we understand that adjustments are sometimes necessary. Our team will work with you to accommodate changes while minimizing disruption.",
  },
  {
    title: "What is your warranty policy?",
    description:
      "We offer a 1-year warranty on all our construction projects. This warranty covers materials, workmanship, and any damages caused by the project. If you encounter any issues or need repairs, we'll work with you to resolve them within the warranty period.",
  },
  {
    title: "Do you offer financing options?",
    description:
      "Yes, we offer financing options for construction projects. Our team will work with you to determine the best financing options for your project, including loan options, down payment assistance, and financing solutions. We're happy to provide you with the financial support you need.",
  },
  {
    title: "How can I contact your team?",
    description:
      "You can reach our team through our website, phone number, or email address. We're available to answer any questions you may have and provide you with the information you need.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisions.
          </p>
        </div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => (
            <li
              key={index}
              className="mb-6"
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <FaqItem title={item.title} description={item.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
