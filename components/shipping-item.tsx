export function ShippingItem() {
  return (
    <div className={`bg-white rounded-lg p-3 bg-card-gradient`}>
      <div className="p-2 border-b border-gray-500 flex items-center w-full justify-between">
        <div>
          <h2 className="text-white text-xs font-normal text-center">
            Valor frete:
          </h2>
        </div>
        <div>
          <p className="text-lg font-normal text-gray-200 text-center">
            R$12.489,00
          </p>
        </div>
      </div>

      <div className="p-2  border-gray-500 flex items-center w-full justify-between">
        <div>
          <h2 className="text-white text-xs font-normal text-center">
            Valor entrega :
          </h2>
        </div>
        <div>
          <p className="text-lg font-normal text-gray-200 text-center">
            R$9.847,48
          </p>
        </div>
      </div>
    </div>
  );
}
