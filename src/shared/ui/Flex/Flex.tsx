import type { FlexProps } from "@shared/ui/Flex/types";

import styles from "./Flex.module.css";

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  gap,
  className = "",
  style,
  children,
  ...props
}) => {
  const flexStyles: React.CSSProperties = {
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    gap:
      gap !== undefined
        ? typeof gap === "number"
          ? `${gap}px`
          : gap
        : undefined,
    ...style,
  };

  return (
    <div
      className={`${styles.flex} ${className}`}
      style={flexStyles}
      {...props}
    >
      {children}
    </div>
  );
};
