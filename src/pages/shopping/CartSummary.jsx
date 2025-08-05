function CartSummary({ bName, bHarga, i, cart }) {
  function removeItem() {
    cart((curr) => curr.filter((res) => res !== curr[i]));
  }

  return (
    <li key={i}
      className="flex gap-4 items-center"
    >
      <div>
        <h2>{bName}</h2>
        <p>{bHarga}</p>
      </div>
      <i className="nf nf-md-cart_minus bg-blue-100 p-2 text-xl rounded-full 
      hover:opacity-[.6] hover:cursor-pointer"
        onClick={removeItem}
      ></i>
    </li>
  )
}

export default CartSummary;