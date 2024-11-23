"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // useSearchParams 추가
import { ReviewItem } from "@/types/types";
import ReviewsItemComponent from "@/components/reviews/reviewsItemComponent";
import Pagination from "@/components/common/pagenationComponent";

export default function ReviewsPage() {
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10; // 페이지당 보여줄 항목 수

  const router = useRouter();
  const searchParams = useSearchParams(); // URL의 쿼리 파라미터를 가져옴

  // searchParams로부터 page 쿼리 파라미터를 가져오고, 없으면 1로 설정
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // 페이지 변경에 따른 데이터 가져오기
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `/api/reviews/get_list?pageNum=${currentPage}&display=${itemsPerPage}`
        );

        if (res.ok) {
          const data = await res.json();
          console.log("Fetched reviews:", data);
          if (data && Array.isArray(data.data)) {
            setItems(data.data);
            setTotalItems(data.total_item);
          } else {
            console.error("API 응답 데이터 형식이 올바르지 않습니다.");
          }
        } else {
          console.error("API 요청 실패:", res.status);
        }
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchReviews();
  }, [currentPage]); // currentPage가 변경될 때마다 API 호출

  // 페이지네이션 핸들러 (페이지 변경 시 URL을 업데이트하고 상태도 변경)
  const handlePageChange = (newPage: number) => {
    router.push(`/reviews?page=${newPage}`); // URL을 동기화하여 페이지 번호 반영
  };

  return (
    <main className="container-xl">
      <section className="p-8 flex flex-col space-y-20">
        {items.length === 0 ? (
          <div className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
            <h2 className="text-2xl font-bold text-gray-800">
              No reviews found
            </h2>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
            <article className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
              {items.map((item) => (
                <ReviewsItemComponent key={item.review_id} item={item} />
              ))}
            </article>
            <Pagination
              items_per_page={itemsPerPage}
              total_items={totalItems}
              paginate={handlePageChange} // handlePageChange를 paginate로 전달
              current_page={currentPage}
            />
          </div>
        )}
      </section>
    </main>
  );
}
