import Container from "./atoms/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between w-full bg-white px-6 h-[72px] lg:h-[96px] rounded-full mt-[50px] lg:mt-[4.25rem]">
        <div className="w-8" />

        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <img src="/logo-paint.png" alt="" className="w-[8rem] h-[4rem]" />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <img src="/us-flag.png" alt="" className="w-9 h-6" />
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.984985 0.984375H11.0162L6.00061 6L0.984985 0.984375Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
