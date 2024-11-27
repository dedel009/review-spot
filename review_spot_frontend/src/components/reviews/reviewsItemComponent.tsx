// ReviewsItemComponent.tsx
"use client";

import Image from "next/image";
import BarChart from "../charts/barChart";
import RadarChart from "../charts/radarChart";
import { ReviewsItemComponentProps } from "@/types/types";
import Link from "next/link";

export default function ReviewsItemComponent({
  item,
}: ReviewsItemComponentProps) {
  const {
    nickname,
    avg_score,
    nose_score,
    palate_score,
    finish_score,
    content,
    // created_at,
    product,
    aroma_profile, // aromaProfile를 받아서 사용
  } = item;

  // Stacked Bar 차트 데이터
  const barChartData = {
    labels: ["Nose", "Palate", "Finish"], // 축 라벨들
    datasets: [
      {
        label: "Score", // 차트의 레이블
        data: [nose_score, palate_score, finish_score], // 각 축에 대한 데이터
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ], // 각 막대의 배경 색상
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ], // 각 막대의 테두리 색상
        borderWidth: 1, // 차트 테두리 두께
      },
    ],
  };

  // 레이더 차트 데이터는 aromaProfile로부터 직접 가져옵니다.
  const radarChartData = {
    labels: aroma_profile?.labels || [], // aroma_profile이 없으면 빈 배열로 대체
    datasets: [
      {
        label: `${product.name} Aroma Profile`,
        data: aroma_profile?.scores || [], // aroma_profile이 없으면 빈 배열로 대체
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  return (
    <div className="flex flex-col p-4 mx-auto justify-center items-center w-full h-full transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
      <div className="flex flex-col md:flex-row space-x-4 w-full h-full">
        {/* 왼쪽 영역 */}
        <div className="flex flex-col basis-3/4 justify-start items-center bg-white w-full h-full">
          <h1>{`${nickname}님이 ${product.name}에 대해서 ${avg_score}를 주었습니다.`}</h1>
          {/* <p className="text-gray-300">{`${created_at}`}</p> */}
          <div className="flex flex-col md:flex-row justify-center items-start p-4">
            <p className="basis-2/3">{content}</p>
            <div className="flex basis-1/3 flex-col justify-center items-center w-full h-full">
              <div className="w-full h-full">
                <BarChart data={barChartData} max={100} />
              </div>
              <div className="w-full h-full">
                <RadarChart data={radarChartData} />
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <Link href={`/reviews/${item.review_id}`}>
          <div className="flex basis-1/4 bg-white w-full ">
            <div className="flex justify-center items-center w-full ">
              {product.imgPath ? (
                <Image
                  src={product.imgPath} // 이미지 경로
                  alt={product.name} // 대체 텍스트
                  width={200} // 너비
                  height={200} // 높이
                />
              ) : (
                <div className="w-32 h-32 bg-gray-300"></div>
              )}

              <div className="flex flex-col justify-center items-center">
                <p>{`Alcohol: ${product.product_info.alcohol}%`}</p>
                <p>{`Capacity: ${product.product_info.capacity}ml`}</p>
                <p>{`Area: ${product.product_info.area}`}</p>
                <p>{`Category: ${product.category}`}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
