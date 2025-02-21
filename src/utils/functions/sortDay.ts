export const sortDays = (data: { day: string; prev_week: number; today: number }[]) => {
    const dayOrder: { [key: string]: number } = {
        "Senin": 1,
        "Selasa": 2,
        "Rabu": 3,
        "Kamis": 4,
        "Jumat": 5,
        "Sabtu": 6,
        "Minggu": 7
    };

    return data.sort((a, b) => (dayOrder[a.day] || 0) - (dayOrder[b.day] || 0));
};