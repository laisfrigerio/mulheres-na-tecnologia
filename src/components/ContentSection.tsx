"use client";

import { ContentCard } from "./ContentCard";
import { RoundCard } from "./RoundCard";
import { ContentSection as ContentSectionType } from "@/types/content";

interface ContentSectionProps {
  section: ContentSectionType;
}

export const ContentSection = ({ section }: ContentSectionProps) => {
  const { title, htmlAttributes, items } = section;
  const isRoundList = htmlAttributes.classNameList === "round-list";

  return (
    <section
      id={htmlAttributes.idSection}
      className={htmlAttributes.classNameSection}
    >
      <div className="section-main-title">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>

      <div className={htmlAttributes.classNameList}>
        {items.map((item, index) =>
          isRoundList ? (
            <RoundCard
              key={index}
              item={item}
              className={htmlAttributes.classNameLink}
            />
          ) : (
            <ContentCard
              key={index}
              item={item}
              className={htmlAttributes.classNameLink}
            />
          ),
        )}
      </div>
    </section>
  );
};
