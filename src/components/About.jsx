// import { ABOUT_CONTENT } from "../constants/content";
// import { Typewriter } from "react-simple-typewriter";
// import { Element } from "react-scroll";
// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";
// import ResumePDF from "../../assets/pdf/Rohan_resume.pdf";

// const animatedContainer = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });

// const About = () => {
//   return (
//     <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
//       <div className="flex flex-wrap justify-center ">
//         <div className="w-full px-4">
//           <div className="flex flex-col items-center">
//             <motion.h1
//               variants={animatedContainer(0)}
//               initial="hidden"
//               animate="visible"
//               className="pb-8 text-4xl font-thin tracking-tight mt-8 lg:mt-16 lg:text-5xl"
//             >
//               Rohan Chavan
//             </motion.h1>
//             <motion.div
//               variants={animatedContainer(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="text-2xl lg:text-3xl font-light tracking-tight"
//             >
//               <span className="text-white items-start">I am a </span>
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent font-normal">
//                 <Typewriter
//                   words={["Full Stack Developer"]}
//                   loop={0}
//                   cursor
//                   cursorStyle=""
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </motion.div>
//             <motion.p
//               variants={animatedContainer(1)}
//               initial="hidden"
//               animate="visible"
//               className="max-w-lg py-6 font-light tracking-wide text-center text-base lg:text-lg text-neutral-300 leading-relaxed"
//             >
//               {ABOUT_CONTENT}
//             </motion.p>
//             <motion.a
//               href={ResumePDF}
//               download="Rohan_Chavan_Resume.pdf"
//               className="inline-flex my-6 items-center mt-6 px-6 py-3 
//                           bg-transparent 
//                           border border-cyan-200 
//                           text-white font-semibold rounded-lg shadow-lg 
//                           backdrop-blur-md bg-white/10 
//                           hover:bg-white/20 hover:border-cyan-300 
//                           transition-all duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5 }}
//             >
//               <FaDownload className="mr-2 text-lg" />
//               Download Resume
//             </motion.a>
//           </div>
//         </div>

//       </div>
//     </Element>
//   );
// };

// export default About;


import { ABOUT_CONTENT } from "../constants/content";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ResumePDF from "../../assets/pdf/Rohan_resume.pdf";
import ProfileImg from "../../assets/images/Rohan11.jpg"; // ⭐ your photo path

const animatedContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const About = () => {
  return (
    // <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
    <Element name="about" className="border-b border-neutral-900 pb-2 lg:mb-3">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4">
          <div className="flex flex-col items-center">

            {/* ⭐ Profile Photo */}
            <motion.img
              src={ProfileImg}
              alt="Rohan Chavan"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              // className="w-40 h-40 object-cover rounded-full shadow-lg border-2 border-cyan-300 mt-10"
              className="w-40 h-40 rounded-full shadow-lg border-2 border-cyan-300 mt-4 object-fill"
            />

            {/* Name */}
           
            <motion.h1
                variants={animatedContainer(0)}
                initial="hidden"
                animate="visible"
                className="mt-6 pb-4 text-3xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent shadow-lg lg:mt-10 lg:text-4xl"
            >
                Rohan Chavan
            </motion.h1>


            {/* Role */}
            <motion.div
              variants={animatedContainer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-3xl font-light tracking-tight"
            >
              <span className="text-white">I am a </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent font-normal">
                <Typewriter
                  words={["Full Stack Developer"]}
                  loop={0}
                  cursor
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            {/* About Content */}
            <motion.p
              variants={animatedContainer(1)}
              initial="hidden"
              animate="visible"
              className="max-w-lg py-6 text-base lg:text-lg text-neutral-300 text-center leading-relaxed font-light tracking-wide"
            >
              {ABOUT_CONTENT}
            </motion.p>

            {/* Resume Button */}
            <motion.a
              href={ResumePDF}
              download="Rohan_Chavan_Resume.pdf"
              className="inline-flex items-center mt-6 px-6 py-3 
                         bg-white/10 backdrop-blur-md
                         border border-cyan-200 
                         text-white font-semibold rounded-lg shadow-lg 
                         hover:bg-white/20 hover:border-cyan-300 
                         transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <FaDownload className="mr-2 text-lg" />
              Download Resume
            </motion.a>

          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
