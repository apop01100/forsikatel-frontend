
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

export interface Hadist{
    hadits: string;
    source: string
}

export interface ProgressData {
    region: string;
    total_users_setor: number;
    total_users_region: number;
}

export interface ActivityStatistics {
    progress_data: ProgressData[]
    stars: string[];
    user_region: string;
}

export interface DashboardResponse {
    hadits: Hadist
    name_husband: string
    kalender: Calendar
    last_juz: number
    latest_activity: LatestActivity[]
    message: string
    time_in_day: string
    today_report_region: ActivityStatistics
    top_region: TopRegion[]
}