import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Curve from "../../components/atoms/Curve";

const Footer = () => {
  return (
    <div className="mt-[-23vw] relative">
      <Curve fill="#feedbc" />
      <Container className="bg-[#feedbc] pt-[64px] lg:pt-[8.3rem] text-left">
        <footer className="w-full">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-[30px] justify-between items-center">
              <div className="lg:text-[3.125rem] font-bold text-[#262626] leading-[40px] lg:leading-[67px] text-[30px]">
                Vulputate et pulvinar ethre
                <br />
                Suspendisse tellus consectetur
              </div>
              <Button variant="primary">Lorem Ipsum</Button>
            </div>
            <hr className="border-gray-300 border-t-[#2626261F] border-t-px mt-[36px] lg:mt-[5.6rem]" />

            <div className="text-base lg:text-xl text-[#262626] font-semibold pt-[30px] lg:pt-[2.5rem] pb-[50px] lg:pb-[5.75rem] flex items-start lg:items-center justify-between flex-col gap-2">
              <span className="leading-[21px] lg:leading-md">
                Copyright © 2022 Lorem Ipsum.
              </span>
              <span className="lg:underline">
                <a href="#" className="">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="leading-[21px] lg:leading-[2.1rem]">
                  Terms and Conditions
                </a>
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
