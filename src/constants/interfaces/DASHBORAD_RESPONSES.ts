export interface LatestActivity {
    region: string;
    name: string;
    juz_read: number;
    entry_time: string | Date;
}

export interface Calendar {
    Senin: boolean;
    Selasa: boolean;
    Rabu: boolean;
    Kamis: boolean;
    Jumat: boolean;
    Sabtu: boolean;
    Minggu: boolean;
}

export interface TopRegion {
    region: string;
    total_juz: number;
}

export interface DashboardResponse {
    name_husband: string
    hadits: string
    kalender: Calendar
    last_juz: number
    latest_activity: LatestActivity[]
    message: string
    time_in_day: string
    today_report_region: []
    top_region: TopRegion[]
}