import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemsQuantity, increaseItemsQuantity } from "./cartSlice";

/* eslint-disable react/prop-types */
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function increaseQuantity() {
    dispatch(increaseItemsQuantity(pizzaId));
  }

  function decreaseQuantity() {
    dispatch(decreaseItemsQuantity(pizzaId));
  }

  return (
    <div className="flex gap-1 md:gap-2 items-center">
      <Button type="round" onClick={decreaseQuantity}>
        -
      </Button>
      <p className="font-sm">{currentQuantity}</p>
      <Button type="round" onClick={increaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
