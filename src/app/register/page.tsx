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

import { cn } from "@/lib/utils"

import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const formSchema = z.object({"category":z.string(),"name":z.string().max(255),"location":z.string().max(255),"coname":z.string().max(255),"wnumber":z.coerce.number(),"profession":z.string().max(255),"country":z.string(),"state":z.string(),"districts":z.string(),"lsgdzone":z.string().max(255),"username":z.string().max(255),"password":z.string().max(255)})

const categories = [
                    { label: "NGO", value: "ngo" },
                    { label: "School", value: "school" },
                    { label: "Residence Association", value: "res_ass" },
                    { label: "Promoter", value: "promoter" },
]
const districts = [
                    { label: "Calicut", value: "calicut" },
                    { label: "Malappuram", value: "malappuram" },
]
export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
name: "",
location: "",
coname: "",
//wnumber: 0,
profession: "",
lsgdzone: "",
username: "",
password: "",
},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
    <div className="text-gray-900 mb-2">
      <p className="font-medium text-lg">Register</p>
    </div>
    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
    <div className="lg:col-span-2">
    
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                       control={form.control}
                       name="category"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel>Category</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                             <FormControl>
                               <SelectTrigger>
                                 <SelectValue placeholder="Choose a category" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent>
                               <SelectItem value="ngo">NGO</SelectItem>
                               <SelectItem value="school">School</SelectItem>
                               <SelectItem value="res_ass">Residence Association</SelectItem>
                               <SelectItem value="promoter">Promoter</SelectItem>
                             </SelectContent>
                           </Select>
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
                    <Input  placeholder="Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input  placeholder="Location" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="coname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coordinator name</FormLabel>
                  <FormControl>
                    <Input  placeholder="Coordinator name" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="wnumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Whatsapp number</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Whatsapp number" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profession</FormLabel>
                  <FormControl>
                    <Input  placeholder="Profession" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             
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
                                 <SelectValue placeholder="Choose a state" />
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
                       name="districts"
                       render={({ field }) => (
                         <FormItem className="flex flex-col">
                           <FormLabel>District</FormLabel>
                           <Popover>
                             <PopoverTrigger asChild>
                               <FormControl>
                                 <Button
                                   variant="outline"
                                   role="combobox"
                                   className={cn(
                                     "w-[200px] justify-between",
                                     !field.value && "text-muted-foreground"
                                   )}
                                 >
                                   {field.value
                                     ? districts.find(
                                         (item) => item.value === field.value
                                       )?.label
                                     : "Select item"}
                                   <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                 </Button>
                               </FormControl>
                             </PopoverTrigger>
                             <PopoverContent className="w-[200px] p-0">
                               <Command>
                                 <CommandInput placeholder="Search districts..." />
                                 <CommandEmpty>No districts found.</CommandEmpty>
                                 <CommandGroup>
                                   { districts.map((item) => (
                                     <CommandItem
                                       value={item.label}
                                       key={item.value}
                                       onSelect={() => {
                                         form.setValue("districts", item.value)
                                       }}
                                     >
                                       <Check
                                         className={cn(
                                           "mr-2 h-4 w-4",
                                           item.value === field.value
                                             ? "opacity-100"
                                             : "opacity-0"
                                         )}
                                       />
                                       {item.label}
                                     </CommandItem>
                                   ))}
                                 </CommandGroup>
                               </Command>
                             </PopoverContent>
                           </Popover>
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
                    <Input  placeholder="LSGD / Zone" {...field} />
                  </FormControl>
                  <FormDescription>
                     
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input  placeholder="Username" {...field} />
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
                    <Input  placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>
                     
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
