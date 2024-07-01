"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { api_without_token } from "@/lib/api-requests"

const API_URL = "http://localhost:5000/api/public/register"; 

const FormSchema = z.object({
  accountType: z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(128),
  confirmPassword: z.string().min(8).max(128)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function SignInForm() {


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      accountType: "student",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = async (data: object) => {
    const { accountType, email, password } = data as { accountType: string, email: string, password: string};
  
    // try {
    //   const response = await fetch(API_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ accountType, email, password }),
    //   });
  
    //   if (response.ok) {
    //     const responseData = await response.json();
    //     console.log('Signup successful:', responseData);
    //     // Redirect or handle login success here
    //   } else {
    //     const errorData = await response.json();
    //     console.error('Signup error:', errorData.message);
    //     // Show error message to user here
    //   }
  
    // } catch (error) {
    //   console.error('Connection error:', error);
    // }

    try {
      const response= await api_without_token.post('/api/public/register', {
          accountType,
          email,
          password
      }, {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.status === 200) { // This check is often not necessary with Axios as it throws for bad status codes
          console.log('Signup successful:', response.data);
          // Redirect or handle login success here
      } else {
          console.error('Signup error:', response.data.message);
          // Show error message to user here
      }
  } catch (error: any) {
      console.error('Connection error:', error.response ? error.response.data : error.message);
  }
  };

  return (
    <>
      <div>
        <h2 className="mt-8 text-3xl font-extrabold text-foreground">Welcome! Signup here</h2>
        <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
              <FormItem>
                <FormLabel>Account type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an account type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="non_faculty">Non-faculty</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
              )}
             />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
             />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="password"/>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="password"/>

                  
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />            
            
            <div className="flex items-center mt-4">
              <Checkbox id="agreement_toggle" />
              <label htmlFor="agreement_toggle" className="ml-2 text-foreground font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I agree with
              </label>
              <Link href="https://www.google.com" target="_blank" className=" ml-1 text-primary font-medium hover:underline">Terms of Use</Link>
              <label htmlFor="agreement_toggle" className="ml-1 text-foreground font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                and
              </label>
              <Link href="https://www.google.com" target="_blank" className=" ml-1 text-primary font-medium hover:underline">Privacy Policy</Link>
            </div>

            <Button className="w-full mt-9" type="submit">Sign up</Button>
          </form>
        </Form>
        <Separator className="mt-6"/>
        <div className="flex justify-center mt-4">
              <p>Already have an account?</p>
              <Link href="/auth/login" className="text-primary font-medium ml-2 hover:underline">Log in</Link>
        </div>
      </div>
      
    </>
  )
}