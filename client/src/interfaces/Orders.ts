export interface OrderListProps {
    fulfilled: boolean
    createdAt: string
    shippedAt: string
    products: {
        title: string;
        price: number;
        description: string;
        pictures: string[];
    }[]
}

export interface OrderCardProps {
    title: string;
    price: number;
    description: string;
    pictures: string[];
    fulfilled: boolean;
    createdAt: string;
    shippedAt: string;
};
