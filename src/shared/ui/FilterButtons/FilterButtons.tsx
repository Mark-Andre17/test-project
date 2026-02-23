import { Button } from "@shared/ui/Button";
import type { IFilterButtonProps } from "@shared/ui/FilterButtons/types";

import styles from "./FilterButtons.module.css";

export const FilterButtons: React.FC<IFilterButtonProps> = ({
  options,
  value,
  onClick,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {options.map((option) => (
        <Button
          key={option.value}
          variant={option.value === value ? "primary" : "outline"}
          onClick={() => onClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
