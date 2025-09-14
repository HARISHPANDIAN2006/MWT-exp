import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQInfo() {
  const faqs = [
    {
      q: "What is Web programming?",
      a: "Web programming involves building websites and applications using technologies like HTML, CSS, JavaScript, and backend frameworks."
    },
    {
      q: "How do I choose the right freelance programmer for my project?",
      a: "Choose based on skills, experience, reviews, and whether their expertise matches your project requirements."
    },
    {
      q: "Do I need to prepare something for my programmer?",
      a: "Yes, prepare clear project goals, design references, and required features before hiring a programmer."
    },
    {
      q: "What type of services can I find in Programming & Tech?",
      a: "Services range from web development, mobile apps, automation, bots, game development, to cloud services."
    },
    {
      q: "How do I find good developers?",
      a: "Check profiles, ratings, portfolios, and client reviews before hiring a developer."
    },
    {
      q: "Can I hire developers in less than 48 hours?",
      a: "Yes, many freelance platforms allow you to hire instantly depending on developer availability."
    }
  ];

  const tags = [
    "Fivem Script",
    "Convert Website to App",
    "Custom App",
    "Discord Server",
    "Python Developer",
    "PHP Programmer",
    "Unity Developer",
    "Discord Chatbot",
    "Twitch Trivia Bot",
    "Shopify Expert",
    "Wix website builder",
    "Squarespace Programmer",
    "Roblox Scripter",
    "Bloxburg Builder",
    "Minecraft Builders",
    "WordPress Customization",
    "Book Formatting",
    "Custom Landing Page",
    "Web Scraping",
    "NFT Promotion"
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-16">
      {/* FAQ Section */}
      <hr /><hr />
      <h2 className="text-2xl font-bold text-center mb-8 mt-8">
        Programming & Tech FAQs
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg text-gray-800">
                {faq.q}
              </h3>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.a}</p>
            )}
          </div>
        ))}
      </div>

      {/* Suggested Tags */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-6">
          You might be interested in Programming & Tech
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
