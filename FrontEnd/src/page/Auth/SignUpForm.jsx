import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Auth from './Auth'
import { useDispatch } from 'react-redux'
import { register } from "@/State/Auth/Action"

const SignUpForm = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(e));

    // if (formData.password !== formData.confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }
    // setError("");
    console.log(formData);
  }

  return (
    <Auth title="Create an account" subtitle="Start your trading journey today">
      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="fullName"
              name="fullName"
              placeholder="Rana Pratap"
              className="pl-9 py-5"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

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

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-9 py-5"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button type="submit" className="w-full py-6">
          Create Account
        </Button>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>

      </form>
    </Auth>
  )
}

export default SignUpForm