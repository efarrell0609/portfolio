import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <SettingsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </SettingsProvider>
);

createRoot(document.getElementById("root")!).render(<App />);