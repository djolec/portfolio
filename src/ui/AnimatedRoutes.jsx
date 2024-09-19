import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import useIsTabletOrMobile from "../hooks/useIsTabletOrMobile";

import Preloader from "./Preloader";
import useIsLoadingApp from "../hooks/useIsLoadingApp";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const ProjectPage = lazy(() => import("../pages/ProjectPage/ProjectPage"));
const SuccessFailedError = lazy(
  () => import("../pages/Contact/SuccessFailedError"),
);
const Work = lazy(() => import("../pages/Work/Work"));

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

        <Suspense fallback={<div className="h-screen w-screen bg-[#141517]" />}>
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
        </Suspense>
      </div>
    </AppContext.Provider>
  );
};

export default AnimatedRoutes;
