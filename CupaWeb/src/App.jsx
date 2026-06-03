import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CompaniesSection from './Component/CompaniesSection'
import ConsultationSection from './Component/ConsultationSection'
import ContactSection from './Component/ContactSection'
import FAQSection from './Component/FAQSection'
import FeaturesSection from './Component/FeaturesSection'
import FooterSection from './Component/FooterSection'
import HeroSection from './Component/HeroSection'
import HowItWorksSection from './Component/HowItWorksSection'
import NavLinks from './Component/NavLinks'
import PricingSection from './Component/PricingSection'
import TestimonialsSection from './Component/TestimonialsSection'
import LoginPage from './Component/LoginPage'
import SignupPage from './Component/SignupPage'
import SignupDetailsPage from './Component/SignupDetailsPage'
import SignupVerificationPage from './Component/SignupVerificationPage'
import AccountReviewPage from './Component/AccountReviewPage'
import SignupSuccessPage from './Component/SignupSuccessPage'
import CooperativeDetailsSection from './Component/CooperativeDetailsSection'
import OTPVerificationSection from './Component/OTPVerificationSection'
import RegistrationNumberSection from './Component/RegistrationNumberSection'
import BankDetailsSection from './Component/BankDetailsSection'
import ExcosDocumentationSection from './Component/ExcosDocumentationSection'
import DashboardPage from './Component/DashboardPage'
import LoanDetailsPage from './Component/LoanDetailsPage'

function Home() {
  return (
    <>
      <NavLinks />
      <HeroSection />
      <CompaniesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <ConsultationSection />
      <FooterSection />
    </>
  )
}

function Contact() {
  return (
    <>
      <NavLinks />
      <ContactSection />
      <FooterSection />
      {/* <LoanDetailsModal/> */}
    </>
  )
}

function Dashboard() {
  return (
    <>
      <NavLinks />
      <DashboardPage />
      <FooterSection /> 
      
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/details" element={<SignupDetailsPage />} />
        <Route path="/signup/verification" element={<SignupVerificationPage />} />
        <Route path="/signup/review" element={<AccountReviewPage />} />
        <Route path="/signup/success" element={<SignupSuccessPage />} />
        <Route path="/cooperative-details" element={<CooperativeDetailsSection />} />
        <Route path="/otp-verification" element={<OTPVerificationSection />} />
        <Route path="/registration-number" element={<RegistrationNumberSection />} />
        <Route path="/bank-details" element={<BankDetailsSection />} />
        <Route path="/excos-documentation" element={<ExcosDocumentationSection />} />
        <Route path="/Loan-Details" element={<LoanDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App  
