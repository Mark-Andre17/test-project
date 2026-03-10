import type { IOption } from "@shared/constants/types";

export const filterOptions: IOption[] = [
  { label: "Все", value: "all" },
  { label: "Выполненные", value: "completed" },
  { label: "Невыполненные", value: "incomplete" },
];
export const API_BASE_URL = "https://json-placeholder.mock.beeceptor.com";
