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
  alcohol: number;
  capacity: number;
  area: string;
  distillery: string; // 증류소
  bottler: string; // 병입업자
  bottling_serie: string; // 병입 시리즈
  bottled: string; // 병입년도
  cask_type: string; // 오크통 유형
}
// 아로마 프로필 타입
export interface AromaProfile {
  labels: string[];
  scores: number[];
}

// 리뷰 타입
export interface ReviewItem {
  review_id: number;
  nickname: string;
  avg_score: number;
  nose_score: number;
  palate_score: number;
  finish_score: number;
  content: string;
  // created_at: string;
  product: Product;
  aroma_profile: AromaProfile;
}

// 리뷰 폼 데이터 타입
export interface ReviewFormData {
  product_id: number;
  nickname: string;
  nose_score: number;
  palate_score: number;
  finish_score: number;
  content: string;
  aroma_profile: AromaProfile;
}

// 리뷰 아이템 컴포넌트 프롭스
export interface ReviewsItemComponentProps {
  item: ReviewItem;
}

// 레이더 차트 데이터 타입
export interface RadarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
  }[];
}

// 리뷰 데이터에서 레이더 차트 데이터를 추출하는 함수
export interface WhiskyRadarChartProps {
  data: RadarChartData;
}

// 페이지네이션 컴포넌트 프롭스
export interface PaginationProps {
  items_per_page: number;
  total_items: number;
  paginate: (page_number: number) => void;
  current_page: number;
}
