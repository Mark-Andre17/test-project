import React, { useId } from "react";

import type { CheckboxProps } from "@shared/ui/Checkbox/types";

import styles from "./Checkbox.module.css";

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = "",
  id: providedId,
  disabled,
  ...props
}) => {
  const generatedId = useId();
  const checkboxId = providedId || `checkbox-${generatedId}`;
  return (
    <label htmlFor={checkboxId} className={`${styles.checkbox} ${className}`}>
      <input type="checkbox" id={checkboxId} disabled={disabled} {...props} />
      <span className={styles.checkmark} />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};
