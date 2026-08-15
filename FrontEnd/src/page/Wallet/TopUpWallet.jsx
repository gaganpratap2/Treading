import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import React from 'react'
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { paymentHandler } from '@/State/Wallet/Action';

const TopUpWallet = () => {
    const [amount , setAmount] = React.useState('');
    const [paymentMethod , setPaymentMethod] = React.useState("RAZORPAY");

    const dispatch = useDispatch();

    const handlepaymentMethodChange = (value) => {
        setPaymentMethod(value)
    }

    const handleSubmit = () => {
        console.log(amount , paymentMethod);
        dispatch(paymentHandler({jwt : localStorage.getItem("jwt") , paymentMethod , amount}))
    }

    const handleChange = (e) => {
        setAmount(e.target.value)
    }
  return (
    <div className='pt-10 space-y-6'>

        <div className="">
            <h1 className='pb-1 text-sm font-medium text-muted-foreground'>Enter Amount</h1>
            <Input onChange={handleChange} value={amount} className="py-7 text-lg"  placeholder="$9999" />
        </div>

        <div className="">
            <h1 className='pb-2 text-sm font-medium text-muted-foreground'>Select Payment Method</h1>
            <RadioGroup onValueChange={(value) => handlepaymentMethodChange(value)} className="flex gap-4" defaultValue="RAZORPAY"> 

                <Label htmlFor="r1" className={`flex items-center gap-3 border rounded-lg p-3 px-4 cursor-pointer transition-colors ${paymentMethod === "RAZORPAY" ? "border-primary bg-primary/5" : "hover:bg-muted"}`}>
                    <RadioGroupItem value="RAZORPAY" id="r1" />
                    <div className="bg-white rounded-md px-5 py-2 w-32 flex items-center justify-center">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png' alt="Razorpay" />
                    </div>
                </Label>

                <Label htmlFor="r2" className={`flex items-center gap-3 border rounded-lg p-3 px-4 cursor-pointer transition-colors ${paymentMethod === "Stripe" ? "border-primary bg-primary/5" : "hover:bg-muted"}`}>
                    <RadioGroupItem value="Stripe" id="r2" />
                    <div className="bg-white rounded-md px-5 py-2 w-32 flex items-center justify-center">
                        <img className='h-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png' alt="Stripe" />
                    </div>
                </Label>

            </RadioGroup>
        </div>

        <Button onClick={handleSubmit} className="w-full py-7 text-base">
            Submit
        </Button>

    </div>
  )
}

export default TopUpWallet
















// import { Input } from '@/components/ui/input'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import React from 'react'
// import { Label } from '@/components/ui/label';
// import { Button } from '@/components/ui/button';

// const TopUpWallet = () => {
//     const [amount , setAmount] =    React.useState('');
//     CONST [paymentMethod , setPaymentMethod] = React.useState("RAZORPAY");

//     const handlepaymentMethodChange = (value) => {
//         setPaymentMethod(value)
//     }

//     const handleSubmit = () => {
//         console.log(amount , paymentMethod)
//     }

//     const handleChange = (e) => {
//         setAmount(e.target.value)
//     }
//   return (
//     <div className='pt-10 space-y-5'>

//         <div className="">
//             <h1 className=''PB-1>eNTER aMOUNT</h1>
//             <Input onChange={handleChange} value={amount} className="py-7 text-lg"  placeholder="$9999" />
//         </div>

//         <div className="">
//             <h1 className='pb-1'>Select Payment Method</h1>
//             <RadioGroup onValueChange={(value) => handlepaymentMethodChange(value)} className="flex" defaultValue="RAZORPAY"> 

//                 <div className="flex items-center space-x-2 border p-3 px-5">
//                     <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="RAZORPAY" id="r1" 
//                     />
//                     <Label htmlFor="r1">
//                         <div className="bg-white rounded-md px-5 py-2 w-32">
//                             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png' />
//                         </div>
//                     </Label>
//                 </div>

//                  <div className="flex items-center space-x-2 border p-3 px-5">
//                     <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="Stripe" id="r2" 
//                     />
//                     <Label htmlFor="r2">
//                         <div className="bg-white rounded-md px-5 py-2 w-32">
//                             <img className='h-6.5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svgpng' />
//                         </div>
//                     </Label>
//                 </div>

//             </RadioGroup>
//         </div>

//         <Button onClick={handleSubmit} className="w-full py-7">
//             submit
//         </Button>

//     </div>
//   )
// }

// export default TopUpWallet