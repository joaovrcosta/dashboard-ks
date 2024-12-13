export function DataFilter({ _, onDateChange }: any) {
  const calculateDate = (days: any) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - days);
    console.log(currentDate);
    return currentDate;
  };

  return (
    <div className="mb-4 flex space-x-4 items-center">
      <button
        onClick={() => onDateChange(new Date())}
        className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Hoje
      </button>
      <button
        onClick={() => onDateChange(calculateDate(7))}
        className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        7 Dias
      </button>
      <button
        onClick={() => onDateChange(calculateDate(15))}
        className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        15 Dias
      </button>
      <button
        onClick={() => onDateChange(calculateDate(30))}
        className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        30 Dias
      </button>
    </div>
  );
}
