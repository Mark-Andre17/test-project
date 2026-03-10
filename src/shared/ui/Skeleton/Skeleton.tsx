import React from "react";

import type { ISkeletonProps } from "@shared/ui/Skeleton/types";

import styles from "./Skeleton.module.css";

export const Skeleton: React.FC<ISkeletonProps> = ({
  variant = "list",
  count = 5,
  size = "medium",
  className = "",
  itemClassName = "",
  columns,
}) => {
  const items = Array.from({ length: count }, (_, i) => i);

  const containerClasses = [styles[variant], className].join(" ");

  const getItemClasses = () => {
    const base = variant === "list" ? styles.listItem : styles.gridItem;
    const sizeClass =
      styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`];
    return `${base} ${sizeClass} ${itemClassName}`.trim();
  };

  const gridStyles =
    variant === "grid" && columns
      ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
      : {};

  return (
    <div className={containerClasses} style={gridStyles}>
      {items.map((i) => (
        <div key={i} className={`${styles.skeleton} ${getItemClasses()}`} />
      ))}
    </div>
  );
};
