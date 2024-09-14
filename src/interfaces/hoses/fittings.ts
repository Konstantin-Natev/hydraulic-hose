export interface IDefaultFilters {
  hose_name: string;
  status: string;
  count: string;
}

export interface IHoseFittingsDetails {
  id?: bigint,
  fittings_for_model_hose: string,
  fittings_size: string,
  DN_diameter: number,
  initial_price: number,
  market_price: number,
  count_of_fittings: number,
}

export const defaultFilters: IDefaultFilters = {
  hose_name: "",
  status: "",
  count: ""
};
