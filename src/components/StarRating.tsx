import React from "react";

type StarRatingProps = {
  count: number;
};

const StarRating = ({ count }: StarRatingProps) => {
  const maxStars = 5;
  return (
    <div className="flex gap-[2px] text-base tracking-[.3em] leading-5">
      {Array.from({ length: maxStars }, (_, i) => (
        <span
          key={i}
          className={i < count ? "text-[#515151]" : "text-[#ddd]"}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
