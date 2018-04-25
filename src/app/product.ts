import { Department } from './department';
export class Product {
    id: number;
    externalId: string;
    lastSoldDate: Date;
    shelfLife: string;
    department: Department;
    price: string;
    unit: string;
    cost: string;
    xfor: string;
}