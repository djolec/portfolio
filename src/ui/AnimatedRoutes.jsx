import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { createContext } from "react";
import useIsTabletOrMobile from "../hooks/useIsTabletOrMobile";

import Preloader from "./Preloader";
import useIsLoadingApp from "../hooks/useIsLoadingApp";

import Homepage from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import SuccessFailedError from "../pages/Contact/SuccessFailedError";
import Work from "../pages/Work/Work";

export const AppContext = createContext();

const AnimatedRoutes = () => {
  const location = useLocation();
  const isTabletOrMobile = useIsTabletOrMobile();
  const { isLoadingApp } = useIsLoadingApp();

  return (
    <AppContext.Provider value={{ location, isLoadingApp, isTabletOrMobile }}>
      <div className="font-roboto">
        <AnimatePresence>
          {isLoadingApp && location.pathname === "/" && <Preloader />}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<ProjectPage />} />
            <Route path="/contact/:id" element={<SuccessFailedError />} />
            <Route path="*" element={<SuccessFailedError />} />
          </Routes>
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
};

export default AnimatedRoutes;
