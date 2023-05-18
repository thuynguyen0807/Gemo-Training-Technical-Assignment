import { BreakFast, DrinkType } from "./enum";

export interface Options {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

export type Coffee = {
  drinkType: DrinkType;
  size: string;
  topping: string;
  milk: string;
  chocolateSauce: number;
  quantity: number;
};

export type BreakFastItem = {
  type: BreakFast;
  topping: string;
  quantity: number;
};
