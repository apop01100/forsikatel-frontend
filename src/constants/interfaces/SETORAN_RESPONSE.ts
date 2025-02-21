export interface HistoryItem {
    banyak_juz_dibaca: number;
    juz_terakhir: number;
    tanggal: string;
    total_khatam: string;
}

export interface ProgressChartData {
    last_7_days: Record<string, number>;
    prev_week: Record<string, number>;
}

export interface ProgressRecords {
    last_juz: number;
    total_juz: number;
    total_khatam: number;
}

export interface SetorNgajiResponse {
    history: HistoryItem[];
    total_progress: ProgressRecords;
    msg: string;
}