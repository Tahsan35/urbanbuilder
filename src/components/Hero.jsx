import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image (optimized) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets_2/img/hero/bg.jpg" // Update path
          alt="Construction Site"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto flex h-full flex-col justify-center px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
            URBAN<span className="text-yellow-400">BUILD</span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-yellow-400 md:text-3xl">
            BUILDING ROBUST LASTING SOLUTIONS
          </h2>

          <p className="mb-8 text-lg leading-relaxed md:text-xl">
            From concept to completion, we ensure every detail is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years.
          </p>
          <div>
            <Button text="See our work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
