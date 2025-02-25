import React from "react";

const SkeletonCard = () => {
  return (
    <div className="rounded-lg border border-secondary duration-500 ease-in-out hover:scale-110 flex flex-col gap-1 justify-center items-center bg-primary p-4">
      <div className="skeleton-loader w-full h-[190px] rounded-lg bg-gray-300 animate-pulse mb-2"></div>
      <div className="skeleton-loader w-full h-[20px] bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
};

export default React.memo(SkeletonCard);
