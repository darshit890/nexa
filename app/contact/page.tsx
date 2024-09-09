"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const router = useRouter();
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(`/api/contact`, values);
      toast.success("Detials sent");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-full  bg-[#161616] text-white">
      <div className="max-w-4xl mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-400 mb-6">
          I&apos;m always looking to collaborate on interesting projects with
          great people. Need a supportive hand? I have two!
        </p>
        <div className="flex space-x-4 mb-8">
          <Button
            variant="secondary"
            className="bg-zinc-800 text-white hover:bg-zinc-700 w-full sm:w-auto"
          >
            Schedule free call
          </Button>
          <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
            <Mail className="mr-2 h-4 w-4" /> E-Mail
          </Button>
        </div>
        <Card className="bg-[#1C1C1C] border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400 mb-4"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full bg-zinc-800 text-white hover:bg-zinc-700"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
