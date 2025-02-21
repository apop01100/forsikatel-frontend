import { MONTHS } from "../../constants/DATES";

const getCurrentMonth = (): string => {
  const monthNames: string[] = MONTHS;

  return monthNames[new Date().getMonth()]; // Get month name
};
  
const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const getCurrentDay = (): number => {
  return new Date().getDate();
};
  
const getCurrentWeekDates = (): number[] => {
    const today = new Date();
    const currentDay = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  
    // Set the start of the week (change offset if you want Monday to be the start)
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - currentDay + (currentDay === 0 ? -6 : 1)); // Monday as start
  
    // Generate the week's dates
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      return date.getDate(); 
    });
  };
  
export {
    getCurrentDay,
    getCurrentMonth,
    getCurrentYear,
    getCurrentWeekDates,
};
  