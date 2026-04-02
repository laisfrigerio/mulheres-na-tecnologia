import { CardItem } from "@/types/content";
import BlogCard from "./BlogCard";
import RoundCard from "./RoundCard";

interface ContentSectionProps {
  title?: string;
  items: CardItem[];
  sectionClassName?: string;
  listClassName?: string;
  id?: string;
  variant?: "blog" | "round";
}

const ContentSection = ({
  title,
  items,
  sectionClassName = "content-section container",
  listClassName = "blog-grid",
  id,
  variant = "blog",
}: ContentSectionProps) => {
  return (
    <section className={sectionClassName} id={id}>
      {title && (
        <div className="section-main-title">
          <h2>{title}</h2>
        </div>
      )}
      <div className={listClassName}>
        {items.map((item, index) =>
          variant === "round" ? (
            <RoundCard key={index} item={item} />
          ) : (
            <BlogCard key={index} item={item} />
          )
        )}
      </div>
    </section>
  );
};

export default ContentSection;
