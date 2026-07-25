import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

const TransferForm = () => {
  const [formData , setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData , [e.target.name] : e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(formData);
  }
  return (
    <div className='pt-10 space-y-6'>

      <div className="">
        <h1 className='pb-1 text-sm font-medium text-muted-foreground'>Enter Amount</h1>
        <Input 
            name="amount"
            onChange={handleChange}
            value={formData.amount}
            className="py-7"
            placeholder="$19000"
        />
      </div>

      <div className="">
        <h1 className='pb-1 text-sm font-medium text-muted-foreground'>Wallet Id</h1>
        <Input 
            name="walletId"
            onChange={handleChange}
            value={formData.walletId}
            className="py-7"
            placeholder="Enter recipient wallet ID"
        />
      </div>

      <div className="">
        <h1 className='pb-1 text-sm font-medium text-muted-foreground'>Purpose</h1>
        <Input 
            name="purpose"
            onChange={handleChange}
            value={formData.purpose}
            className="py-7"
            placeholder="gift for your friend"
        />
      </div>

     <DialogClose className="w-full">
      <Button className="w-full py-7 text-base" onClick={handleSubmit}>
        Submit
      </Button>
     </DialogClose>

    </div>
  )
}

export default TransferForm