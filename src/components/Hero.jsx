import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-[url('/assets_2/img/hero/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black/70 z-10"></div>
      <div className="container h-full flex items-center">
        <div className="z-20 mx-auto md:mx-0 md:ml-8 lg:ml-16 max-w-md md:max-w-2xl lg:max-w-3xl text-center md:text-left">
          {/* Enhanced Heading */}
          <h1 className="h1 text-white mb-6 font-extrabold tracking-tight leading-tight text-shadow-lg hover:text-shadow-xl transition-all duration-300 animate-pulse">
            <span className="text-accent hover:brightness-110 transition-all duration-300 drop-shadow-md">
              Building
            </span>{" "}
            robust <br /> lasting solutions
          </h1>
          <p
            className="text-gray-300 mb-10 text-lg md:text-xl leading-relaxed 
                        text-shadow-sm animation-delay-300"
          >
            From concept to completion, we ensure every detail is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years.
          </p>
          <div>
            {/* Updated Button with ScrollLink */}
            <ScrollLink to="projects" smooth={true} spy={true}>
              <Button text="See our work" />
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
