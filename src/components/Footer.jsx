import { GithubIcon } from "../assets/icons/GithubIcon";
import { XIcon } from "../assets/icons/XIcon";
import { XposureLogo } from "../assets/logos/XposureLogo";
import { LinkedinIcon } from "../assets/icons/LinkedinIcon";

const footerData = [
  {
    title: "Products",
    items: ["Features", "Pricing", "Sign Up"],
    urls: ["/#features", "/#pricing", "https://xp.panx.io/free-signup"],
  },
  {
    title: "Important Links",
    items: [
      "Terms & Conditions",
      "Privacy Policy",
      "Help Center",
    ],
    urls:["/tos", "/privacy","https://xposure.crisp.help/en/"],
  },
  {
    title: "Company",
    items: ["Affliate Program", "Book a meeting", "Support"],
    urls:["https://xp.panx.io/partners-signup","https://xp.panx.io/book-meeting","https://xp.panx.io/support-request"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <XposureLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Xposure
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Xposure™ is developed with 🤍 from Giza by PanX Project™, an award-winning firm. Visit PanX's site
                <a
                  href="https://panx.io"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                  here.
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href="https://twitter.com/PanXProject"
                >
                  <XIcon />

                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href="https://www.linkedin.com/company/PanXProject"
                >
                  <LinkedinIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-full"
                  target="_blank"
                  href="https://github.com/PanXProject/"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        target="_blank"
                        href={footerData[0].urls[i]}
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        target="_blank"
                        href={footerData[1].urls[i]}
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        target="_blank"
                        href={footerData[2].urls[i]}
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
          (2017-Present) Panx.io PanX Project LLC.™
          </p>
        </div>
      </div>
    </footer>
  );
};
