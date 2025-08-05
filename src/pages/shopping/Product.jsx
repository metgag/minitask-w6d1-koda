function Product({ bName, bImg, bHarga, i, cart }) {
  function handleCart() {
    const item = {
      bName,
      bHarga,
      id: Math.floor(Math.random() * 1000) + 1
    };

    cart((curr) => {
      return [...curr, item];
    });
  }

  return (
    <li key={i}
      className="rounded-2xl p-6 flex flex-col justify-between shadow-md"
    >
      <img
        src={bImg}
        className="rounded-xl"
        alt="" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg">{bName}</h2>
          <p
            className="text-md">Rp. <span
              className="text-blue-900 font-semibold">
              {bHarga}</span></p>
        </div>
        <i
          onClick={handleCart}
          id={i}
          className="nf nf-md-cart_plus bg-blue-50 p-3 text-xl rounded-full hover:opacity-[.6] hover:cursor-pointer">
        </i>
      </div>
    </li>
  )
}

export default Product;
