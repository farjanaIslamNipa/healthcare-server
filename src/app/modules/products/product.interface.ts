import {ObjectId} from "mongoose";

export type TProduct = {
  title: string;
  category: ObjectId;
  image: string;
  price: number;
  isFlashSale?: boolean;
  isTrending?: boolean;
  rating?: number;
  description: string;
  isDeleted?: boolean;
}

