// 상품 타입
export interface Product {
  id: number;
  name: string;
  imgPath: string;
  category: number;
  created: string;
  updated: string;
  is_active: boolean;
  product_info: ProductInfo;
}

// 상품 상세 정보 타입
export interface ProductInfo {
  product_id: number;
  img_path: string;
  product_name: string;
  category: {
    id: number;
    name: string;
    created: string;
    updated: string;
  }
  capacity: number;
  alcohol: number;
  area: string;
  distillery: string; // 증류소
  bottler: string; // 병입업자
  bottling_serie: string; // 병입 시리즈
  bottled: string; // 병입년도
  cask_type: string; // 오크통 유형

}
