"use client";

import Image from "next/image";

const brands = [
  { src: "/nike.svg", alt: "Nike" },
  { src: "/adidas.png", alt: "Adidas" },
  { src: "/puma.png", alt: "Puma" },
  { src: "/Vector.svg", alt: "New Balance" },
  { src: "/converse.png", alt: "Converse" },
  { src: "/polo.png", alt: "Polo" },
  { src: "/zara.png", alt: "Zara" },
];

const Brands = () => {
  return (
    <div>
      <h3 className="mb-4 px-5 font-semibold">Marcas parceiras</h3>
      <div className="overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 pb-2 w-max">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-[#E5E5E5] bg-white p-2">
                <Image src={brand.src} alt={brand.alt} width={30} height={30} />
              </div>
              <span className="mt-2 text-center text-sm font-medium text-black whitespace-nowrap">
                {brand.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;


