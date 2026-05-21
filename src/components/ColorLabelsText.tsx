import { COLOR_STYLES } from "../lib/colors";
import type { CardColor } from "../types/manual";

const COLOR_LABEL_TO_CARD: Record<string, CardColor> = {
  赤: "red",
  青: "blue",
  黄: "yellow",
  緑: "green",
  紫: "purple",
};

/** 「赤い」などの複合語は除き、単独の色名にカード色の文字色を付ける */
const COLOR_LABEL_PATTERN = /(赤|青|黄|緑|紫)(?![いう])/g;

type Props = {
  text: string;
};

export function ColorLabelsText({ text }: Props) {
  const parts = text.split(COLOR_LABEL_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        const color = COLOR_LABEL_TO_CARD[part];
        if (!color) {
          return <span key={index}>{part}</span>;
        }
        const styles = COLOR_STYLES[color];
        return (
          <span key={index} className={`font-semibold ${styles.text}`}>
            {part}
          </span>
        );
      })}
    </>
  );
}
