import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import React from 'react'
import { DialogClose } from '@/components/ui/dialog';

const WithdrawalForm = () => {

    const [amount , setAmount] = React.useState('');
  
      const handleChange = (e) => {
          setAmount(e.target.value)
      }

      const handleSubmit = (e) => {
        setAmount(e.target.value)
      }

  return (
    <div className='pt-10 space-y-5'>
        <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold">
            <p>Available Balance</p>
            <p>$78900</p>
        </div>
        <div className="flex flex-col items-center">
          <h1>Enter Withdrawal Amount</h1>
          <div className="flex items-center justify-center">
            <Input 
                onChange={handleChange}
                value={amount}
                className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
                placeholder="$1999"
                type="number"
            />
          </div>
        </div>
        <div className="">
          <p>Transfer To</p>
          <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
            <img 
            className='h-8 w-8'
            src="https://cdn.pixabay.com/photo.2020/02/18/11/03/bank-4859142_1280.png" />

            <div className="">
              <p className="text-xl font-bold">YesBank</p>
              <p className='text-xs'>********8647</p>
            </div>
          </div>
        </div>
       <DialogClose>
         <Button className="w-full py-7 text-xl" onClick={handleSubmit}>
          WithDrawal
        </Button>
       </DialogClose>
    </div>
  )
}

export default WithdrawalForm