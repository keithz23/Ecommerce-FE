"use client";
import { ChevronDown, Heart } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const ProductSortingType = [
  { id: 1, name: "Default Sorting", lowerName: "default_sorting" },
  { id: 2, name: "High to Low", lowerName: "high_to_low" },
  { id: 3, name: "Low to High", lowerName: "low_to_high" },
  { id: 4, name: "New Added", lowerName: "new_added" },
];

const categoriesData = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Accessories" },
];

export const productData = [
  {
    id: 1,
    name: "Classic Running Shoes",
    desc: "Comfortable and stylish running shoes for daily workouts.",
    price: 59.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/0cff693f-fece-490c-994b-94a7910714e8.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    desc: "Breathable cotton shirt perfect for casual outings.",
    price: 29.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/248c2b9e-eccb-4ec9-8aee-0483e9a863bc.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Wireless Headphones",
    desc: "High quality wireless headphones with noise cancellation.",
    price: 99.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/2a4a674e-ae70-450d-aae6-b84e146faa3d.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Leather Wallet",
    desc: "Durable leather wallet with multiple card slots.",
    price: 25.0,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/b3233254-1bc9-45ca-8163-21b75dc31522.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Sports Cap",
    desc: "Lightweight and breathable cap for sports activities.",
    price: 15.5,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/36b3e0ff-c237-415e-8be4-a024377239c6.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Elegant Wristwatch",
    desc: "Water-resistant wristwatch with leather strap.",
    price: 149.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/3f418b0c-1cfb-42e5-9207-85609ed54651.jpg",
      },
    ],
  },
];

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropDown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [sortingType, setSortingType] = useState<string>("null");
  // const { productData, total } = useProductData({
  //   page: currentPage,
  //   categoryId: activeCategory === "" ? undefined : Number(activeCategory),
  //   keyword: "",
  //   sort: sortingType,
  // });

  const handleShowProductDetails = (id: number) => {
    useRouter().push(`/product/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDropdown = (dropdownKey: string) => {
    setOpenDropDown((prev) => (prev === dropdownKey ? null : dropdownKey));
  };

  const handleSelectSortingType = (type: string) => {
    setSortingType(type);
  };

  return (
    <div className="px-4 py-8 mx-auto md:px-8 lg:px-16 md:py-12 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 md:text-4xl">
          Discover Our Products
        </h2>
      </div>

      {/* Categories & Filter */}
      <div className="mb-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <ul className="flex flex-wrap gap-3">
            <li
              onClick={() => {
                setActiveCategory("");
                setCurrentPage(1);
              }}
              className={`border px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                activeCategory === ""
                  ? "bg-electric-blue text-white shadow-md"
                  : "text-mid-night hover:bg-electric-blue hover:text-white"
              }`}
            >
              All
            </li>
            {categoriesData?.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActiveCategory(String(item.id));
                  setCurrentPage(1);
                }}
                className={`border px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                  activeCategory === String(item.id)
                    ? "bg-electric-blue text-white shadow-md"
                    : "text-mid-night hover:bg-electric-blue hover:text-white"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Filter section */}
          <section className="flex flex-col justify-between md:flex-row">
            <div>
              <div
                className="relative px-5 py-3 bg-gray-100 border border-gray-200 shadow-sm cursor-pointer min-w-42"
                onClick={() => {
                  toggleDropdown("sorting");
                }}
              >
                <div className="flex justify-between">
                  <h1 className="text-sm text-gray-900">
                    {ProductSortingType.find(
                      (pt) => pt.lowerName === sortingType
                    )?.name || "Default Sorting"}
                  </h1>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-200 ${
                      openDropdown == "sorting" ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Sorting dropdown */}
                <ul
                  className={`absolute bg-white mt-3.5 left-0 w-full z-50 border border-gray-200 origin-top transition-transform duration-300 ease-out
                    ${
                      openDropdown === "sorting"
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                  {ProductSortingType.map((pt) => (
                    <li
                      key={pt.id}
                      className={`text-left px-4 py-2 text-sm ${
                        sortingType == pt.lowerName ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        handleSelectSortingType(pt.lowerName);
                      }}
                    >
                      {pt.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
        {productData?.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-lg"
          >
            <div className="relative w-full">
              <img
                src={item.imagePath?.[0]?.url || ""}
                alt={item.name}
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                onClick={() => handleShowProductDetails(item.id)}
              />
              <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all duration-300">
                <Heart className="w-5 h-5 text-gray-500 transition-colors duration-300 hover:text-red-500" />
              </button>
            </div>
            <div className="p-5">
              <span className="block mb-2 text-sm text-gray-600 line-clamp-2">
                {item.desc}
              </span>
              <div className="flex justify-between">
                <span className="text-xl font-bold text-electric-blue">
                  ${item.price}
                </span>
              </div>
            </div>
            <button className="absolute bottom-0 left-0 right-0 mx-auto w-[90%] mb-4 px-4 py-2 bg-electric-blue text-white rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Pagination */}
      {/* {productData.length > 0 && (
        <div className="flex justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={Number(total.totalPages)}
          />
        </div>
      )} */}
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
