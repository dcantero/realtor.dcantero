export interface County {
  name: string;
  /** True when only part of the county is served. */
  partial: boolean;
}

export const counties: County[] = [
  { name: "Atlantic", partial: true },
  { name: "Burlington", partial: false },
  { name: "Camden", partial: false },
  { name: "Cumberland", partial: false },
  { name: "Gloucester", partial: false },
  { name: "Mercer", partial: false },
  { name: "Ocean", partial: true },
  { name: "Salem", partial: false },
];
