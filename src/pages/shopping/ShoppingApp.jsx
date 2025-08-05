import { useState } from "react";
import Product from "./Product";
import CartSummary from "./CartSummary";

function ShoppingApp() {
  const [produk,] = useState([
    { bName: "Mi inDoni", bHarga: 4800, bImg: "https://www.indomie.com/uploads/product/indomie-mi-goreng-special_detail_094906814.png" },
    { bName: "Gudang Ganam", bHarga: 28000, bImg: "https://image.dailymartazzahra.com/s3/productimages/webp/co37129/p835412/w600-h600/17561e84-3a4f-4a20-ac62-68c1ef5fa41b.jpg" },
    { bName: "Bukan kaleng2", bHarga: 11000, bImg: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-17682496/abc_abc_sarden_saus_extra_pedas_155_g_full01_bg1fd99x.jpg" },
    { bName: "Gula-ka", bHarga: 18500, bImg: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0407196/gulaku_gulaku-premium--1-kg-_full06.jpg" },
    { bName: "Minyak filem", bHarga: 39500, bImg: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-3377752/filma_surabaya_-_filma_minyak_goreng_8992826111089_pouch_2_l_full01_rmyy1pxy.jpg" },
    { bName: "Energan", bHarga: 18000, bImg: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-32942364/energen_energen_sereal_rasa_coklat_-34_g-_10_pcs-_renceng-_full01_nv472t9.jpg" },
  ]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <div>
        <h1
          className="text-xl">Product</h1>
        <ul className="grid grid-cols-4 gap-4">
          {produk.map((e, i) =>
            <Product
              key={i}
              bName={e.bName}
              bImg={e.bImg}
              bHarga={e.bHarga}
              cart={setCart}
            />)}
        </ul>
      </div>

      <div>
        <h1
          className="text-xl">Cart</h1>
        <ol className="flex gap-4 flex-wrap">
          {cart.length > 0 ? (
            cart.map((e, i) => {
              return <CartSummary
                key={i}
                i={i}
                bName={e.bName}
                bHarga={e.bHarga}
                cart={setCart} />
            })
          ) : (<p>Cart masih kosong</p>)}
        </ol>
      </div>
    </>
  )
}

export default ShoppingApp
