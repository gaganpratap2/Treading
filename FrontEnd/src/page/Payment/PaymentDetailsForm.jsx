import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import { DialogClose } from '@/components/ui/dialog'

const PaymentDetailsForm = () => {
  const [formData, setFormData] = React.useState({
    accountHolderName: "",
    ifsc: "",
    accountNumber: "",
    bankName: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(formData);
  }

  return (
    <div className='px-10 py-2 space-y-6'>

      <Field>
        <FieldLabel htmlFor="accountHolderName">A/C Name</FieldLabel>
        <Input
          id="accountHolderName"
          name="accountHolderName"
          onChange={handleChange}
          value={formData.accountHolderName}
          className="p-5"
          placeholder="RANA"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="ifsc">IFSC Code</FieldLabel>
        <Input
          id="ifsc"
          name="ifsc"
          onChange={handleChange}
          value={formData.ifsc}
          className="p-5"
          placeholder="HDFC0001234"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="accountNumber">Account Number</FieldLabel>
        <Input
          id="accountNumber"
          name="accountNumber"
          onChange={handleChange}
          value={formData.accountNumber}
          className="p-5"
          placeholder="**********423"
        />
      </Field>

        <Field>
        <FieldLabel htmlFor="accountNumber">Confirm Account Number</FieldLabel>
        <Input
          id="accountNumber"
          name="accountNumber"
          onChange={handleChange}
          value={formData.accountNumber}
          className="p-5"
          placeholder="Confirm Account Number"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="bankName">Bank Name</FieldLabel>
        <Input
          id="bankName"
          name="bankName"
          onChange={handleChange}
          value={formData.bankName}
          className="p-5"
          placeholder="State Bank of India"
        />
      </Field>

      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-6">
        Save Details
      </Button>
      </DialogClose>

    </div>
  )
}

export default PaymentDetailsForm

















// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/filed'

// const PaymentDetailsForm = () => {
//   const form = useForm({
//     defaultValues: {
//       accountHolderName: "",
//       ifsc: "",
//       accountNumber: "",
//       bankName: "",
//     }
//   })

//   const onSubmit = (data) => {
//     console.log(data);
//   }

//   return (
//     <div className='px-10 py-2'>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

//           <FormField
//             control={form.control}
//             name="accountHolderName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>A/C Name</FormLabel>
//                 <FormControl>
//                   <Input className="p-5" placeholder="RANA" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="ifsc"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>IFSC Code</FormLabel>
//                 <FormControl>
//                   <Input className="p-5" placeholder="HDFC0001234" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="accountNumber"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Account Number</FormLabel>
//                 <FormControl>
//                   <Input className="p-5" placeholder="1234567890" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="bankName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Bank Name</FormLabel>
//                 <FormControl>
//                   <Input className="p-5" placeholder="State Bank of India" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit" className="w-full py-6">
//             Save Details
//           </Button>

//         </form>
//       </Form>
//     </div>
//   )
// }

// export default PaymentDetailsForm