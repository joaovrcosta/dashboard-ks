interface CardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={`rounded p-4 ${className ?? ""}`}>
      <h2 className="lg:text-xl xl:text-xl md:text-md text-md font-normal  text-gray-200 text-left">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
