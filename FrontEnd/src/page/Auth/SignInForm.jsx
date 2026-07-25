import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import AuthLayout from './Auth'

const SignInForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const [rememberMe, setRememberMe] = React.useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, rememberMe });
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue trading">
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-9 pr-9 py-5"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
            <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground cursor-pointer">
              Remember me
            </Label>
          </div>

          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full py-6">
          Sign In
        </Button>

        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>

      </form>
    </AuthLayout>
  )
}

export default SignInForm