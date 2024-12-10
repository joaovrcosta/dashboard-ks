interface CardProps {
  titles?: { label: string; value: React.ReactNode }[];
  children?: React.ReactNode;
  className?: string;
  itemClassName?: string; // Classe opcional para os itens
}

export function DashboardCard({
  titles,
  children,
  className,
  itemClassName,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded flex flex-col xl:flex-row lg:flex-row md:flex-row ${
        className ?? ""
      }`}
    >
      {titles?.map((item, index) => (
        <div
          key={index}
          className={`p-2 border-b border-gray-500 lg:py-4 xl:py-4 md:py-4 ${
            index === titles.length - 1
              ? "border-none"
              : "lg:border-r lg:border-b-0 xl:border-r xl:border-b-0 md:border-b-0 md:border-r border-b border-gray-500"
          } flex-1 ${itemClassName ?? ""}`}
        >
          <h2 className="text-white lg:text-md xl:text-md md:text-md text-xs font-normal text-center">
            {item.label}
          </h2>
          <p className="text-xl xl:text-2xl lg:text-2xl md:text-2xl font-normal text-gray-200 text-center">
            {item.value}
          </p>
        </div>
      ))}
      {/* <div className="flex-1 p-2">{children}</div> */}
    </div>
  );
}
