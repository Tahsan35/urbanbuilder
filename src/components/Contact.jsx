import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Form from "./Form";
import Pretitle from "./Pretitle";

const Contact = () => {
  return (
    <div className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px]">
              <h4 className="text=-[26px] font-bold mb-6">Contact Us</h4>
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                reprehenderit accusamus voluptate quam impedit. Nesciunt.
              </p>
              {/* contact item */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-accent text-[25px]" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2">
                      Chat to Us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className=" font-semibold text-black">
                      md.shakil.developer@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-accent text-[25px]" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4"> Come and say hello at our office.</p>
                    <p className=" font-semibold text-black">
                      1234 Street city, wari,dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-accent text-[25px]" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className=" font-semibold text-black">01623443703</p>
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote </h2>
              <p className="pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                quasi in? Eligendi deserunt, ipsam exercitationem fuga eveniet
                optio iusto consequatur enim, laboriosam recusandae nihil et!
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
