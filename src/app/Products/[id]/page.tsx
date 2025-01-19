"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";


import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store";
import { addProduct, removeProduct, updateProduct } from '../../store/productSlice';


const ProductDetail: React.FC = () => {

  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const dataString = searchParams.get("data");
  const product = dataString ? JSON.parse(decodeURIComponent(dataString)) : null;

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = (product: any) => {
    dispatch(addProduct(product));

    console.log('product...', product)
    console.log('products...',  products)
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center p-standardSize space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src={product.image}
          alt={product.title}
          width={550}
          height={550}
          className="bg-primaryy max-w-full"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-3 items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
        <p className="text-base md:text-lg">{product.desc}</p>
        <p className="text-xl md:text-2xl font-bold">{'₹ ' + product.price}</p>
        <button className="bg-black rounded-full p-2 px-6 text-white" onClick={() => handleAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
