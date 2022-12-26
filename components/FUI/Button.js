import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Button = ({ children, variant, tw }) => {
  const classes =
    variant === "primary"
      ? `rounded-lg bg-blue-400 py-2 px-4 text-gray-100 hover:bg-blue-500`
      : variant === "more"
      ? `flex items-center gap-1 py-1 px-2 font-bold text-gray-700 hover:text-gray-500 text-sm`
      : `bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${tw}`;

  return (
    <button className={`${classes} ${tw}`} type="button">
      {children} {variant === "more" && <BsFillArrowRightCircleFill />}
    </button>
  );
};

export default Button;
