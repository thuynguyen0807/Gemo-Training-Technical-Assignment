import { UUID } from "crypto";
import { BreakFast, DrinkType } from "./enum";

export interface Options {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

export type Item = {
  type: string;
  size?: string;
  topping: string;
  milk?: string;
  chocolateSauce?: number;
  quantity: number;
  cost: number;
};

export type Order = {
  _id?: string;
  cost: number;
  status: string;
  items: Item[];
  createdAt: Date;
  updatedAt: Date;
}

