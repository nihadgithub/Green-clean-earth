
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
const formSchema = z.object({"category":z.string(),"sub_category":z.string(),"name":z.string().max(255),"address":z.string().max(255),"activity_title":z.string().max(255),"short_desc":z.string().max(255),"social_link":z.string().max(255)})

export function FormUploadActivities() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
// name: "string",
// address: "string",
// activity_title: "string",
// short_desc: "string",
// social_link: "string",
},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2">
             
               <FormField
                       control={form.control}
                       name="category"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Category</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                             <FormControl>
                               <SelectTrigger>
                                 <SelectValue placeholder="" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent>
                               <SelectItem value="dance">Dance</SelectItem>
                               <SelectItem value="music">Music</SelectItem>
                             </SelectContent>
                           </Select>
                           <FormDescription>
                           Choose a category
                           </FormDescription>
                           <FormMessage />
                         </FormItem>
                       )}
                     />             
               <FormField
                       control={form.control}
                       name="sub_category"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Sub Category</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                             <FormControl>
                               <SelectTrigger>
                                 <SelectValue placeholder="" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent>
                               <SelectItem value="general">General</SelectItem>
                               <SelectItem value="other">Others</SelectItem>
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="activity_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Title</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="short_desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="social_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social Media Link</FormLabel>
                  <FormControl>
                    <Input  placeholder="" {...field} />
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
  )
}
