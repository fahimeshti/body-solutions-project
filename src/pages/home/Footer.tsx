import Button from "../../components/atoms/Button";
import Curve from "../../components/atoms/Curve";

const Footer = () => {
  return (
    <div className="mt-[-23vw]">
      <Curve fill="#feedbc" />
      <footer className="bg-[#feedbc] pt-[8.3rem] text-left">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-[3.125rem] font-bold text-[#262626]">
              Vulputate et pulvinar ethre
              <br />
              Suspendisse tellus consectetur
            </div>
            <Button variant="primary">Lorem Ipsum</Button>
          </div>
          <hr className="border-gray-300 border-t-[#2626261F] border-t-px mt-[5.6rem]" />

          <div className="text-xl text-[#262626] font-semibold pt-[2.5rem] pb-[5.75rem] flex items-center justify-between">
            <span className="leading-md">Copyright © 2022 Lorem Ipsum.</span>
            <span className="">
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="underline leading-[2.1rem]">
                Terms and Conditions
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
