import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container px-4">
        <div className="flex flex-col xl:flex-row relative">
          <div className="flex-1 w-full max-w-lg xl:max-w-[484px] xl:pt-[54px] mb-12 xl:mb-5 text-center xl:text-left">
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 mx-auto xl:mx-0 max-w-md xl:max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we've helped them bring
              their dreams to live with expert craftsmanship.
            </p>
            {/* btn */}
            <Button text="Work with us" />
          </div>
          {/* img & slider container */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets_2/img/testimonials/img.jpg"
                fill
                alt="quote"
                className="object-cover"
                quality={100}
              />
            </div>
            {/* slider */}
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max">
              {/* quote icon img */}
              <Image
                src="/assets_2/img/testimonials/quote.svg"
                alt="quote"
                className="absolute z-20 -top-4 left-[60px]"
                width={54}
                height={36}
              />
              {/* slider */}
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
