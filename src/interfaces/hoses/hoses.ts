export interface IDefaultFilters {
  hose_name: string;
  status: string;
  count: string;
}

export interface IHoseDetails {
  id?: bigint,
  model: string,
  hose_size: string,
  DN_diameter: number,
  initial_price: number,
  market_price: number,
  working_pressure: number,
}

export const defaultFilters: IDefaultFilters = {
  hose_name: "",
  status: "",
  count: ""
};
