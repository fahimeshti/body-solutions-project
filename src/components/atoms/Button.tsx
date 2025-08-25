const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "light";
}) => {
  const baseVariant =
    variant === "primary"
      ? "primary"
      : variant === "secondary"
      ? "secondary"
      : "light";

  const classes = [
    "w-full md:w-[22rem] px-[3.1rem] py-[1.375rem] font-bold text-[18px] lg:text-2xl rounded-full flex items-center gap-2 justify-between cursor-pointer btn",
    baseVariant,
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
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
        if (!el.classList.contains("is-hovered")) {
          el.classList.remove("was-hovered");
        }
      }}
    >
      {children}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        aria-hidden="true"
      >
        <path
          d="M18.75 6.26953L16.9922 8.02734L22.7344 13.7695H2.51953V16.2305H22.7344L16.9922 21.9727L18.75 23.7305L27.4805 15L18.75 6.26953Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default Button;
