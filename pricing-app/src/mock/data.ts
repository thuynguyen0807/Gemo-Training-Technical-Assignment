import Options from "@/types";
import {
  Topping,
  Size,
  DrinkType,
  BreakFast,
  Milk,
  SandwichTopping,
  BagelTopping,
} from "@/types/enum";
import { BreakFastItem, Coffee } from "@/types/type";

export const toppingOptions: Options[] = [
  { value: "none", label: Topping.None },
  { value: "whippedCream", label: Topping.WhippedCream },
];

export const sizeOptions: Options[] = [
  { value: "S", label: Size.S },
  { value: "M", label: Size.M },
  { value: "L", label: Size.L },
  { value: "XL", label: Size.XL },
];

export const sizeOptionsForHotDrink: Options[] = [
  { value: "S", label: Size.S },
  { value: "M", label: Size.M },
];

export const drinkTypes = [
  DrinkType.Hot,
  DrinkType.Cold,
  DrinkType.Blended,
  DrinkType.MilkTea,
];

export const breakfastItems = [BreakFast.Sandwich, BreakFast.Bagel];

export const milkOptions = [
  { value: Milk.None, label: Milk.None },
  { value: Milk.AlmondMilk, label: Milk.AlmondMilk },
  { value: Milk.WholeMilk, label: Milk.WholeMilk },
];

export const sandwichToppings = [
  { value: "egg", label: SandwichTopping.Egg },
  { value: "turkey", label: SandwichTopping.Turkey },
  { value: "none", label: SandwichTopping.None },
];

export const bagelToppings = [
  { value: "butter", label: BagelTopping.Butter },
  { value: "creamCheese", label: BagelTopping.CreamCheese },
  { value: "none", label: BagelTopping.None },
];

export const defaultBreakfastItem: BreakFastItem = {
    type: BreakFast.Sandwich,
    topping: SandwichTopping.None,
    quantity: 1,
  };
  

  export const defaultCoffee: Coffee = {
    drinkType: DrinkType.Hot,
    size: Size.S,
    milk: Milk.None,
    chocolateSauce: 0,
    quantity: 1,
    topping: Topping.None,
  };