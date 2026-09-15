import type { GreekCase } from "@/data/content";

export const CASE_BG_CLASS: Record<GreekCase, string> = {
  nominative: "bg-blue-400 dark:bg-blue-700",
  genitive: "bg-green-400 dark:bg-green-700",
  dative: "bg-pink-400 dark:bg-pink-700",
  accusative: "bg-yellow-400 dark:bg-yellow-700",
  vocative: "bg-fuchsia-400 dark:bg-fuchsia-700",
};

export const CASE_TEXT_CLASS: Record<GreekCase, string> = {
  nominative: "text-blue-700",
  genitive: "text-green-700",
  dative: "text-pink-700",
  accusative: "text-yellow-700",
  vocative: "text-fuchsia-700",
};

export const CASE_FULL_NAME: Record<GreekCase, string> = {
  nominative: "Називний",
  genitive: "Родовий",
  dative: "Давальний",
  accusative: "Знахідний",
  vocative: "Кличний",
};
