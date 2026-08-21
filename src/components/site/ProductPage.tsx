import { ProductPageSystem, ProductSystemData } from "./ProductPageSystem";

export type ProductPageProps = ProductSystemData;

export function ProductPage(props: ProductPageProps) {
  return <ProductPageSystem data={props} />;
}
