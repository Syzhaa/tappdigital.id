import HeroSection from '../components/home/HeroSection.jsx'
import SocialProof from '../components/home/SocialProof.jsx'
import ProblemSolution from '../components/home/ProblemSolution.jsx'
import FeatureBento from '../components/home/FeatureBento.jsx'
import UseCases from '../components/home/UseCases.jsx'
import ProductCatalog from '../components/home/ProductCatalog.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import PricingSection from '../components/home/PricingSection.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import FinalCta from '../components/home/FinalCta.jsx'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <SocialProof />
        <ProblemSolution />
        <FeatureBento />
        <UseCases />
        <ProductCatalog />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
    </div>
  )
}
