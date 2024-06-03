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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";
const formSchema = z.object(
  {
    "country":z.string(),
    "state":z.string(),
    "district":z.string(),
    "lsgdzone":z.string().max(255),
    "total_team":z.coerce.number(),
  })

export default function NgoAdditionalDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section className="bg-green-50 dark:bg-gray-900">
      <NavigationBar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-8">
        {/* <h1 className="flex items-center my-6 text-2xl font-bold text-green-600 dark:text-white">
          GreenCleanEarth
        </h1> */}
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              NGO - Additional details
              </h1>
          <Form {...form}>
            <form  noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose a country" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="india">India</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />             
                    <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose state" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="kerala">Kerala</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />  


                          <FormField
                            control={form.control}
                            name="district"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>District</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose district" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="kozhikode">Kozhikode</SelectItem>
                                    <SelectItem value="malappuram ">Malappuram</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />             
                  <FormField
                    control={form.control}
                    name="lsgdzone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LSGD / Zone</FormLabel>
                        <FormControl>
                          <Input   {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="total_team"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total number of team members</FormLabel>
                        <FormControl>
                          <Input  type="number" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
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
