"use client";

import Image from "next/image";
import { ContentItem } from "@/types/content";

interface RoundCardProps {
  item: ContentItem;
  className?: string;
}

export const RoundCard = ({
  item,
  className = "round-card",
}: RoundCardProps) => {
  return (
    <a
      href={item.cardLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-category={item.dataCategory}
    >
      <div className="round-image">
        <Image
          src={item.cardImage.imageSrc}
          alt={item.cardImage.imageAlt}
          width={140}
          height={140}
          loading="lazy"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>
      <p dangerouslySetInnerHTML={{ __html: item.cardTitle }} />
    </a>
  );
};
