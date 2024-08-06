import Image from "next/image";
import Link from "next/link";

const productInfo = [
  {
    id: "WB46754",
    name: "Evan Williams 1783 Small Batch",
    imageUrl: "/evanWilliams.jpg",
    category: "Bourbon",
    distillery: "Heaven Hill Distilleries, Inc.",
    bottler: "Distillery Bottling",
    bottlingSerie: "No. 10 Brand - Small Batch",
    bottled: "1783s",
    caskType: "New White Oak Barrels",
    strength: "43.0 % Vol.",
    size: "700 ml",
    label: "Black Foil",
    addedOn: "28 nov 2013 1:39 pm",
  },
];
export default function ProductInfo() {
  return (
    <div className="w-full p-5">
      {productInfo.map((product) => (
        <div
          key={product.id}
          className="w-full flex items-center p-5 border border-sky-500 rounded-lg"
        >
          <div className="w-3/5 flex flex-col">
            <div className="w-full">
              <p className="px-5 py-1 text-left text-4xl flex-grow border-b-2">
                {product.name}
              </p>
            </div>
            <div className="w-full flex justify-start">
              {/* 상품 이미지 영역 */}
              <div className="relative w-2/5 h-80 my-3 flex-shrink-0 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="py-5 border"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* 상품 정보 영역 */}
              <div className="w-3/5 py-2 flex flex-col">
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">
                    Whiskybase ID
                  </p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.id}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Category</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.category}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Distillery</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.distillery}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Bottler</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.bottler}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">
                    Bottling serie
                  </p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.bottlingSerie}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Bottled</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.bottled}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Cask Type</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.caskType}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Strength</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.strength}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Size</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.size}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Label</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.label}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-48 px-5 text-base text-start">Added on</p>
                  <p className="w-80 px-5 text-base text-start font-bold">
                    {product.addedOn}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 상품 리뷰리스트 영역 */}
          {/* <div className="w-2/5 h-full bg-sky-500">test</div> */}
        </div>
      ))}
      <div className="w-full mt-3 text-end">
        <Link
          href={"/"}
          className="p-3 text-black border border-sky-500 hover:text-white hover:bg-sky-500 rounded"
        >
          목록가기
        </Link>
      </div>
    </div>
  );
}
