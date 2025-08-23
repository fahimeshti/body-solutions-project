import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Curve from "../../components/atoms/Curve";
import CardGrid from "./CardGrid";
import TestimonialSection from "./TestimonialSection";

const ServiceSection = () => {
  return (
    <div className="mt-[-8vw] lg:mt-[-23vw] relative">
      <Curve fill="#262626" />
      <Container className="bg-[#262626] pb-[410px] lg:pb-[46.25rem]">
        <div className="lg:pt-[2.375rem]">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full max-w-[34.5rem] pt-[36px] lg:pt-[16.75rem]">
              <p className="font-normal text-[20px] lg:text-[1.25rem] text-[#F9B800] leading-[36px] lg:leading-md tracking-[2%] align-middle mb-5">
                Quisque porttitor vitae vel amet neque scelerisque mattis.
                Consectetur nibh velit magna consectetur leo.
              </p>
              <h4 className="font-bold text-[36px] lg:text-[3.125rem] leading-[48px] lg:leading-[4.25rem] tracking-[0em] align-middle text-white">
                Cursus Integer Conseq Aliquam Tristique.
              </h4>
              <Button variant="light" className="mt-[3.75rem]">
                Lorem Ipsum
              </Button>
            </div>

            <div className="w-full mt-[55px] lg:mt-0">
              <CardGrid />
            </div>
          </div>
        </div>
      </Container>

      <TestimonialSection />
    </div>
  );
};

export default ServiceSection;
