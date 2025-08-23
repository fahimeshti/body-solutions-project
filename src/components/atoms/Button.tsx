import React, { useState, useCallback } from "react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [wasHovered, setWasHovered] = useState(false);

  const onEnter = useCallback(() => {
    setIsHovered(true);
    setWasHovered(true);
  }, []);

  const onLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const baseVariant =
    variant === "primary"
      ? "primary"
      : variant === "secondary"
      ? "secondary"
      : "light";

  const primaryStateClasses = `${isHovered ? " is-hovered" : ""}${
    wasHovered ? " was-hovered" : ""
  }`;

  const classes = [
    "w-[22rem] px-[3.1rem] py-[1.375rem] font-bold text-[18px] lg:text-2xl rounded-full flex items-center gap-2 justify-between cursor-pointer btn",
    baseVariant,
    className,
    primaryStateClasses,
  ].join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
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
