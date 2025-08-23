import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Curve from "../../components/atoms/Curve";
import CardGrid from "./CardGrid";
import TestimonialSection from "./TestimonialSection";

const ServiceSection = () => {
  return (
    <div className="mt-[-23vw] relative">
      <Curve fill="#262626" />
      <Container className="bg-[#262626] pb-[46.25rem]">
        <div className="pt-[2.375rem]">
          <div className="w-full flex">
            <div className="w-full max-w-[34.5rem] pt-[16.75rem]">
              <p className="font-normal text-[1.25rem] text-[#F9B800] leading-md tracking-[2%] align-middle mb-5">
                Quisque porttitor vitae vel amet neque scelerisque mattis.
                Consectetur nibh velit magna consectetur leo.
              </p>
              <h4 className="font-bold text-[3.125rem] leading-[4.25rem] tracking-[0em] align-middle text-white">
                Cursus Integer Conseq Aliquam Tristique.
              </h4>
              <Button variant="light" className="mt-[3.75rem]">
                Lorem Ipsum
              </Button>
            </div>

            <div className="w-full">
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
