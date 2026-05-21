import type { CardColor } from "../types/manual";
import {
  getCardImage,
  getCardImageAlt,
  type CardStage,
} from "../data/cardImages";

type Props = {
  stage: CardStage;
  color: CardColor;
  className?: string;
};

export function CardImage({ stage, color, className = "" }: Props) {
  return (
    <img
      src={getCardImage(stage, color)}
      alt={getCardImageAlt(stage, color)}
      className={`object-contain shadow-md ring-1 ring-stone-200/80 ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
