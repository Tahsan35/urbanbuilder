import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Form from "./Form";
import Pretitle from "./Pretitle"; // Assuming Pretitle is used for consistency

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div className="w-full xl:min-h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-8 xl:gap-[90px]">
            {/* info section */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <Pretitle text="Contact Us" />
                <h2 className="h2 mb-6">Get In Touch</h2>
                <p className="text-secondary mb-8">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
                {/* contact items */}
                <div className="flex flex-col gap-8 mb-10 xl:mb-0">
                  <div className="flex items-start gap-4">
                    <RiChat1Line className="text-accent text-3xl" />
                    <div>
                      <h5 className="text-xl font-semibold font-primary leading-tight mb-1">
                        Chat to Us
                      </h5>
                      <p className="text-secondary mb-1">Our friendly team is here to help.</p>
                      <a href="mailto:md.shakil.developer@gmail.com" className="font-semibold text-black hover:text-accent transition-colors">
                        md.shakil.developer@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <RiMapPin2Line className="text-accent text-3xl" />
                    <div>
                      <h5 className="text-xl font-semibold font-primary leading-tight mb-1">
                        Office
                      </h5>
                      <p className="text-secondary mb-1">Come and say hello at our office.</p>
                      <p className="font-semibold text-black">
                        1234 Street city, Wari, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <RiSmartphoneLine className="text-accent text-3xl" />
                    <div>
                      <h5 className="text-xl font-semibold font-primary leading-tight mb-1">
                        Phone
                      </h5>
                      <p className="text-secondary mb-1">Mon-Fri from 8am to 5pm.</p>
                      <a href="tel:01623443703" className="font-semibold text-black hover:text-accent transition-colors">
                        01623443703
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* form section */}
            <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-inner">
              <Pretitle text="Request A Quote" />
              <h2 className="h2 mb-4">Let's Build Something Together</h2>
              <p className="text-secondary pb-8">
                Fill out the form below and we'll get back to you as soon as possible to discuss your project needs.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
