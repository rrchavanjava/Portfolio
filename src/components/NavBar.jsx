// import { useState } from "react";
// import { GoCodeReview } from "react-icons/go";
// import { motion } from "framer-motion";
// import { Link as ScrollLink, animateScroll } from "react-scroll";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => setIsOpen(!isOpen);

//   const scrollToTop = () => {
//     animateScroll.scrollToTop();
//   };

//   return (
//     <nav className="mb-10 py-3">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//         className="max-w-screen-xl flex flex-wrap items-center justify-between p-2"
//       >
//         <div
//           className="flex items-start space-x-3 rtl:space-x-reverse cursor-pointer"
//           onClick={scrollToTop}
//         >
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="text-neutral-300 text-2xl md:text-3xl"
//           >
//             <GoCodeReview />
//           </motion.div>
//           <span className="self-center text-base font-semibold text-neutral-300 md:text-2xl">
//             Rohan | Full Stack Dev
//           </span>
//         </div>
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-400 rounded-lg md:hidden hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen}
//           onClick={handleToggle}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <motion.div
//           className={`w-full md:flex md:items-center md:justify-between md:w-auto ${isOpen ? "block" : "hidden"}`}
//           id="navbar-default"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//         >
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-neutral-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
//             {[
//               "About",
//               "Skills",
//               "Experience",
//               "Education",
//               "Projects",
//               // "Certifications",
//               "Contact",
//             ].map((item, index) => (
//               <li key={index}>
//                 <ScrollLink
//                   to={item.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   href={`#${item.toLowerCase()}`}
//                   className="block py-2 px-3 text-neutral-300 rounded hover:bg-neutral-700 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0"
//                   aria-current={item}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { GoCodeReview } from "react-icons/go";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    // "Certifications",
    "Contact",
  ];

  const scrollToTop = () => {
    animateScroll.scrollToTop();
    setIsOpen(false);
  };

  return (
    <nav className="w-full py-6 bg-transparent z-50 relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <GoCodeReview className="text-neutral-300 text-2xl md:text-3xl" />
          <span className="text-neutral-300 text-base md:text-2xl font-semibold">
            Rohan | Full Stack Dev
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80} // adjust for navbar height
                className="text-neutral-300 hover:text-cyan-600 cursor-pointer"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 bg-opacity-90 z-50">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust for navbar height
                  className="block py-2 px-3 text-neutral-300 rounded hover:bg-neutral-700 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;