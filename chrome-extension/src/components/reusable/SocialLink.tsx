import React from "react";

interface Props {
  icon: string;
  alt: string;
}

export default function SocialLink({ icon, alt }: Props) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full bg-[#171F2F]"
    >
      <img src={icon} alt={alt} />
    </a>
  );
}
