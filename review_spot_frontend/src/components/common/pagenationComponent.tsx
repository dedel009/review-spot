import { PaginationProps } from "@/types/types"; // 타입 임포트

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex list-none">
        {pageNumbers.map((number) => (
          <li key={number} className="px-2">
            <button
              onClick={() => paginate(number)}
              className={`${
                number === currentPage ? "text-blue-500" : "text-gray-500"
              } hover:text-blue-700`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
