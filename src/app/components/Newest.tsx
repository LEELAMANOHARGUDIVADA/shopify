import { ArrowRight } from "lucide-react";
import { Product } from "../interface";
import { client } from "../lib/sanity"
import Link from "next/link";
import Image from "next/image"

async function getData() {
    const query = `*[_type == 'product'][0...8] | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`

    const data = await client.fetch(query);

    return data;

}

export default async function Newest() {

    const data: Product[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-center">
            <h2 className="lg:text-3xl text-lg font-bold tracking-tight bg-foreground px-2 py-1 text-white">Our</h2>
            <span className="bg-primary text-lg lg:text-3xl font-bold tracking-tight px-2 py-1 text-white">Latest Arrivals</span>
            </div> 

            <Link href='/all' className='text-primary flex items-center gap-x-1'>
                See All{""}
                <span>
                    <ArrowRight />
                </span>
            </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {data.map((product) => (
                <div key={product._id} className="group relative">
                    <Link href={`/product/${product.slug}`}>
                    <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 ">
                        <Image src={product.imageUrl} alt='Product image' className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                        width={300}
                        height={300}
                         />
                    </div>

                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-800">
                                    {product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>

                        </div>
                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    </div>
                    </Link>

                </div>
            ))}
        </div>
      </div>

    </div>
  )
}
