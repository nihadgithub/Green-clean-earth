"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";

const formSchema = z.object({"username":z.string().min(3).max(255),"password":z.string().min(1).max(255)})

export default function CoordinatorLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
//mobile: 1,
//password: "string",
},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section className="bg-green-50 dark:bg-gray-900">
        <NavigationBar />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-74px)] lg:py-0">
            {/* <h1 className="flex items-center mb-6 text-2xl font-bold text-green-600 dark:text-white">
                GreenCleanEarth    
            </h1> */}
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login in to coordinator account
                    </h1>
                    <Form {...form}>
                    <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            
                            <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            
                            <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        <Button type="submit" className="bg-green-600">Submit</Button>
                    </form>
                    </Form>
                </div>
            </div>
        </div>
        <Footer/>
    </section>

  )
}
