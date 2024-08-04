// ReviewsListComponent.tsx
import { ReviewsListComponentProps } from "@/types/types";
import ReviewsItemComponent from "./reviewsItemComponent";

export default function ReviewsListComponent({
  items,
}: ReviewsListComponentProps) {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center mx-auto p-4">
      {items.map((item) => (
        <ReviewsItemComponent key={item.id} item={item} />
      ))}
    </article>
  );
}
