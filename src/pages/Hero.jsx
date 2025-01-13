import { AnimatedImage } from "../components/AnimatedImage"
import { BackgroundAnimation } from "../components/BackgroundAnimation"
import { HeroContent } from "../components/HeroContent"


function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200 relative overflow-hidden" id="home">
      <BackgroundAnimation />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <AnimatedImage />
        <HeroContent />
      </div>
      
    </section>
  )
}

export default Hero