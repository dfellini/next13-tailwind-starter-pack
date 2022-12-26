import Image from "next/image";

const Avatar = ({ src, alt, size = 50 }) => {
  return (
    <div className="relative">
      {/* <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"> */}
      <Image
        src={src}
        alt={alt}
        className={`rounded-full`}
        width={size}
        height={size}
      />
    </div>
  );
};

export default Avatar;
