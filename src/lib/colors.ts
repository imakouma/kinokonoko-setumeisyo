import type { CardColor } from "../types/manual";

export const COLOR_STYLES: Record<
  CardColor,
  { dot: string; bg: string; border: string; text: string; emoji: string }
> = {
  red: {
    dot: "bg-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    emoji: "🔴",
  },
  blue: {
    dot: "bg-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    emoji: "🔵",
  },
  yellow: {
    dot: "bg-yellow-400",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-900",
    emoji: "🟡",
  },
  green: {
    dot: "bg-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    emoji: "🟢",
  },
  purple: {
    dot: "bg-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-800",
    emoji: "🟣",
  },
};

export function isCardColor(value: string): value is CardColor {
  return value in COLOR_STYLES;
}
