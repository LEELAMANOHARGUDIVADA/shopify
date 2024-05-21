"use client"

import Image from "next/image"
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
    images: any;
}


export default function ImageGallery({images}: iAppProps) {
    const [bigImage, setBigImage] = useState(images[0]);

    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {images.map((image: any, index: any) => (
                <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                    <Image src={urlFor(image).url()} width={200} height={200} alt="image" className="h-full w-full object-contain cursor-pointer"  onClick={() => handleSmallImageClick(image)} />
                </div>
            ))}
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image src={urlFor(bigImage).url()} alt="product-image" className="h-full w-full object-cover object-center" width={500} height={500} />
            <span className="absolute left-5 top-0 rounded-br-lg rounded-bl-lg bg-red-500 px-5 py-2 text-sm uppercase tracking-wider text-white">Sale</span>
        </div>
      
    </div>
  )
}
