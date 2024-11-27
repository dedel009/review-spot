"use client";
import { ProductInfo } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductInfo({
  params,
}: {
  params: { product_id: number; category_id: number };
}) {
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    product_id: 0,
    img_path: "",
    product_name: "",
    category: {
      id: 0,
      name: "",
      created: "",
      updated: "",
    },
    capacity: 0,
    alcohol: 0,
    area: "",
    distillery: "",
    bottler: "",
    bottling_serie: "",
    bottled: "",
    cask_type: "",
  });

  const getProductDetail = async () => {
    try {
      const query =
        "product_id=" +
        params.product_id +
        "&" +
        "category_id=" +
        params.category_id;
      const res = await fetch(`/lib/productInfo?${query}`);
      const result = await res.json();
      setProductInfo(result.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="w-full p-5">
      <div
        key={productInfo.product_id}
        className="w-full flex items-center p-5 border border-sky-500 rounded-lg"
      >
        <div className="w-3/5 flex flex-col">
          <div className="w-full">
            <p className="px-5 py-1 text-left text-4xl flex-grow border-b-2">
              {productInfo.product_name}
            </p>
          </div>
          <div className="w-full flex justify-start">
            {/* 상품 이미지 영역 */}
            <div className="relative w-2/5 h-80 my-3 flex-shrink-0 overflow-hidden">
              <Image
                src={productInfo.img_path || ""}
                alt={productInfo.product_name}
                className="py-5 border"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* 상품 정보 영역 */}
            <div className="w-3/5 py-2 flex flex-col">
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Whiskybase ID</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.product_id}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Category</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.category.name}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Distillery</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.distillery}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Bottler</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.bottler}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Bottling serie</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.bottling_serie}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Bottled</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.bottled}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Cask Type</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.cask_type}
                </p>
              </div>
              {/* <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Strength</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.strength}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Size</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.size}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Label</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.label}
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-48 px-5 text-base text-start">Added on</p>
                <p className="w-80 px-5 text-base text-start font-bold">
                  {productInfo.addedOn}
                </p>
              </div> */}
            </div>
          </div>
        </div>
        {/* 상품 리뷰리스트 영역 */}
        {/* <div className="w-2/5 h-full bg-sky-500">test</div> */}
      </div>
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
