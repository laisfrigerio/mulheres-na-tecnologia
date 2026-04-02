import { CardItem } from "@/types/content";
import { resolveImagePath } from "@/lib/paths";

interface BlogCardProps {
  item: CardItem;
}

const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <a
      href={item.cardLink}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      data-category={item.dataCategory}
    >
      <div className="placeholder">
        {item.cardImage && (
          <img
            src={resolveImagePath(item.cardImage.imageSrc)}
            alt={item.cardImage.imageAlt}
            loading="lazy"
          />
        )}
      </div>
      <div className="card-body">
        {item.cardTag && <span className="tag">{item.cardTag}</span>}
        <h2>{item.cardTitle}</h2>
        {item.cardDescription && <p>{item.cardDescription}</p>}
        {item.cardMetaData && <div className="meta">{item.cardMetaData}</div>}
      </div>
    </a>
  );
};

export default BlogCard;
