export interface LatestActivity {
    entry_time: string; // ISO date string
    juz_read: string;
    name: string;
    region: string;
  }
  
export interface RegionProgress {
    jumlah_juz: number;
    jumlah_setoran: number;
    jumlah_user_per_region: number;
    region: string;
  }
  
export interface ProgressData {
    all_latest_activity: LatestActivity[];
    message: string;
    total_progress_region: RegionProgress[];
  }
  