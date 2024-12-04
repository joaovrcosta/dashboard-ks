interface CardProps {
  titles?: { label: string; value: React.ReactNode }[];
  children?: React.ReactNode;
  className?: string;
}

export function DashbordCard({ titles, children, className }: CardProps) {
  return (
    <div className={`bg-white rounded ${className ?? ""}`}>
      {titles?.map((item, index) => (
        <div
          key={index}
          className={`p-2 border-b border-gray-500 ${
            index === titles.length - 1 ? "border-none" : ""
          }`}
        >
          <h2 className="text-white text-xs font-normal text-center">
            {item.label}
          </h2>
          <p className="text-lg font-normal text-gray-200 text-center">
            {item.value}
          </p>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
