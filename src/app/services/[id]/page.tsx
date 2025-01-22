"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; // Ensure this is properly imported
import { client } from '@/sanity/lib/client';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { pushCart } from '@/components/lib/features/cart/cartSlice';

import { ImLocation } from "react-icons/im";

type dataType = {
  _id: string,
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
  services_list: {
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
  }
};



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
    }
  }
}

type dataTypeInner = {
  _key: string;
  _type: string;
  name: string;
  variation: string;
  city_available: string;
  price: number;
  currently_offered: boolean;
  pic: {
    asset: {
      _ref: string;
    };
  }
};

const FetchingSanityDataById = () => {
  // const [fetchedData, setFetchedData] = useState<dataTypeInnerOuter[]>([]);
  const [fetchedData, setFetchedData] = useState<dataTypeInnerOuter[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const dispatch = useDispatch();

  const handleAddToCart = (productName: dataTypeInnerOuter) => {
    dispatch(pushCart(productName));
  };

  useEffect(() => {
    const fetchFunction = async () => {
      console.log('dataString', dataString)
      const data: dataType[] = await client.fetch(`
                *[_id in path("${dataString}")]
            `);
      let { services_list } = data[0]
      if (dataString !== null) {

        const filteredData: dataTypeInnerOuter[] = Array.isArray(services_list)
          ? services_list.map((service: dataTypeInner) => ({
            _id: service._key, // Adjust if necessary
            name: service.name,
            variation: service.variation,
            city_available: service.city_available,
            price: service.price,
            currently_offered: service.currently_offered,
            pic: service.pic
          }))
          : [
            {
              _id: services_list._id, // Adjust if necessary
              name: services_list.name,
              variation: services_list.variation,
              city_available: services_list.city_available,
              price: services_list.price,
              currently_offered: services_list.currently_offered,
              pic: services_list.pic
            }
          ];

        setFetchedData(filteredData);
      } else {
        const services_listData: dataTypeInnerOuter[] = Array.isArray(services_list)
          ? services_list.map((service: dataTypeInner) => ({
            _id: service._key, // Adjust if necessary
            name: service.name,
            variation: service.variation,
            city_available: service.city_available,
            price: service.price,
            currently_offered: service.currently_offered,
            pic: service.pic
          }))
          : [
            {
              _id: services_list._id, // Adjust if necessary
              name: services_list.name,
              variation: services_list.variation,
              city_available: services_list.city_available,
              price: services_list.price,
              currently_offered: services_list.currently_offered,
              pic: services_list.pic
            }
          ];
        setFetchedData(services_listData);
        // setFetchedData(services_list);
      }
      setLoading(false);
    };
    fetchFunction();
  }, [dataString]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen relative">
        <div className="loader border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center bg-gray-400 h-16 pt-4 text-white">
        <ImLocation className="mr-2" />
        {dataString ? "JSON.parse(dataa)" : 'null'}
        {/* {dataa ? JSON.parse(dataa) : 'null'} */}
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fetchedData.map(service => (
            <div key={service?._id} className="border rounded-lg p-4 shadow-lg">
              <Image
                // Handle the image logic here
                src={
                  service?.pic?.asset?._ref
                    ? urlFor(service.pic.asset._ref).url() // Ensure the correct reference is passed
                    : "https://media.istockphoto.com/id/1045297442/photo/frustrated-and-worried-young-man-portrait-in-grey-t-shirt.jpg?s=612x612&w=0&k=20&c=7bE3TZ0L-rMYe3h3n0bFJkSmu8KgPIkM-qajf0claDI=" // Provide a fallback image URL
                }
                alt={service?.name || "hello"}
                width={120}
                height={120}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700 mb-1">{service.variation}</p>
              <p className="text-gray-700 mb-1">{service.city_available}</p>
              <p className="text-gray-900 font-bold mb-1">PKR {service.price}/=</p>
              <p className={`text-sm ${service.currently_offered ? 'text-green-500' : 'text-red-500'}`}>
                {service.currently_offered ? 'Offered' : 'Not Offered'}
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
      </div>
    </div >
  );
};

const ServicesPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen relative">
          <div className="loader border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
        </div>
      }
    >
      <FetchingSanityDataById />
    </Suspense>
  );
};

export default ServicesPage;









// "use client"

// import React, { useState, useEffect, Suspense } from 'react';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import { client } from '@/sanity/lib/client';
// import { useSearchParams } from 'next/navigation'; // Change this import
// import { useDispatch } from 'react-redux';
// import { pushCart } from '@/components/lib/features/cart/cartSlice';

// import { ImLocation } from "react-icons/im";


// type dataType = {
//   _id: string;
//   name: string;
//   variation: string;
//   city_available: string;
//   price: number;
//   currently_offered: boolean;
//   pic: {
//     asset: {
//       _ref: string;
//     };
//   };
//   services_list: {
//     _id: string;
//     name: string;
//     variation: string;
//     city_available: string;
//     price: number;
//     currently_offered: boolean;
//     pic: {
//       asset: {
//         _ref: string;
//       };
//     };
//   }
// };


// const FetchingSanityDataById = () => {
//   const [fetchedData, setFetchedData] = useState<dataType[]>([]);
//   const [loading, setLoading] = useState(true);

//   const searchParams = useSearchParams();
//   const address = searchParams.get('address');
//   const dispatch = useDispatch();

//   const handleAddToCart = (productName: dataType) => {
//     dispatch(pushCart(productName));
//   };

//   useEffect(() => {
//     const fetchFunction = async () => {
//       const data: dataType[] = await client.fetch(`
//                 *[_type=='service']{
//                     services_list,
//                     }
//             `);
//       console.log('...data...62...', data)
//       if (address !== null) {
//         const filteredData = data.filter(service =>
//           service.city_available.split(',').some(city => address.toLowerCase().includes(city.trim().toLowerCase()))
//         );
//         setFetchedData(filteredData);
//       } else {
//         setFetchedData(data);
//       }
//       setLoading(false);
//     };
//     fetchFunction();
//   }, [address]);

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen relative">
//       <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
//     </div>;
//   }

//   return (
//     <div>
//       <div className="flex justify-center items-center bg-gray-400 h-16 pt-4 text-white"><ImLocation className="mr-2" />{address ? JSON.parse(address) : 'null'}</div>
//       <div className="container mx-auto p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {fetchedData.map(service => (
//             <div key={service._id} className="border rounded-lg p-4 shadow-lg">
//               <Image
//                 // src={urlFor(service?.pic)?.url()}
//                 src={
//                   service?.pic?.asset?._ref
//                     ? urlFor(service.pic.asset._ref)?.url()
//                     : "https://media.istockphoto.com/id/1045297442/photo/frustrated-and-worried-young-man-portrait-in-grey-t-shirt.jpg?s=612x612&w=0&k=20&c=7bE3TZ0L-rMYe3h3n0bFJkSmu8KgPIkM-qajf0claDI=" // Provide a fallback image URL
//                 }
//                 // src={urlFor(service?.pic?.asset?._ref)?.url()}
//                 alt={service.name}
//                 width="120"
//                 height="120"
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
//               <p className="text-gray-700 mb-1">{service.variation}</p>
//               <p className="text-gray-700 mb-1">{service.city_available}</p>
//               <p className="text-gray-900 font-bold mb-1">PKR {service.price}/=</p>
//               <p className={`text-sm ${service.currently_offered ? 'text-green-500' : 'text-red-500'}`}>
//                 {service.currently_offered ? 'Offered' : 'Not Offered'}
//               </p>
//               <button
//                 onClick={() => handleAddToCart(service)}
//                 className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ServicesPage = () => {
//   return (
//     <Suspense fallback={
//       <div className="flex justify-center items-center h-screen relative">
//         <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
//       </div>
//     }>
//       <FetchingSanityDataById />
//     </Suspense >
//   );
// };

// export default ServicesPage;