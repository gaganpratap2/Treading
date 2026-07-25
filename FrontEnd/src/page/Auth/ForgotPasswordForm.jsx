import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Auth from './Auth'

const ForgotPasswordForm = () => {

  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setSubmitted(true);
  }

  return (
    <Auth
      title="Forgot password"
      subtitle={submitted ? "Check your inbox for a reset link" : "We'll send you a reset link"}
    >
      {submitted ? (
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <p className="text-sm text-muted-foreground">
            If an account exists for <span className="font-medium text-foreground">{email}</span>, you'll receive a password reset email shortly.
          </p>
          <Link to="/signin" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Sign In
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="pl-9 py-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full py-6">
            Send Reset Link
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            <Link to="/signin" className="text-primary font-medium hover:underline flex items-center justify-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Sign In
            </Link>
          </p>

        </form>
      )}
    </Auth>
  )
}

export default ForgotPasswordForm