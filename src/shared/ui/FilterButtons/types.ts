import type { IOption } from "@shared/constants";

export interface IFilterButtonProps {
  options: IOption[];
  value: string;
  onClick: (value: string) => void;
  className?: string;
}
