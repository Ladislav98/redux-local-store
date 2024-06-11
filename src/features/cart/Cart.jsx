import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

function Cart() {
  const username = useSelector((state) => state.user.username);

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold mt-7 ">Your cart, {username}</h2>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order Now
        </Button>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
