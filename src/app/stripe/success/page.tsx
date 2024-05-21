import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import paymentSuccess from './paymentsuccess-removebg-preview.png'

export default function StripeSuccess() {
    return (

        <div className='w-full h-full flex flex-col items-center justify-center'>
            <Image src={paymentSuccess} alt='payment-success' width={400} height={400} />
            <h2 className='relative bottom-16 text-2xl'>Payment Successful</h2>
            <h3 className='relative bottom-10'>Thanks for shopping with us. Please come again</h3>
            <Link href='/'>
            <Button className='relative bottom-6'>
                Continue Shopping
            </Button>
            </Link> 
        </div>
    )
}