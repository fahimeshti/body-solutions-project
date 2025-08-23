const CardGrid = () => {
  const cards = [
    {
      number: 1,
      title: "Phasellus Vitae",
      subtitle: "Quisque",
      desc: "Porttitor Vitae Vel Amet",
      icon: "/1.png",
    },
    {
      number: 2,
      title: "Iaculis Magna",
      subtitle: "Porttitor",
      desc: "Neque Scelerisque Mattis.",
      icon: "/2.png",
    },
    {
      number: 3,
      title: "Eleifend Pulvinar",
      subtitle: "Vitae",
      desc: "Consectetur Nibh Velit",
      icon: "/3.png",
    },
    {
      number: 4,
      title: "Velit Odio Phir",
      subtitle: "Ametneq",
      desc: "Magna Consectetur Leo.",
      icon: "/4.png",
    },
  ];

  return (
    <div className="w-fit ml-auto">
      <div className="grid grid-cols-2 gap-[3.75rem]">
        {cards.map((card, index) => (
          <div
            key={index}
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
            className={`w-[22rem] h-[25rem] p-[3.125rem] relative custom-card ${
              Number.isInteger(Math.sqrt(index + 1))
                ? "bg-white"
                : "bg-primary"
            }${(index + 1) % 2 !== 0 ? " -mt-[7.75rem]" : ""}`}
          >
            <div className="flex flex-col items-start gap-6 mb-[0.6rem]">
              <img
                src={card.icon}
                alt=""
                className="w-[3.125rem] h-[3.125rem]"
              />
              <span className="text-[4.5rem] leading-[6rem] font-bold">
                {card.number}
                <span className={index < 2 ? "text-yellow-400" : "text-white"}>
                  .
                </span>
              </span>
            </div>
            <h3 className="text-2xl font-bold leading-[2rem] mb-5">
              {card.title}
            </h3>
            <h4 className="text-2xl font-semibold leading-md">
              {card.subtitle}
            </h4>
            <p className="leading-[1.5rem] text-lg font-normal">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
