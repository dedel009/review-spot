import ProductList from "./productListComponent";

export default function BannerComponent() {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
      <ProductList />
    </article>
  );
}
