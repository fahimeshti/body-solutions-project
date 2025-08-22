import Button from "../../components/atoms/Button";
import Container from "../../components/atoms/Container";
import Curve from "../../components/atoms/Curve";

const pills = [
  "Ac viverra sed risus praesent vulputate. ",
  "Natoqu consectetur pulvinar.",
  "Sollicitudin ornare tempus nulla varius pulvinar.",
  "Varius pulvinar",
  "Natoque id tellus consectetur",
  "Vulputate et vulputate suspendisse",
];

const FeaturesSection = () => {
  return (
    <div className="mt-[-23vw]">
      <Curve fill="#F9B800" />
      <Container className="bg-[#F9B800]">
        <div className="w-full pt-[18.75rem] pb-[25.25rem] flex h-full">
          <div className="pt-[3rem] w-full">
            <div className="font-bold text-[5rem] leading-[5.6rem] tracking-normal mb-[3.75rem]">
              <h4>
                <span>Cursus Integer</span>
                <br />
                <span>Consequat Tristique.</span>
              </h4>
            </div>

            <div className="w-full flex flex-wrap max-w-[38.75rem] gap-[0.875rem] mb-[3.75rem]">
              {pills.map((pill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full pl-5 pr-[2.5rem] py-[0.625rem] text-[1.25rem] leading-md font-semibold text-[#262626] flex items-center gap-2"
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
            <Button variant="secondary">Lorem Ipsum</Button>
          </div>
          <div className="w-full h-[44.625rem]">
            <img
              src="/featured.png"
              alt="Hero Section Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturesSection;
