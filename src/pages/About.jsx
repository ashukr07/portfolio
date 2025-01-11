import ComputersCanvas from "../components/Laptop"
import { about } from "../data/constant"

function About() {
  return (
    <section id="about" >
      <p className="text-4xl md:text-5xl text-primary font-bold my-5 text-center">About Me!!</p>
<div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
  <div className="pb-4 md:pb-0 flex-shrink-0">
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