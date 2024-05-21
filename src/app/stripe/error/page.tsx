import { Button } from '@/components/ui/button'
import error_image from './error-image.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function StripeError() {
    return (

        <div className='w-full h-full flex flex-col items-center justify-center'>
            <Image src={error_image} alt='error' width={500} height={500} />
            <h3 className='text-3xl font-bold'>Something Went Wrong</h3>
            <Link href='/'>
            <Button className='mt-5'>
                Return Home
            </Button>
            </Link>
        </div>
    )
}