import React from "react";

import type { IButtonProps } from "@shared/ui/Button/types";

import styles from "./Button.module.css";

export const Button: React.FC<IButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
