"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectGroup, SelectLabel } from '@radix-ui/react-select'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Slider } from "@/components/ui/slider"
import { SliderProps } from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'


export default function page({ className, ...props }: SliderProps) {
  const [date,setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div>
      Bai1:
      <Button variant="destructive">Destructive</Button>
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button size="lg">Size large</Button>
      <Button size="sm">Size small</Button>
      <br />
      Bai2:
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="Text"></Label>
      <Input type="text" id="email" placeholder="RikkeiAcademy" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="Text"></Label>
      <Input type="number" id="email" placeholder="10" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture"></Label>
        <Input id="picture" type="file" />
      </div>
      <br />
      Bai3:
      <Breadcrumb>
       <BreadcrumbList>
         <BreadcrumbItem>
           <BreadcrumbLink>
             <Link href="/">Home</Link>
           </BreadcrumbLink>
         </BreadcrumbItem>
         <BreadcrumbSeparator />
         <BreadcrumbItem>
           <BreadcrumbLink>
             <Link href="#">Components</Link>
           </BreadcrumbLink>
         </BreadcrumbItem>
       </BreadcrumbList>
    </Breadcrumb>

      <Breadcrumb>
       <BreadcrumbList>
         <BreadcrumbItem>
           <BreadcrumbLink>
             <Link href="/">Home</Link>
           </BreadcrumbLink>
         </BreadcrumbItem>
         <BreadcrumbSeparator />
         <BreadcrumbItem>
           <BreadcrumbLink>
             <Link href="#">ListProducts</Link>
           </BreadcrumbLink>
         </BreadcrumbItem>
       </BreadcrumbList>
    </Breadcrumb>

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="#">Order</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Order Details</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <br />
    Bai4:
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Môn học" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="apple">HTML</SelectItem>
          <SelectItem value="banana">CSS</SelectItem>
          <SelectItem value="blueberry">JavaScript</SelectItem>
          <SelectItem value="grapes">ReactJS</SelectItem>
          <SelectItem value="pineapple">NextJS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <br />
    Bai5:
    <InputOTP maxLength={8}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={5} />
        <InputOTPSlot index={6} />
        <InputOTPSlot index={7} />
      </InputOTPGroup>
    </InputOTP>
    <h1>Ma xac nhan 8 so</h1>
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    <h1>Ma xac nhan 6 so</h1>
    <br />
    Bai6:
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
    Value:
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
    Value:
      {/* <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  /> */}
    </div>
  )
}
