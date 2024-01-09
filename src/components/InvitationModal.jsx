import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { XposureLogo } from "../assets/logos/XposureLogo";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full bg-customDarkBgTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="max-w-screen-xl w-full h-full sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
          <div className="w-full flex items-center justify-center">
          <iframe
          width="100%"
          height="100%"
          src="https://afbf5849.sibforms.com/serve/MUIFALIAXFhOCtWeRNpmFnPlJ0ru2zPIC5-RSx1HnwShroLoeAYRebp-3isisWq3lhAeF5O9HtQyunW5IgtloNRbdZVFcTunVakuJ9PuT3VtDIL7x3J6Hj3jJx4PzVs5LG1DmCOnvKBpaHJE9UCQhGEmIWAXIPbxUgUKB_EHoYqkmb0zGRQTKT73Q6DSOmNnDVoCJQuiCraBY1cf"
          frameborder="0"
          scrolling="auto"
          allowfullscreen
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
        />
      </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
