const Curve = ({ fill }: { fill?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="-mb-[0.125rem]"
    >
      <polygon fill={fill} points="0,315 1440,9.01 1440,320 0,320" />
    </svg>
  );
};

export default Curve;
