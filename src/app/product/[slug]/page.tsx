import AddToCart from "@/app/components/AddToCart";
import Checkout from "@/app/components/Checkout";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
    const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
        _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id
    }`


    const data = await client.fetch(query);

    return data;

}


export default async function ProductPage({params} : {
    params: {
        slug:string
    }
}) {
    const data:fullProduct = await getData(params.slug)
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">{data.categoryName}</span>
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                {data.name}
                            </h2>
                        </div>

                        <div className="mb-6 flex items-center gap-3 md:mb-10">
                            <Button className="flex items-center justify-center gap-1">
                                <span className="text-sm">4.2</span>
                                <Star size={18} />
                            </Button>

                            <span className="text-sm text-gray-500 transition duration-100">98 Ratings</span>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-gray-800">${data.price}</span>
                                <span className="line-through text-md font-semibold text-gray-600">${data.price + 50}</span>
                            </div>
                            <span className="text-gray-500 text-sm font-semibold">Incl. Vat + Shipping</span>
                        </div>

                        <div className="mb-5 flex items-center gap-2 text-gray-500">
                            <Truck />
                            <span className="text-sm font-medium">4-7 Day Shipping</span>
                        </div>

                        <div className="flex gap-2.5">
                            <AddToCart currency="USD" name={data.name} description={data.description} price={data.price} image={data.images[0]} key={data._id} price_id={data.price_id} />
                            <Checkout
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
                        </div>

                        <p className="mt-12 text-base text-gray-500 tracking-tight">{data.description}</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}