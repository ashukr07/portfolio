import ComputersCanvas from "../components/Laptop"
import { about } from "../data/constant"
import { styles } from "../styles"

function About() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-20">
      <p className={styles.sectionHeadText}>About Me!!</p>
<div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
  <div className="pb-4 md:pb-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 h-60 ">
    <ComputersCanvas />
  </div>
  <div className="border-l-2 border-primary pl-4 max-w-md md:max-w-lg text-center md:text-left">
    <p className="text-base md:text-lg leading-relaxed">
      {about}
    </p>
  </div>
</div>

    </section>
  )
}

export default About