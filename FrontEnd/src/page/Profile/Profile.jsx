import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { VerifiedIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AccountVerificationForm from "./AccountVerificationForm"
import Store from '@/State/Store'

const Profile = () => {

  const {auth} = useSelector(store => store);

  const handleTwoStepVerification = () => {
    console.log("hello")
  }

  return (
    <div className='flex flex-col items-center mb-5'>
        <div className="pt-10 px-4 w-full lg:w-[60%] space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>
                Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Email</p>
                  <p className='text-muted-foreground'>{auth.user?.email}</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Fullname</p>
                  <p className='text-muted-foreground'>{auth.user?.fullName}</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Date of Birth</p>
                  <p className='text-muted-foreground'>codewithrana@gmail.com</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Nationality</p>
                  <p className='text-muted-foreground'>codewithrana@gmail.com</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Email</p>
                  <p className='text-muted-foreground'>codewithrana@gmail.com</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Email</p>
                  <p className='text-muted-foreground'>codewithrana@gmail.com</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Email</p>
                  <p className='text-muted-foreground'>codewithrana@gmail.com</p>
                </div>

                <div className="flex">
                  <p className='w-32 text-sm font-medium'>Email</p>
                  <p className='text-muted-foreground'>{auth.user?.email}</p>
                </div>

              </div>
            </CardContent>
          </Card>

        <Card className="shadow-sm">
          <CardHeader>

            <div className="flex items-center gap-3">
              <CardTitle>
                2 Step Verification
              </CardTitle>

          {true ? <Badge className="bg-orange-600">
            <VerifiedIcon className="h-3.5 w-3.5" />
            <span>Enabled</span>
          </Badge> :
          <Badge variant="secondary">
            Disabled
          </Badge>}


            </div>

          </CardHeader>
          <CardContent>
              <div className="">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Enable Two Step Verification</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Verify your account
                      </DialogTitle>
                    </DialogHeader>

                    <AccountVerificationForm handleSubmit={handleTwoStepVerification} />
                  </DialogContent>
                </Dialog>
              </div>
          </CardContent>
        </Card>

        </div>
    </div>
  )
}

export default Profile