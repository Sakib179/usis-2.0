"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

import { api_without_token } from "@/lib/api-requests";

const API_URL = "https://usis2backend.cyclic.app/api/auth/login";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
  rememberMe: z.boolean() // Add rememberMe field to schema
});

export default function SignInForm() {

  const router = useRouter();


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true, // Set rememberMe to false by default
    },
  });

  const onSubmit = async (data: object) => {
    const { email, password, rememberMe } = data as { email: string, password: string, rememberMe:boolean };
  
    try {
      // POST using fetch
      // const response = await fetch(API_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password, rememberMe }),
      // });
      
      // if (response.ok) {
      //   const { token } = await response.json();
      //   // Save the token to cookies
      //   Cookie.set('token', token, { expires: rememberMe ? 7 : 2/24 }); // Expires in 7 days or 2 hour
      //   router.push('/dashboard');
      // } else {
      //   // Handle errors, such as displaying a message to the user
      //   console.error('Login failed');
      // }

      // POST Using axios
      const response = await api_without_token.post('/api/auth/login', {
        email, 
        password, 
        rememberMe
    }, {
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.status === 200) { // Axios throws an error for bad status, so this is just in case
        const { token, accountType } = response.data;
        // Save the token to cookies
        Cookie.set('token', token, { expires: rememberMe ? 7 : 2/24 }); // Expires in 7 days or 2 hours
        Cookie.set('accountType', accountType, { expires: rememberMe ? 7 : 2/24 }); // Expires in 7 days or 2 hours

        router.push('/dashboard');
    } else {
        // Handle errors, such as displaying a message to the user
        console.error('Login failed:', response.data.message);
    }

    } catch (error: any) {
      console.error('Connection error:', error.response ? error.response.data : error.message);
  }
  };

  return (
    <>
      <div>
        <h2 className="mt-8 text-3xl font-extrabold text-foreground">Login to your account</h2>
        <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id = "rememberMe"
                      />
                    </FormControl>
                    <FormLabel
                      className="text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="rememberMe">
                      Remember me
                    </FormLabel>
                  </div>
                  <Link href="/" className="text-primary font-medium hover:underline">Forgot your password?</Link>
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormControl>
                  </FormControl>
                  <label htmlFor="rememberMe" className="text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </label>
                </FormItem>
              )}
            /> */}

            
            {/* <div className="flex justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" {...form.register("rememberMe")} />
                <label htmlFor="rememberMe" className="text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </label>
              </div>
              <Link href="/" className="text-primary font-medium hover:underline">Forgot your password?</Link>
            </div> */}
            

            <Button className="w-full mt-9" type="submit">Log in</Button>
          </form>
        </Form>
        <Separator className="mt-6"/>
        <div className="flex justify-center mt-4">
              <p>Don&apos;t have an account?</p>
              <Link href="/auth/signup" className="text-primary font-medium ml-2 hover:underline">Sign up</Link>
        </div>
      </div>
      
    </>
  )
}