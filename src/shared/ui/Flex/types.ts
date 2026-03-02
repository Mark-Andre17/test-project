type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type FlexAlign = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
type FlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  gap?: number | string;
  children?: React.ReactNode;
}
