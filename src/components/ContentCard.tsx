"use client";

import Image from "next/image";
import { ContentItem } from "@/types/content";

interface ContentCardProps {
  item: ContentItem;
  className?: string;
}

export const ContentCard = ({ item, className = "card" }: ContentCardProps) => {
  return (
    <a
      href={item.cardLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-category={item.dataCategory}
    >
      <div className="placeholder">
        <Image
          src={item.cardImage.imageSrc}
          alt={item.cardImage.imageAlt}
          width={300}
          height={200}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="card-body">
        {item.cardTag && <span className="tag">{item.cardTag}</span>}

        <h2 dangerouslySetInnerHTML={{ __html: item.cardTitle }} />

        {item.cardDescription && <p>{item.cardDescription}</p>}

        {item.cardMetaData && <div className="meta">{item.cardMetaData}</div>}
      </div>
    </a>
  );
};
