"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const bookingSchema = z.object({
  destination: z.string().min(2, "Destination is required"),
  travelDates: z.string().min(2, "Travel dates are required"),
  guests: z.number().min(1).max(20),
  travelStyle: z.string().min(2, "Travel style is required"),
  budget: z.string().min(2, "Budget is required"),
  name: z.string().min(2, "Name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(8, "Phone is required"),
  specialRequests: z.string().optional(),
});

type BookingSchema = z.infer<typeof bookingSchema>;

export function BookingForm({ defaultDestination = "" }: { defaultDestination?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      destination: defaultDestination,
      guests: 2,
    },
  });

  return (
    <form
      className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
      onSubmit={handleSubmit(() => undefined)}
      aria-label="Travel consultation booking form"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Destination" {...register("destination")} />
        <Input placeholder="Travel Dates" {...register("travelDates")} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Input
          type="number"
          placeholder="Guests"
          {...register("guests", { valueAsNumber: true })}
        />
        <Input placeholder="Travel Style" {...register("travelStyle")} />
        <Input placeholder="Budget" {...register("budget")} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Input placeholder="Full Name" {...register("name")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input placeholder="Phone" {...register("phone")} />
      </div>
      <Textarea placeholder="Special Requests" {...register("specialRequests")} />

      {(Object.keys(errors) as Array<keyof BookingSchema>).length > 0 ? (
        <p className="text-sm text-red-300">{errors[Object.keys(errors)[0] as keyof BookingSchema]?.message}</p>
      ) : null}

      <Button type="submit" className="justify-self-start">
        Submit Request
      </Button>
      {isSubmitSuccessful ? <p className="text-sm text-[var(--accent-ocean)]">Request received. Our team will contact you shortly.</p> : null}
    </form>
  );
}
