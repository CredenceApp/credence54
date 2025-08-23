import { NavLink } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Transactions() {
  const commodities = [
    "rice",
    "beans",
    "ginger",
    "sesame",
    "maize",
    "cashew nuts",
    "hibiscus",
    "wheat",
    "soyabeans",
    "milet",
  ];

  const AvaerageMrktPrice = [
    {
      commodity: "Soyabeans",
      price: "NGN 870,000/Mt",
      percentage: "6.5%",
      icon: FaArrowUp,
    },
    {
      commodity: "Paddy Rice",
      price: "NGN 750,000/Mt",
      percentage: "12.5%",
      icon: FaArrowDown,
    },
  ];
  
  return (
    <section className="transaction_div bg-materialWhite mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-8">
        <div className="bg-materialWhite rounded-[7px] shadow-md p-4 w-full lg:w-[356px] min-h-[272px] md:h-auto">
          <h2 className="text-xl font-[700]">Popular Commodities</h2>
          <div className="flex flex-wrap gap-2 mt-6">
            {commodities?.map((items, index) => (
              <span
                key={index}
                className="bg-green100 py-[3px] px-[20px] rounded-[30px] text-green600 text-base"
              >
                {items}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-materialWhite rounded-[7px] shadow-md p-4 h-fit w-full">
          <h2 className="text-xl font-[700] text-grey900">Average Market Price</h2>
          <div>
            {AvaerageMrktPrice?.map((price, idx) => (
              <div key={idx} className="my-4">
                <p className="textbase text-secondary my-2 font-[700]">{price?.commodity}</p>
                <div className="flex items-baseline gap-1">
                  <h2 className="text-[25px] text-grey900 font-[700]">{price?.price}</h2>
                  <p className={`flex items-baseline gap-[2px] text-base ${price.percentage === '6.5%' ? 'text-green-500' : 'text-danger'}`}>
                    <span>{price?.percentage}</span>
                    <span><price.icon /></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transactions;
