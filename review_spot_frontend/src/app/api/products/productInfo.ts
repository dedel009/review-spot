"use server"

import { ProductInfo } from "@/types/types";

// : Promise<Product[]>
export const getProductInfo = async (params: any): Promise<ProductInfo> => {

    const url = `http://3.39.234.40/api/products/detail?product_id=${params.product_id}&category_id=${params.category_id}`;

    try {
        // 외부 API 호출
        const response = await fetch(url, {
            method: 'GET',
            // 헤더 추가 필요 시 여기에 추가
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // 응답이 OK가 아닌 경우
        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        // 응답 본문을 JSON으로 변환
        const data = await response.json();

        return data.data;  // 실제 API 응답에 맞게 조정
    } catch (error) {
        console.error('Error occurred while fetching products:', error);
        throw error;  // 에러를 던져서 호출한 쪽에서 처리할 수 있게 함
    }
}
