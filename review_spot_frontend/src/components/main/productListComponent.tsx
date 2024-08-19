import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Evan Williams",
    rating: "89.16 / 100 Overall rating",
    suggestion: "5",
    like: "15",
    imageUrl: "/evanWilliams.jpg",
  },
  {
    id: 2,
    name: "Evan Williams",
    rating: "89.16 / 100 Overall rating",
    suggestion: "5",
    like: "15",
    imageUrl: "/evanWilliams.jpg",
  },
  {
    id: 3,
    name: "Evan Williams",
    rating: "89.16 / 100 Overall rating",
    suggestion: "5",
    like: "15",
    imageUrl: "/evanWilliams.jpg",
  },
  {
    id: 4,
    name: "Evan Williams",
    rating: "89.16 / 100 Overall rating",
    suggestion: "5",
    like: "15",
    imageUrl: "/evanWilliams.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-5 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-row items-center border border-sky-500 rounded-lg overflow-hidden ease duration-300 hover:-translate-y-2 w-full"
        >
          <div className="relative w-48 h-48 flex-shrink-0">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="px-5 py-2 text-left text-3xl flex-grow">
              {product.name}
            </p>
            <p className="px-5 py-2 text-left text-base flex-grow">
              {product.rating}
            </p>
            <p className="px-5 py-2 text-left text-lg flex-grow">
              별점 : {product.suggestion} / 5 점
            </p>
            <div className="flex">
              <p className="px-5 py-2 text-left text-lg flex-grow">
                &hearts;&nbsp;{product.like}
              </p>
              <button
                type="button"
                className="text-sky-500 hover:bg-sky-500 hover:text-white rounded-lg text-lg px-5 py-2"
              >
                상세보기
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
