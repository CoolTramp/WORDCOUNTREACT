export type RenderText = (text: string | number) => void;

export type FORMAT_TYPE = {
  [key: string]: string;
};

type Meta = {
  [key: string]: number;
};

type Count = {
  [key: string]: { [key: string]: number };
};

export type Words = {
  meta: Meta;
  count: Count;
};
