
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePackages from "./pages/ServicePackages";
import Billing from "./pages/Billing";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import ArgentaIL from "./pages/ArgentaIL";
import BementIL from "./pages/BementIL";
import CerroGordoIL from "./pages/CerroGordoIL";
import ElwinIL from "./pages/ElwinIL";
import LaPlaceIL from "./pages/LaPlaceIL";
import LakeCityIL from "./pages/LakeCityIL";
import MaconIL from "./pages/MaconIL";
import MtZionIL from "./pages/MtZionIL";
import OakleyIL from "./pages/OakleyIL";
import OreanaIL from "./pages/OreanaIL";
import DaltonCityIL from "./pages/DaltonCityIL";
import BilmineIL from "./pages/BilmineIL";
import InternetProvidersNearMe from "./pages/InternetProvidersNearMe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service-packages" element={<ServicePackages />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/argenta-il-internet-service-provider" element={<ArgentaIL />} />
          <Route path="/bement-il-internet-service-provider" element={<BementIL />} />
          <Route path="/cerro-gordo-il-internet-service-provider" element={<CerroGordoIL />} />
          <Route path="/elwin-il-internet-service-provider" element={<ElwinIL />} />
          <Route path="/la-place-il-internet-service-provider" element={<LaPlaceIL />} />
          <Route path="/lake-city-il-internet-service-provider" element={<LakeCityIL />} />
          <Route path="/macon-il-internet-service-provider" element={<MaconIL />} />
          <Route path="/mt-zion-il-internet-service-provider" element={<MtZionIL />} />
          <Route path="/oakley-il-internet-service-provider" element={<OakleyIL />} />
          <Route path="/oreana-il-internet-service-provider" element={<OreanaIL />} />
          <Route path="/dalton-city-il-internet-service-provider" element={<DaltonCityIL />} />
          <Route path="/milmine-il-internet-service-provider" element={<BilmineIL />} />
          <Route path="/internet-providers-near-me" element={<InternetProvidersNearMe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
