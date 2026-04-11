import React from "react";

type BadgeProps = {
  type: "mandatory" | "any";
};

const Badge = ({ type }: BadgeProps) => {
  if (type === "mandatory") {
    return (
      <span className="text-sm text-[#ff4040] border border-[#f88a8a] bg-[#f4d4d4] px-1">
        必須
      </span>
    );
  }
  return (
    <span className="text-sm text-[#333] border border-[#555] bg-[#ddd] px-1">
      任意
    </span>
  );
};

export default Badge;
