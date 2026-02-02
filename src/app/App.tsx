import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/imports/LandingPage";
import AboutUs from "@/imports/AboutUs";
import HowItWorks from "@/imports/HowItWorks";
import Results from "@/imports/Results";
import Contact from "@/imports/Contact";
import { Layout } from "@/components/Layout";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
