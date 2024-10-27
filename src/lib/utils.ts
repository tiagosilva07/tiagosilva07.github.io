import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateTime (start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();
  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    );
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (days) parts.push(`${days} day${days > 1 ? "s" : ""}`);

  return parts.join(", ") || "No difference";
};
