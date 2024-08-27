"use client";

// ReviewsListComponent.tsx
import { useState } from "react";
import { ReviewsListComponentProps } from "@/types/types"; // 타입 임포트
import ReviewsItemComponent from "./reviewsItemComponent";
import Pagination from "../common/pagenationComponent";

export default function ReviewsListComponent({
  items,
}: ReviewsListComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // 한 페이지에 보여줄 리뷰 수

  // 페이지에 따른 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 이동 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
      <article className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
        {currentItems.map((item) => (
          <ReviewsItemComponent key={item.id} item={item} />
        ))}
      </article>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
