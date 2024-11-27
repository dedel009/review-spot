// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const searchParams = url.searchParams;

        // 외부 API 호출
        const response = await fetch(`http://3.39.234.40/api/products/detail?${searchParams.toString()}`, {
            method: 'GET',
            // 헤더 추가 필요 시 여기에 추가
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.error();
    }
}
