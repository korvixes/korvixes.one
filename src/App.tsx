import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ChatwootWidget } from "@/components/layout/ChatwootWidget"
import { HomePage } from "@/pages/HomePage"

// Legal Pages
import { PrivacyPolicyPage } from "@/pages/legal/PrivacyPolicyPage"
import { TermsOfServicePage } from "@/pages/legal/TermsOfServicePage"
import { SecurityPage } from "@/pages/legal/SecurityPage"
import { CompliancePage } from "@/pages/legal/CompliancePage"

// Company Pages
import { AboutUsPage } from "@/pages/company/AboutUsPage"
import { CareersPage } from "@/pages/company/CareersPage"
import { PartnersPage } from "@/pages/company/PartnersPage"
import { PressKitPage } from "@/pages/company/PressKitPage"

// Content Pages
import { BlogPage } from "@/pages/content/BlogPage"
import { ManufacturingPage } from "@/pages/content/ManufacturingPage"

// Contact Page
import { ContactPage } from "@/pages/contact/ContactPage"

// Product Pages
import { ProductPage } from "@/pages/product/ProductPage"
import { PaymentSuccessPage } from "@/pages/product/PaymentSuccessPage"

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatwootWidget />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
            background: "#0B0E16",
            border: "1px solid #1a2235",
            color: "#dce8f5",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<HomePage section="features" />} />
        <Route path="/solutions" element={<HomePage section="solutions" />} />
        <Route path="/testimonials" element={<HomePage section="testimonials" />} />
        <Route path="/faq" element={<HomePage section="faq" />} />
        <Route path="/pricing" element={<HomePage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        {/* Legal */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        {/* Company */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/press" element={<PressKitPage />} />
        {/* Content */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Product */}
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
