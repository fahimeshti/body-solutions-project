const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-[350px] lg:max-w-[100rem] mx-auto">{children}</div>
    </div>
  );
};

export default Container;
