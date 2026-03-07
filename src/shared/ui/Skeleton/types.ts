export type SkeletonVariant = "list" | "grid";
export type SkeletonSize = "small" | "medium" | "large";

export interface ISkeletonProps {
  variant?: SkeletonVariant;
  count?: number;
  size?: SkeletonSize;
  className?: string;
  itemClassName?: string;
  columns?: number;
}
