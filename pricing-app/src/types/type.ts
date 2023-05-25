import { BreakFast, DrinkType } from "./enum";

export interface Options {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

export type Coffee = {
  drinkType: string;
  size: string;
  topping: string;
  milk: string;
  chocolateSauce: number;
  quantity: number;
  cost: number;
};

export type BreakFastItem = {
  type: BreakFast;
  topping: string;
  quantity: number;
};
