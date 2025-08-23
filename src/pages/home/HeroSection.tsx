import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import HeroImage from "./HeroImage";

const pills = [
  "Cursus Integer",
  "Integer Consequat",
  "Tellus Euismod Pellentesque",
  "Aliquot Tristique",
  "Pellentesque Tempus",
  "Mauris Fermentum Praesent",
];

const HeroSection = () => {
  return (
    <>
      <Container className="bg-[#feedbc] pb-[23vw]">
        <div className="w-full lg:pt-[4.25rem] flex flex-col-reverse lg:flex-row h-full">
          <div className="lg:pt-[2.875rem] lg:pl-[95px] w-full">
            <span className="font-bold text-[#F9B800] text-[16px] lg:text-[1.875rem] leading-[100%] uppercase align-middle tracking-normal">
              risus praesent vulputate.
            </span>

            <div className="font-bold text-[36px] lg:text-[5rem] tracking-normal mb-[30px] lg:mb-[3.75rem] lg:w-[780px]">
              <h1>
                <span className="leading-[48px] lg:leading-[5.6rem]">
                  Cursus Integer
                </span>
                <br />
                <span className="leading-[36px] lg:leading-[5.6rem]">
                  Consequat Tristique.
                </span>
              </h1>
            </div>

            <div className="w-full flex flex-wrap max-w-[40.938rem] gap-[0.875rem] mb-[40px] lg:mb-[3.75rem]">
              {pills.map((pill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full pl-5 pr-[2.5rem] py-[0.625rem] text-[17px] lg:text-[20px] leading-[27px] font-semibold text-[#262626] flex items-center gap-2"
                >
                  <span className="w-[1.875rem] h-[1.875rem] grid place-content-center">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 0.519531C6.08594 0.519531 0.519531 6.08594 0.519531 13C0.519531 19.9141 6.08594 25.4805 13 25.4805C19.9141 25.4805 25.4805 19.9141 25.4805 13C25.4805 6.08594 19.9141 0.519531 13 0.519531ZM13 23.0195C7.49219 23.0195 2.98047 18.5078 2.98047 13C2.98047 7.49219 7.49219 2.98047 13 2.98047C18.5078 2.98047 23.0195 7.49219 23.0195 13C23.0195 18.5078 18.5078 23.0195 13 23.0195ZM18.7422 7.49219L10.4805 15.6953L7.25781 12.4727L5.5 14.2305L10.4805 19.2695L20.5 9.25L18.7422 7.49219Z"
                        fill="#F9B800"
                      />
                    </svg>
                  </span>
                  {pill}
                </div>
              ))}
            </div>
            <Button>Lorem Ipsum</Button>
          </div>
          <div className="w-full h-[350px] lg:h-[45rem]">
            <HeroImage />
            {/* <img
              src="/hero-bg.png"
              alt="Hero Section Image"
              className="w-full h-full object-contain"
            /> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
