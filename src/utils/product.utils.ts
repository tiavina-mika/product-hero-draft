import { IProduct } from "../types/product.type";
import { ISelectOption } from "../types/app.type";

export const formatProductOptions = (products: IProduct[]): ISelectOption[] => {
  return products.map((product: IProduct) => ({
    value: product.objectId,
    label: product.name,
    icon: "😊"
  }));
};
