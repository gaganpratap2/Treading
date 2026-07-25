import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'   
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import PaymentDetailsForm from './PaymentDetailsForm'

const Payment = () => {
  return (
    <div className='px-6 lg:px-20 py-10 space-y-6'>
        <h1 className='text-2xl font-semibold'>Payment Details</h1>

       { true ? <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>
              Yes Bank
            </CardTitle>

            <CardDescription>
              A/C : *********8439
            </CardDescription>

          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center">
              <p className='w-32 text-sm font-medium'>Account Holder</p>
              <p className='text-muted-foreground'>Code with Rana</p>
            </div>

            <div className="flex items-center">
              <p className='w-32 text-sm font-medium'>IFSC</p>
              <p className='text-muted-foreground'>y34y382y4924</p>
            </div>

          </CardContent>
        </Card> : <Dialog>
        <DialogTrigger asChild>
          <Button className="py-6">Add Payment Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>

          <PaymentDetailsForm />   
        </DialogContent>
      </Dialog>}  

      

    </div>
  )
}

export default Payment