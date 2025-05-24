import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              {/* pretitle */}
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">
                Focused On Excellence In Every Project
              </h2>
              <p className="mb-11">
                Our unwavering commitment to excellence drives every project we
                undertake. From concept to completion, we meticulously craft
                solutions that embody quality, precision and innovation.
              </p>
              <div
                className="w-max flex flex-col text-right mb-10
              "
              >
                <Image
                  src="/assets_2/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="Company CEO Signature"
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact us" />
            </div>
          </div>
          {/* img */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10">
                {" "}
              </div>
              <Image
                src={"/assets_2/img/about/img.jpg"}
                width={444}
                height={493}
                alt="About Company"
              />
            </div>
          </div>
          {/* Add your image or other content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
