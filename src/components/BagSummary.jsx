import { useSelector } from "react-redux";

const BagSummary = () => {
  const CONVENIENCE_FEES = 99;

  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);
  const finalBagitems = items.filter((item) => {
    return bagItems.includes(item.id);
  });
  let totalItems = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  finalBagitems.forEach((item) => {
    totalDiscount += item.original_price - item.current_price;
    totalMRP += item.original_price;
  });
  const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
