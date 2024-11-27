import ProductInfo from "@/components/products/productInfoComponent";

export default function Page({
  params,
}: {
  params: { product_id: number; category_id: number };
}) {
  return (
    <main className="container-xl">
      <section className="p-8 flex flex-col space-y-20">
        <article className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
          <ProductInfo params={params} />
        </article>
      </section>
    </main>
  );
}
