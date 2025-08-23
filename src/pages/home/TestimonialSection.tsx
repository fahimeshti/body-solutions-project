import Container from "../../components/atoms/Container";

const TestimonialSection = () => {
  return (
    <div className="absolute -bottom-[130px] left-1/2 -translate-x-1/2 w-full z-1">
      <Container className="bg-wh">
        <div
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("is-hovered");
            e.currentTarget.classList.remove("was-hovered");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove("is-hovered");
            e.currentTarget.classList.add("was-hovered");
          }}
          onAnimationEnd={(e) => {
            const el = e.currentTarget as HTMLElement;
            // Only clean up after the exit animation
            if (e.nativeEvent.animationName === "bounce-out-smooth") {
              el.classList.remove("was-hovered");
            }
          }}
          className="relative testimonial"
        >
          <div className="w-full flex items-center py-[100px] px-[135px] rounded-[60px]">
            <div className="shrink-0 w-[472px] aspect-square rounded-full overflow-hidden">
              <img src="/review.png" alt="" className="w-full h-full" />
            </div>

            <div className="w-full py-[68px] pl-[72px]">
              <h4 className="font-bold text-[50px] leading-[68px]">
                What our customers thought?
              </h4>
              <p className="font-normal text-[30px] leading-[40px] mb-5 mt-10">
                Euismod magna id purus eget nunc ligula suspendisse dui netus.
                Condimentum blandit rutrum at mauris enim pulvinar duis etiam
                duis.
              </p>
              <span className="font-bold text-2xl leading-[32px] author">
                Holly Davidson
              </span>

              <div className="mt-[40px] flex items-center gap-[40px]">
                <button
                  type="button"
                  className="cursor-pointer username text-inherit hover:text-primary transition-all duration-150"
                >
                  <svg
                    width="40"
                    height="17"
                    viewBox="0 0 40 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00012207 8.5L8.3009 0.199219L8.3009 6.44922L39.5509 6.44922V10.5508L8.3009 10.5508L8.3009 16.8008L0.00012207 8.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="cursor-pointer hover:text-primary"
                >
                  <svg
                    width="41"
                    height="17"
                    viewBox="0 0 41 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.1017 8.5L31.8009 16.8008V10.5508H0.550903V6.44922H31.8009V0.199219L40.1017 8.5Z"
                      fill="#F9B800"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSection;
