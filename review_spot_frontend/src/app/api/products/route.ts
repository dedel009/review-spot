"use server"


import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        
        // 쿼리 파라미터 추출
        const query = searchParams.get('query');
        const display = searchParams.get('display');
        const category_id = searchParams.get('category_id');
        const sort = searchParams.get('sort');
        const page_num = searchParams.get('page_num');

        // 쿼리 파라미터 구성
        const queryParams = new URLSearchParams();
        if (query) queryParams.append('query', query);
        if (display) queryParams.append('display', display);
        if (category_id) queryParams.append('category_id', category_id);
        if (sort) queryParams.append('sort', sort);
        if (page_num) queryParams.append('page_num', page_num);

        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/?${queryParams.toString()}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        return NextResponse.json(data);

    } catch (error) {
        console.error('Error occurred while fetching products:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
