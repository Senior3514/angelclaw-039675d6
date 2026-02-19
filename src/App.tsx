import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import IdentityAccess from "./pages/IdentityAccess";
import NetworkFabric from "./pages/NetworkFabric";
import PolicyCenter from "./pages/PolicyCenter";
import Analytics from "./pages/Analytics";
import Automation from "./pages/Automation";
import DataProtection from "./pages/DataProtection";
import SettingsPage from "./pages/SettingsPage";
import SelfLearning from "./pages/SelfLearning";
import PoliciesHub from "./pages/PoliciesHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/network" element={<NetworkFabric />} />
            <Route path="/identity" element={<IdentityAccess />} />
            <Route path="/dlp" element={<DataProtection />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/policy" element={<PolicyCenter />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/self-learning" element={<SelfLearning />} />
            <Route path="/policies-hub" element={<PoliciesHub />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
