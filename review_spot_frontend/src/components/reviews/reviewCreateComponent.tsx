"use client";

import { useState } from "react";
import { ReviewItem, Product, ReviewFormData } from "@/types/types";
import RadarChart from "../charts/radarChart";

// 제품 옵션 데이터 (id와 name만 포함)
const productOptions: { id: number; name: string }[] = [
  {
    id: 1,
    name: "스프링뱅크 10",
  },
  {
    id: 2,
    name: "와일드터키 레어브리드",
  },
];

const fruitAromas = [
  "라임",
  "레몬",
  "자몽",
  "귤",
  "오렌지 껍질",
  "구아바",
  "멜론",
  "망고",
  "파인애플",
  "바나나",
  "배",
  "풋사과",
  "사과",
  "복숭아",
  "체리",
  "딸기",
  "블랙 커런트",
  "블랙베리",
  "건자두",
  "무화과",
  "살구",
];

const flowerAromas = [
  "오렌지 꽃",
  "장미",
  "히스",
  "제라늄",
  "라벤더",
  "제비꽃",
];

const grassAromas = [
  "갓 깍은 잔디",
  "양치류",
  "민트",
  "유칼립투스",
  "향나무",
  "블랙 커런트 잎",
  "월계수",
  "건초",
];

const grainAromas = [
  "감자",
  "맥아",
  "쿠키",
  "옥수수",
  "토스트",
  "초콜렛",
  "커피",
  "감초",
  "빵",
  "소시지",
  "미트 소스",
  "흑설탕",
];

const esterAromas = [
  "물고기",
  "요오드",
  "해초",
  "해산물",
  "부싯돌",
  "석유",
  "고무",
  "타르",
  "베이컨",
  "올드 붕대",
  "약향",
  "나무 이끼",
  "흙 냄새",
  "이탄",
  "연기",
];

const oakAromas = [
  "캐러멜",
  "꿀",
  "바닐라",
  "코코넛",
  "아몬드",
  "헤이즐넛",
  "호두",
  "떡갈나무",
  "백단목",
  "백향목",
  "솔향",
  "아니스",
  "생강",
  "후추",
  "육두구",
  "고수 씨앗",
  "정향",
  "계피",
  "체리",
  "마데이라",
  "셰리",
  "포트",
  "페드로 히메네즈",
];

export default function ReviewCreateComponent() {
  const [review, setReview] = useState<ReviewFormData>({
    product_id: 0,
    nickname: "",
    nose_score: 0,
    palate_score: 0,
    finish_score: 0,
    content: "",
    aroma_profile: {
      labels: [],
      scores: [] as number[],
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProductId = parseInt(e.target.value, 10);

    setReview((prevReview) => ({
      ...prevReview,
      product_id: selectedProductId, // 제품 ID를 폼 데이터에 추가
    }));
    console.log("선택한 제품 ID:", selectedProductId);
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: parseInt(value, 10),
    }));
  };

  const handleAromaChange = (index: number, value: number) => {
    setReview((prevReview) => {
      const newAromaData = [...(prevReview.aroma_profile?.scores || [])];
      newAromaData[index] = value;

      return {
        ...prevReview,
        aroma_profile: {
          ...prevReview.aroma_profile,
          scores: newAromaData,
        },
      };
    });
  };

  const handleAromaCheckboxChange = (label: string, checked: boolean) => {
    setReview((prevReview) => {
      let newLabels = [...prevReview.aroma_profile.labels];
      let newScores = [...prevReview.aroma_profile.scores]; // 'scores'로 변경

      if (checked) {
        if (newLabels.length >= 10) {
          alert("최대 10개의 아로마만 선택할 수 있습니다.");
          return prevReview;
        }
        newLabels.push(label);
        newScores.push(0); // 새로운 아로마 항목 추가 시 기본 점수는 0
      } else {
        const index = newLabels.indexOf(label);
        if (index > -1) {
          newLabels.splice(index, 1);
          newScores.splice(index, 1); // 해당 아로마와 그 점수 제거
        }
      }

      return {
        ...prevReview,
        aroma_profile: {
          labels: newLabels,
          scores: newScores, // 'scores'로 변경
        },
      };
    });
  };

  const radarChartData = {
    labels: review.aroma_profile?.labels || [],
    datasets: [
      {
        label: "Aroma Profile",
        data: review.aroma_profile?.scores || [],
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
      },
    ],
  };

  // API로 리뷰 데이터를 전송하는 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/reviews/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review), // 리뷰 데이터를 JSON 형식으로 변환하여 전송
      });

      if (response.ok) {
        const data = await response.json();
        console.log("리뷰 제출 성공:", data);
      } else {
        console.error("리뷰 제출 실패:", response.status);
      }
    } catch (error) {
      console.error("리뷰 제출 중 오류 발생:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">리뷰 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            닉네임
          </label>
          <input
            type="text"
            name="nickname"
            value={review.nickname || ""}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            제품명
          </label>
          <select
            name="product_id"
            value={review.product_id || 0}
            onChange={handleProductChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="" disabled>
              제품을 선택하세요
            </option>
            {productOptions.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            노즈 점수
          </label>
          <input
            type="number"
            name="nose_score"
            value={review.nose_score || 0}
            onChange={handleScoreChange}
            className="mt-1 p-2 w-full border rounded"
            required
            min={0}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            팔레트 점수
          </label>
          <input
            type="number"
            name="palate_score"
            value={review.palate_score || 0}
            onChange={handleScoreChange}
            className="mt-1 p-2 w-full border rounded"
            required
            min={0}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            피니시 점수
          </label>
          <input
            type="number"
            name="finish_score"
            value={review.finish_score || 0}
            onChange={handleScoreChange}
            className="mt-1 p-2 w-full border rounded"
            required
            min={0}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            리뷰 내용
          </label>
          <textarea
            name="content"
            value={review.content || ""}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows={4}
            required
          />
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">아로마 선택</h2>
          <h3 className="text-sm font-semibold mb-2">과일향</h3>
          {fruitAromas.map((aroma) => (
            <div key={aroma} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aroma}
                  checked={
                    review.aroma_profile?.labels.includes(aroma) || false
                  }
                  onChange={(e) =>
                    handleAromaCheckboxChange(aroma, e.target.checked)
                  }
                  className="form-checkbox"
                />
                <span className="ml-2">{aroma}</span>
              </label>
            </div>
          ))}
          <hr />
          <h3 className="text-sm font-semibold mb-2">꽃향</h3>
          {flowerAromas.map((aroma) => (
            <div key={aroma} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aroma}
                  checked={
                    review.aroma_profile?.labels.includes(aroma) || false
                  }
                  onChange={(e) =>
                    handleAromaCheckboxChange(aroma, e.target.checked)
                  }
                  className="form-checkbox"
                />
                <span className="ml-2">{aroma}</span>
              </label>
            </div>
          ))}
          <hr />
          <h3 className="text-sm font-semibold mb-2">풀향</h3>
          {grassAromas.map((aroma) => (
            <div key={aroma} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aroma}
                  checked={
                    review.aroma_profile?.labels.includes(aroma) || false
                  }
                  onChange={(e) =>
                    handleAromaCheckboxChange(aroma, e.target.checked)
                  }
                  className="form-checkbox"
                />
                <span className="ml-2">{aroma}</span>
              </label>
            </div>
          ))}
          <hr />
          <h3 className="text-sm font-semibold mb-2">이탄향</h3>
          {esterAromas.map((aroma) => (
            <div key={aroma} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aroma}
                  checked={
                    review.aroma_profile?.labels.includes(aroma) || false
                  }
                  onChange={(e) =>
                    handleAromaCheckboxChange(aroma, e.target.checked)
                  }
                  className="form-checkbox"
                />
                <span className="ml-2">{aroma}</span>
              </label>
            </div>
          ))}
          <hr />
          <h3 className="text-sm font-semibold mb-2">곡물향</h3>
          {grainAromas.map((aroma) => (
            <div key={aroma} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aroma}
                  checked={
                    review.aroma_profile?.labels.includes(aroma) || false
                  }
                  onChange={(e) =>
                    handleAromaCheckboxChange(aroma, e.target.checked)
                  }
                  className="form-checkbox"
                />
                <span className="ml-2">{aroma}</span>
              </label>
            </div>
          ))}
          <hr />
          <h3 className="text-sm font-semibold mb-2">오크향</h3>
          {oakAromas.map((aroma) => (
            <div key={aroma} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={aroma}
                  checked={
                    review.aroma_profile?.labels.includes(aroma) || false
                  }
                  onChange={(e) =>
                    handleAromaCheckboxChange(aroma, e.target.checked)
                  }
                  className="form-checkbox"
                />
                <span className="ml-2">{aroma}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">아로마 프로필</h2>
          {review.aroma_profile?.labels.map((label, index) => (
            <div key={label} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {label} 점수: {review.aroma_profile?.scores[index] || 0}
              </label>
              <input
                type="range"
                name={`aroma-${label}`}
                value={review.aroma_profile?.scores[index] || 0}
                onChange={(e) =>
                  handleAromaChange(index, parseInt(e.target.value, 10))
                }
                className="mt-1 w-full"
                min={0}
                max={100}
              />
            </div>
          ))}
        </div>

        {/* 여기에 기존 입력 필드 코드 추가 */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
        >
          리뷰 제출
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">아로마 프로필 미리보기</h2>
        <RadarChart data={radarChartData} />
      </div>
    </div>
  );
}
