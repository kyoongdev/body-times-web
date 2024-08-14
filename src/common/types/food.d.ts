export interface Food {
  id: string;
  name: string;
  carbo: number;
  protien: number;
  fat: number;
  calorie: number;
}

export type CreateFood = Omit<Food, "id">;

export type UpdateFood = Partial<CreateFood>;
