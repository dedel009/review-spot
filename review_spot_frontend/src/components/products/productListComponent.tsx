"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../common/pagenationComponent";
import { Product } from "@/types/types";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("created");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchProducts = async () => {
    try {
      const query = new URLSearchParams({
        product_name: search,
        "category.name": category,
        sort,
      }).toString();

      const res = await fetch(`/lib/products?${query}`);
      const result = await res.json();
      setProducts(result.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination function
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchProducts();
  }, [search, category, sort, currentPage]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-end gap-4 p-5">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="양주">양주</option>
          <option value="소주">소주</option>
          <option value="막걸리">막걸리</option>
          <option value="술안주">술안주</option>
          <option value="맥주">맥주</option>
          {/* Add more categories as needed */}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="created">Sort by Created</option>
          <option value="price">Sort by Price</option>
          {/* Add more sorting options as needed */}
        </select>
      </div>
      <div className="grid grid-cols-3 w-full gap-5 p-5">
        {currentItems.map((product) => (
          <Link
            href={`/productInfo/${product.product_id}/${product.category.id}`}
            key={product.product_id}
          >
            <div className="h-full flex flex-row items-center border border-sky-500 rounded-lg overflow-hidden ease duration-300 hover:-translate-y-2 w-full">
              <div className="relative w-48 h-48 flex-shrink-0">
                <Image
                  src={product.img_path}
                  alt={product.product_name}
                  layout="fill"
                  objectFit="cover" // Adjust objectFit as needed
                  className="object-cover"
                />
              </div>
              <div className="w-full h-full py-5 flex flex-col justify-between items-start">
                <div className="flex">
                  <p className="px-5 text-left text-3xl flex-grow">
                    {product.product_name}
                  </p>
                </div>
                <div className="flex">
                  <p className="px-5 text-left text-base flex-grow">
                    알코올 : {product.alcohol}
                  </p>
                  <p className="px-5 text-left text-base flex-grow">
                    category : {product.category.name}
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
