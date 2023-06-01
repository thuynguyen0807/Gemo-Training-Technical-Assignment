import { BagelTopping, BreakFast, DrinkType, Milk, SandwichTopping, Size, Topping } from "@/types/enum";
import { Item } from "@/types/type";

export const calculateCost = (type: string, breakfastItem: Item): number => {
    let costOfBreakfast = 0;

    switch (type) {
      case BreakFast.Sandwich:
        if (breakfastItem.topping !== SandwichTopping.None) {
          costOfBreakfast += 4;
        } else {
          costOfBreakfast += 3;
        }
        break;
      default:
        if (breakfastItem.topping !== BagelTopping.None) {
          costOfBreakfast += 3.5;
        } else {
          costOfBreakfast += 3;
        }
    }

    return costOfBreakfast * breakfastItem.quantity;
  };

  export const calculatePrice3 = (type: string, coffee: Item): number => {
    let cost = 0;
    switch (coffee.type) {
      case DrinkType.Hot:
      case DrinkType.Cold:
        cost += 2;
        break;
      case DrinkType.Blended:
        cost += 3;
      default:
        break;
    }

    switch (coffee.size) {
      case Size.M:
        cost += 0.5;
        break;
      case Size.L:
        if (type === DrinkType.Hot) {
          return cost;
        }
        cost += 1;
        break;
      default:
        break;
    }

    if (coffee.topping === Topping.WhippedCream) {
      cost += 0.5;
    }

    if (coffee.milk === Milk.AlmondMilk) {
      cost += 1.5;
    }

    if (coffee.chocolateSauce) {
      if (type === DrinkType.Hot && coffee.chocolateSauce <= 6) {
        const costedChocolateSauce = coffee.chocolateSauce - 2;
        cost += costedChocolateSauce > 1 ? costedChocolateSauce * 0.5 : 0;
      } else {
        return cost;
      }
    }

    return cost * coffee.quantity;
  };