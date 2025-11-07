export type District = "Центр" | "Адлер" | "Сириус" | "Красная Поляна" | "Дагомыс";
export type Mode = "Посуточно" | "Долгосрок" | "Сезон";

export interface CalcInput {
  area: number;
  beds: number;
  district: District;
  mode: Mode;
}

const baseRate: Record<District, number> = {
  "Центр": 2100,
  "Адлер": 1900,
  "Сириус": 2000,
  "Красная Поляна": 2600,
  "Дагомыс": 1700,
};

const occ: Record<Mode, number> = {
  "Посуточно": 0.62,
  "Долгосрок": 0.95,
  "Сезон": 0.75,
};

export function calculate(input: CalcInput) {
  const adr = baseRate[input.district] * (1 + (input.beds - 2) * 0.07) * Math.min(1.3, 0.9 + input.area/100);
  const occupancy = occ[input.mode];
  const gross = adr * 30 * occupancy;
  const fee = gross * 0.30;
  const ops = Math.max(2500, gross * 0.08);
  const net = gross - fee - ops;
  return {
    adr: Math.round(adr),
    occupancy,
    gross: Math.round(gross),
    fee: Math.round(fee),
    ops: Math.round(ops),
    net: Math.round(net),
  };
}
