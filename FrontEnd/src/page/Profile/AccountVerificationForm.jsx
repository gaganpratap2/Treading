import { Dialog, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React, { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button';

const AccountVerificationForm = () => {

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        console.log(value);
    }

  return (
    <div className='flex justify-center'>
        <div className="space-y-5 mt-10 w-full">
            <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">gaganpratapsingh@gmail.com</p>
                </div>

                 <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Send OTP</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Enter OTP
                      </DialogTitle>
                    </DialogHeader>

                    <div className="py-5 flex flex-col items-center gap-8">
                      <InputOTP value={value} onChange={(val) => setValue(val)} maxLength={6}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>

                      <DialogClose asChild>
                          <Button className="w-40" onClick={handleSubmit}>
                              Submit OTP
                          </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>

            </div>
        </div>
    </div>
  )
}

export default AccountVerificationForm