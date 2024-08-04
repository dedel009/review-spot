// 상품 타입
export interface Product {
  name: string;
  imgPath: string;
  alcohol: number;
  capacity: number;
  area: string;
  category: string;
}

// 아로마 프로필 타입
export interface AromaProfile {
  labels: string[];
  data: number[];
}

// 리뷰 타입
export interface ReviewItem {
  id: number;
  nickname: string;
  avgScore: number;
  noseScore: number;
  palateScore: number;
  finishScore: number;
  content: string;
  createdAt: string;
  product: Product;
  aromaProfile: AromaProfile;
}

// 리뷰 아이템 컴포넌트 프롭스
export interface ReviewsItemComponentProps {
  item: ReviewItem;
}

// 리뷰 리스트 컴포넌트 프롭스
export interface ReviewsListComponentProps {
  items: ReviewItem[];
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

// 리뷰 상세 페이지 프롭스
