export type Order = {
    id: string;
    cost: number;
    status: string;
    items: Item[] 
    
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