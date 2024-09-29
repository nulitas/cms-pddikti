import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import SortIcon from "./ui/SortIcon";

interface Column {
  label: string;
  key: string;
  sortable?: boolean;
}

interface TableProps {
  data: {
    [key: string]: string | number;
  }[];
  columns: Column[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    const sorted = [...sortedData].sort((a, b) => {
      if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-gray-200 bg-white text-sm table-auto">
        <thead className="h-12">
          <tr className="bg-primary-border text-neutral-100">
            <th className="px-2 py-2 text-center font-semibold text-neutral-100 rounded-tl-lg border-r-2 border-white">
              No
            </th>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left font-semibold text-neutral-100 border-r-2 border-white"
              >
                {column.sortable ? (
                  <div
                    className="flex justify-between items-center hover:cursor-pointer"
                    onClick={() => handleSort(column.key)}
                  >
                    <span>{column.label}</span>
                    <SortIcon
                      className={`ml-2 transition-transform duration-300 ${
                        sortConfig?.key === column.key &&
                        sortConfig.direction === "descending"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </div>
                ) : (
                  column.label
                )}
              </th>
            ))}
            <th className="px-4 py-2 text-left font-semibold text-neutral-100 rounded-tr-lg border-r-2 border-white">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td className="text-center px-4 py-2 text-gray-900">
                {index + 1}
              </td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-gray-700">
                  {row[column.key]}
                </td>
              ))}
              <td className="px-4 py-2 text-gray-700 flex items-center justify-center text-xl">
                <button>
                  <FaRegEdit className="text-neutral-100 w-6 h-6" />
                </button>
                <button>
                  <RiDeleteBin6Line className="text-danger-main w-6 h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
