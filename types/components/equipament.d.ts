export interface IEquipment {
    id: string;
    type: 'crane' | 'forklift';
    name: string;
    hour_count: number;
    src_img?: string;
}