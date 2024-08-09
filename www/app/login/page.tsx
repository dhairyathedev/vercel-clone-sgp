"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
}


function LoginPage() {

  return (
    <main className="container flex items-center justify-center h-screen w-4/3  ">
      {/* <form className="container w-1/3 h-[full] border-2 border-gray-300 my-10 mx-20 rounded-xl ">
        <h1 className="text-3xl font-medium px-3 my-3 py-3 w-96 text-center">
          Login Page
        </h1>

        <div className="flex flex-col px-3">
          <Label htmlFor="email" className="font-semibold my-1 pt-2 mx-2">
            Email
          </Label>
          <Input
            className="border-2 border-gray-600 mt-1 rounded-lg cursor-pointer shadow-bottom-md"
            type="email"
            id="email"
            placeholder="abc123@gmail.com"
          />

          <Label htmlFor="password" className="font-semibold my-1 pt-4 mx-2">
            Password
          </Label>
          <Input
            className="border-2 border-gray-600 mt-1 rounded-lg cursor-pointer shadow-bottom-md"
            type="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <Button className="my-7 font-semibold w-80 bg-black text-white px-24 mx-7 py-2 rounded-lg">
          Login
        </Button>
      </form> */}

      {/* <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form> */}
    </main>
  );
}

export default LoginPage;
