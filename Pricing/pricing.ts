enum DrinkType {
    Hot = 'Hot',
    Cold = 'Cold',
    Blended = 'Blended',
    MilkTea = 'Milk tea'
}

enum Size {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

enum BreakFast {
    Sandwich = 'Sandwich',
    Bagel = 'Bagel'
}

enum Milk {
    WholeMilk = 'Whole Milk',
    AlmondMilk = 'Almond Milk' 
}

enum Topping {
    None = 'None',
    whippedCream = 'whippedCream'
}

// Function calculated price 1

const calculatePrice1 = (drinkType: DrinkType, size: Size, isIncludeWhippedCream: boolean) => {
        let cost = 0;
        switch (drinkType) {
            case DrinkType.Hot:
            case DrinkType.Cold:
                cost += 2;
                break;
            case DrinkType.Blended:
                cost += 3;
            default:
                break;
        }
    
        switch(size) {
            case Size.M:
                cost += 0.5;
                break;
            case Size.L:
                if (drinkType === DrinkType.Hot) {
                    console.log('Hot drink does not include L'); 
                    return;
                }
                cost += 1;
                break;
            default:
                break;
        }
    
        if (isIncludeWhippedCream) {
            cost += 0.5;
        }
    
        return cost;
}

const totalCostOfCoffeeOrder1 = calculatePrice1(DrinkType.Cold, Size.M, true)
console.log("Total cost of a coffee order 1: ", totalCostOfCoffeeOrder1);

// Function calculated price 2

const calculatePrice2 = (drinkType: DrinkType, size: Size, isIncludeWhippedCream: boolean, milk: Milk) => {
    let cost = 0;
        switch (drinkType) {
            case DrinkType.Hot:
            case DrinkType.Cold:
                cost += 2;
                break;
            case DrinkType.Blended:
                cost += 3;
            default:
                break;
        }
    
        switch(size) {
            case Size.M:
                cost += 0.5;
                break;
            case Size.L:
                if (drinkType === DrinkType.Hot) {
                    console.log('Hot drink does not include L'); 
                    return;
                }
                cost += 1;
                break;
            default:
                break;
        }
    
        if (isIncludeWhippedCream) {
            cost += 0.5;
        }

        if (milk === Milk.AlmondMilk) {
            cost += 1.5;
        }
    
        return cost;
}

const totalCostOfCoffeeOrder2 = calculatePrice2(DrinkType.Cold, Size.M, true, Milk.AlmondMilk)
console.log("Total cost of a coffee order 2: ", totalCostOfCoffeeOrder2)

// Function calculated price 3

type CoffeeWithFullTopping = {
    drinkType: DrinkType;
    size: Size;
    isIncludeWhippedCream: boolean;
    milk?: Milk;
    chocolateSauce?: number;
    quantity: number;
}

const calculatePrice3 = (drinkType: DrinkType, size: Size, isIncludeWhippedCream: boolean, milk: Milk, chocolateSauce: number) => {
    let cost = 0;
    switch (drinkType) {
        case DrinkType.Hot:
        case DrinkType.Cold:
            cost += 2;
            break;
        case DrinkType.Blended:
            cost += 3;
        default:
            break;
    }

    switch(size) {
        case Size.M:
            cost += 0.5;
            break;
        case Size.L:
            if (drinkType === DrinkType.Hot) {
                console.log('Hot drink does not include L'); 
                return;
            }
            cost += 1;
            break;
        default:
            break;
    }

    if (isIncludeWhippedCream) {
        cost += 0.5;
    }

    if (milk === Milk.AlmondMilk) {
        cost += 1.5;
    }

    if (chocolateSauce) {
        if (drinkType === DrinkType.Hot && chocolateSauce <= 6) {
            const costedChocolateSauce = chocolateSauce - 2;
            cost += costedChocolateSauce > 1 ? costedChocolateSauce * 0.5 : 0;
        } else {
            console.log('Chocolate sauce is only included for hot drink maximum with 6 pumbs.');
            return;
        }
    }

    return cost;
}

const totalCostOfCoffeeOrder3 = calculatePrice3(DrinkType.Cold, Size.M, true, Milk.WholeMilk, 4)
console.log('Total cost of a coffee order 2: ', totalCostOfCoffeeOrder3);

// Function calculated price 4

type BreakFastItem = {
    type: BreakFast;
    isIncludeTopping: boolean;
    quantity: number;
}

const calculatePrice4 = (drinkType: DrinkType, size: Size, isIncludeWhippedCream: boolean, milk: Milk, chocolateSauce: number, type: BreakFast, isIncludeTopping: boolean) => {
    let costOfDrink = 0;
    switch (drinkType) {
        case DrinkType.Hot:
        case DrinkType.Cold:
            costOfDrink += 2;
            break;
        case DrinkType.Blended:
            costOfDrink += 3;
        default:
            break;
    }

    switch(size) {
        case Size.M:
            costOfDrink += 0.5;
            break;
        case Size.L:
            if (drinkType === DrinkType.Hot) {
                console.log('Hot drink does not include L'); 
                return;
            }
            costOfDrink += 1;
            break;
        default:
            break;
    }

    if (isIncludeWhippedCream) {
        costOfDrink += 0.5;
    }

    if (milk === Milk.AlmondMilk) {
        costOfDrink += 1.5;
    }

    if (chocolateSauce) {
        if (drinkType === DrinkType.Hot && chocolateSauce <= 6) {
            const costedChocolateSauce = chocolateSauce - 2;
            costOfDrink += costedChocolateSauce > 1 ? costedChocolateSauce * 0.5 : 0;
        } else {
            console.log('Chocolate sauce is only included for hot drink maximum with 6 pumbs.');
            return;
        }
    }

    let costOfBreakfast = 0;

    switch(type) {
        case BreakFast.Sandwich:
            if (isIncludeTopping) {
                costOfBreakfast += 4;
            } else {
                costOfBreakfast += 3;
            }
            break;
        default:
            if (isIncludeTopping) {
                costOfBreakfast += 3.5;
            } else {
                costOfBreakfast += 3;
            }
    }

    return costOfDrink + costOfBreakfast;
}

const totalCostOfOrder = calculatePrice4(DrinkType.Cold, Size.M, true, Milk.WholeMilk, 4, BreakFast.Sandwich, false)
console.log('Total cost of an order for breakfast: ', totalCostOfOrder);

// Function calculated price 5

const calculatePrice5 = (coffeeItems: CoffeeWithFullTopping[], breakfastItems: BreakFastItem[]) => {
    let totalCost = 0;

    coffeeItems.map((coffee) => {
        let cost = 0;
        switch (coffee.drinkType) {
            case DrinkType.Hot:
            case DrinkType.Cold:
                cost += 2;
                break;
            case DrinkType.Blended:
                cost += 3;
            case DrinkType.MilkTea:
                cost += 2.25;
                break;
            default:
                break;
        }
    
        switch(coffee.size) {
            case Size.M:
                cost += 0.5;
                break;
            case Size.L:
                if (coffee.drinkType === DrinkType.Hot) {
                    console.log('Hot drink does not include L'); 
                    return;
                }
                cost += 1;
                break;
            case Size.XL:
                if (coffee.drinkType === DrinkType.Hot) {
                    console.log('Hot drink does not include L'); 
                    return;
                }
                cost += 1.5;
                break;
            default:
                break;
        }
    
        if (coffee.isIncludeWhippedCream) {
            cost += 0.5;
        }
    
        if (coffee.milk && coffee.milk === Milk.AlmondMilk) {
            cost += 1.5;
        }
    
        if (coffee.chocolateSauce) {
            if (coffee.drinkType === DrinkType.Hot && coffee.chocolateSauce <= 6) {
                const costedChocolateSauce = coffee.chocolateSauce - 2;
                cost += costedChocolateSauce > 1 ? costedChocolateSauce * 0.5 : 0;
            } else {
                console.log('Chocolate sauce is only included for hot drink maximum with 6 pumbs.');
                return;
            }
        }

        totalCost = totalCost + cost*coffee.quantity;
        console.log(`${coffee.quantity} ${coffee.drinkType + 'drink,'} ${'size ' + coffee.size}${coffee.isIncludeWhippedCream && ', Whipped Cream, '}${coffee.milk}${coffee.chocolateSauce && coffee.chocolateSauce > 0 && ', and ' + coffee.chocolateSauce + ' chocolate sauce'} has cost: `, cost*coffee.quantity);
    })

    breakfastItems.map((item) => {
        let cost = 0;
        switch(item.type) {
            case BreakFast.Sandwich:
                if (item.isIncludeTopping) {
                    cost += 4;
                } else {
                    cost += 3;
                }
                break;
            default:
                if (item.isIncludeTopping) {
                    cost += 3.5;
                } else {
                    cost += 3;
                }
        }
        console.log(`${item.quantity} ${item.type} ${item.isIncludeTopping === true ? 'with topping' : 'without topping' }`, cost * item.quantity);
        totalCost = totalCost + cost * item.quantity;
    })

    const finalCost = totalCost + totalCost * 0.0725;

    return finalCost;
}

const totalCostOfOrderCalculatedFax = calculatePrice5([{drinkType: DrinkType.Hot, size: Size.M, isIncludeWhippedCream: true, milk: Milk.WholeMilk, chocolateSauce: 4, quantity: 2}], [{type: BreakFast.Sandwich, isIncludeTopping: false, quantity: 2}]);
console.log('Total cost of an order calculated fax: ', totalCostOfOrderCalculatedFax);