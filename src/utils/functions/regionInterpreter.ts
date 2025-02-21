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

export const regionInterpreter = (region: string) => {
    return Region[region] || "Unknown Region";
}