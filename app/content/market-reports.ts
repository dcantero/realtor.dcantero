export interface MarketReport {
  town: string;
  /** Link to the PDF report, or null while one is still to be published. */
  url: string | null;
  /** ISO date the report was generated. */
  generatedAt: string | null;
}

const base = "https://staticaws.narrpr.com/Reports/accdab20/be86-4ed8-9b7b/47e71d0d35b3";

export const camdenCountyReports: MarketReport[] = [
  {
    town: "Blackwood",
    url: `${base}/Market-Activity-Report_Blackwood-New-Jersey_2024-01-16-23-37-19.pdf`,
    generatedAt: "2024-01-16",
  },
  {
    town: "Cherry Hill",
    url: `${base}/Market-Activity-Report_Cherry-Hill-New-Jersey_2024-01-17-06-41-54.pdf`,
    generatedAt: "2024-01-17",
  },
  {
    town: "Collingswood",
    url: `${base}/Market-Activity-Report_Collingswood-New-Jersey_2024-01-17-06-38-20.pdf`,
    generatedAt: "2024-01-17",
  },
  {
    town: "Pine Hill",
    url: `${base}/Market-Activity-Report_Pine-Hill-New-Jersey_2024-01-17-06-44-07.pdf`,
    generatedAt: "2024-01-17",
  },
  // TODO: the old site linked Sicklerville to the Blackwood PDF by mistake.
  { town: "Sicklerville", url: null, generatedAt: null },
];
