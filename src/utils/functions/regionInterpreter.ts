const Region: Record<string, string>  = {
    ho: "Head Office",
    r1_sumatera: "R1-Sumatera ",
    r2_jakarta: "R2-Jakarta",
    r3_jabar: "R3-Jawa Barat",
    r4_jateng_jogja: "R4-Jateng DIY",
    r5_jatim_bali_nt: "R5-JBN",
    r6_kalimantan: "R6-Kalimantan",
    r7_kti: "R7-KTI",
}

const RegionMobile: Record<string, string>  = {
    ho: "HO",
    r1_sumatera: "R1 ",
    r2_jakarta: "R2",
    r3_jabar: "R3",
    r4_jateng_jogja: "R4",
    r5_jatim_bali_nt: "R5",
    r6_kalimantan: "R6",
    r7_kti: "R7",
}

export const regionInterpreter = (region: string, isMobile: boolean = false) => {
    
    if (isMobile) return RegionMobile[region] || "Unknown Region";
    
    return Region[region] || "Unknown Region";
}