import React from "react";

const SkeletonCard = () => {
  return (
    <div className="rounded-lg duration-500 ease-in-out hover:scale-110 flex flex-col gap-1 justify-center items-center">
      <div className="skeleton-loader w-full h-[222px] rounded-lg bg-gray-300 animate-pulse mb-2" />
    </div>
  );
};

export default React.memo(SkeletonCard);
