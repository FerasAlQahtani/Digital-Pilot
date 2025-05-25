import React from "react";

const Service = ({
  icon,
  title,
  description,
}: {
  icon: React.JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-[440px] min-w-1/2 xl:min-w-1/3 min-w-fit px-4 md:px-6 xl:px-8 py-4 sm:py-6 md:py-8 xl:py-10 rounded-xl flex flex-col gap-2 md:gap-4 hover:bg-[#A604F2]/[3%] duration-300">
      <div className="w-full flex justify-between items-center">{icon}</div>
      <h1 className="font-semibold text-lg xl:text-xl">{title}</h1>
      <p className="font-regular text-sm xl:text-base">{description}</p>
    </div>
  );
};

export default Service;
