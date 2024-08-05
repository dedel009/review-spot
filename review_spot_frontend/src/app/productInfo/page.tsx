import ProductInfo from "@/components/main/productInfoComponent";

export default function Page() {
  return (
    <main className="container-xl">
      <section className="p-8 flex flex-col space-y-20">
        <article className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
          <ProductInfo />
        </article>
      </section>
    </main>
  );
}
