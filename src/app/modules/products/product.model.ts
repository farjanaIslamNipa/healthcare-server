import { Schema, model } from "mongoose";
import { TProduct} from "./product.interface";

const productSchema = new Schema<TProduct>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true
  },
  image: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  isFlashSale: {
    type: Boolean,
    default: false
  },
  isTrending: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});



export const Product =  model<TProduct>('Product', productSchema)