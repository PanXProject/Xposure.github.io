import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    id:"1",
    question: "What's lisiting management and how can it help me?",
    answer:
      "Listing management ensures your business information (name, address & number) is unified and accurate across all listing/citation websites. It helps you distribute your listings on Google search, maps, AI assistant and Etc.",
  },
  {
    id:"2",
    question: "What's local SEO and how can it help me?",
    answer:
      "Local SEO is optimizing how your brand appears online for customers on various search channels. This makes it easier for your customers to find you and helps you rank better in search results.",
  },
  {
    id:"3",
    question: "What's reputation management and how can it help me?",
    answer:
      "Reputation management is the process of monitoring, creating and responding to customer enagements across review sites. This helps you build trust signals improving your reputation and your customer's experience.",
  },
  {
    id:"4",
    question: "What are the supported languages and countries?",
    answer:
      "Operating in all countries and available in ten languages. Users can navigate the site in English, Spanish, Portuguese, German, French, Italian, Japanese, Dutch, Arabic, and Mandarin.",
  },
  {
    id:"5",
    question: "Will Xposure intergrate with my tools?",
    answer:
      "Currently integrates with Google My Business, Apple Places, Bing Maps, Facebook Local, Talabat, TrustPilot, and Booking. We also support BBB, Foursquare, TripAdvisor, Capterra, G2, Waze, Uber, AirBnB, HealthGrades, Zillow, Glassdoor, Indeed, Apple App Store, Google Play, and dozens of other platforms.",
  },
  {
    id:"6",
    question: "How to claim your 20% discount offer?",
    answer:
      "To claim your 20% discount, simply sign up for any annualy plan. The discount is automatically applied.",
  },
  {
    id:"7",
    question: "Have more questions?",
    answer:
      "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, by email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div key={item.id} className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={item.id} // Use the unique ID here
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#fde02f"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
