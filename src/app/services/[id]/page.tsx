"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { pushCart } from "@/components/lib/features/cart/cartSlice";
import { ImLocation } from "react-icons/im";

type dataTypeInnerOuter = {
  _id: string;
  name: string;
  variation: string;
  city_available: string;
  price: number;
  currently_offered: boolean;
  pic: {
    asset: {
      _ref: string;
    };
  };
};

const FetchingSanityDataById = () => {
  const [fetchedData, setFetchedData] = useState<dataTypeInnerOuter[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const dispatch = useDispatch();

  const handleAddToCart = (productName: dataTypeInnerOuter) => {
    dispatch(pushCart(productName));
  };

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const data = await client.fetch(`*[_id in path("${dataString}")]`);
        const { services_list } = data[0] || {};

        const filteredData = Array.isArray(services_list)
          ? services_list.map(service => ({
            _id: service._key,
            name: service.name,
            variation: service.variation,
            city_available: service.city_available,
            price: service.price,
            currently_offered: service.currently_offered,
            pic: service.pic,
          }))
          : services_list
            ? [
              {
                _id: services_list._id,
                name: services_list.name,
                variation: services_list.variation,
                city_available: services_list.city_available,
                price: services_list.price,
                currently_offered: services_list.currently_offered,
                pic: services_list.pic,
              },
            ]
            : [];

        setFetchedData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFunction();
  }, [dataString]);

  const totalPages = Math.ceil(fetchedData.length / itemsPerPage);

  const paginatedData = fetchedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen relative">
        <div className="loader border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
      </div>
    );
  }

  if (!fetchedData || fetchedData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-gray-500">No Data Found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center bg-gray-400 h-16 pt-4 text-white">
        <ImLocation className="mr-2" />
        {dataString ? "JSON.parse(dataString)" : "null"}
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedData.map(service => (
            <div key={service._id} className="border rounded-lg p-4 shadow-lg">
              <Image
                src={
                  service?.pic?.asset?._ref
                    ? urlFor(service.pic.asset._ref).url()
                    : "https://fallback.image.url"
                }
                alt={service?.name || "Service Image"}
                width={120}
                height={120}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700 mb-1">{service.variation}</p>
              <p className="text-gray-700 mb-1">{service.city_available}</p>
              <p className="text-gray-900 font-bold mb-1">PKR {service.price}/=</p>
              <p
                className={`text-sm ${service.currently_offered ? "text-green-500" : "text-red-500"
                  }`}
              >
                {service.currently_offered ? "Offered" : "Not Offered"}
              </p>
              <button
                onClick={() => handleAddToCart(service)}
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-gray-500 text-white py-1 px-3 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="mx-4 text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-gray-500 text-white py-1 px-3 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default FetchingSanityDataById;