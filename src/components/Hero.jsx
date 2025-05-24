import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-[url('/assets_2/img/hero/bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Content */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container h-full flex items-center">
        <div className="z-20 mx-5">
          <h1 className="h1 text-white mb-4">
            <span className="text-accent"> Building </span>rebust lusting
            solutions
          </h1>

          <p className=" text-amber-100 mb-8 text-lg md:text-xl">
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
