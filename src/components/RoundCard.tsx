import { CardItem } from "@/types/content";
import { resolveImagePath } from "@/lib/paths";

interface RoundCardProps {
  item: CardItem;
}

const RoundCard = ({ item }: RoundCardProps) => {
  return (
    <a
      href={item.cardLink}
      target="_blank"
      rel="noopener noreferrer"
      className="round-card"
      data-category={item.dataCategory}
    >
      <div className="round-image">
        {item.cardImage && (
          <img
            src={resolveImagePath(item.cardImage.imageSrc)}
            alt={item.cardImage.imageAlt}
            loading="lazy"
          />
        )}
      </div>
      <p dangerouslySetInnerHTML={{ __html: item.cardTitle }} />
    </a>
  );
};

export default RoundCard;
