"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../common/pagenationComponent";
export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 2,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 3,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 4,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 5,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 6,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 7,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 8,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 9,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
    {
      id: 10,
      name: "Evan Williams",
      imgPath: "/evanWilliams.jpg",
      alcohol: 10,
      capacity: 5,
      area: "부산",
      category: "category",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 한 페이지에 보여줄 상품 수
  // 페이지에 따른 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 이동 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-3 w-full gap-5 p-5">
        {currentItems.map((product) => (
          <Link href={"/productInfo"} key={product.id}>
            <div
              key={product.id}
              className="h-full flex flex-row items-center border border-sky-500 rounded-lg overflow-hidden ease duration-300 hover:-translate-y-2 w-full"
            >
              <div className="relative w-48 h-48 flex-shrink-0">
                <Image
                  src={product.imgPath}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="w-full h-full py-5 flex flex-col justify-between items-start">
                <div className="flex">
                  <p className="px-5 text-left text-3xl flex-grow">
                    {product.name}
                  </p>
                </div>
                <div className="flex">
                  <p className="px-5 text-left text-base flex-grow">
                    알코올 : {product.alcohol}
                  </p>
                  <p className="px-5 text-left text-base flex-grow">
                    category : {product.category}
                  </p>
                </div>
                <div className="flex">
                  <p className="px-5 text-left text-base flex-grow">
                    capacity : {product.capacity}
                  </p>
                  <p className="px-5 text-left text-base flex-grow">
                    지역 : {product.area}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
