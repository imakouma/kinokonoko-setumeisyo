import type { CardColor } from "../types/manual";

export type CardStage = 1 | 2 | 3;

export const CARD_COLORS: CardColor[] = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
];

export const CARD_COLOR_LABELS: Record<CardColor, string> = {
  red: "赤",
  blue: "青",
  yellow: "黄",
  green: "緑",
  purple: "紫",
};

export const CARD_STAGE_LABELS: Record<CardStage, string> = {
  1: "きのこ",
  2: "きのこのこ",
  3: "キングきのこ",
};

export function getCardImage(stage: CardStage, color: CardColor): string {
  return `/cards/level${stage}-${color}.png`;
}

export function getCardImageAlt(stage: CardStage, color: CardColor): string {
  return `${CARD_COLOR_LABELS[color]}の${CARD_STAGE_LABELS[stage]}`;
}

export const CARD_BACK_IMAGE = "/cards/card-back.png";
