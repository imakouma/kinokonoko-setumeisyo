export type ManualSection = {
  _id: string;
  slug: string;
  title: string;
  icon: string;
  order: number;
  paragraphs: string[];
  listItems?: string[];
  steps?: { title: string; body: string }[];
  subsections?: {
    title: string;
    body: string;
    listItems?: string[];
  }[];
};

export type CardEffect = {
  _id: string;
  stage: number;
  stageLabel: string;
  color: string;
  colorLabel: string;
  attribute: string;
  description: string;
  order: number;
};

export type CardColor = "red" | "blue" | "yellow" | "green" | "purple";
