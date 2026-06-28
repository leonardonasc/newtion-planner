'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signIn } from "@/server/users"
import { z } from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { authClient } from "@/lib/auth-client"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    })
  };

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    const { success, message } = await signIn(data);
    if (success) {
      toast.success(message);
      router.push("/dashboard");
    } else {
      toast.error(message);
    }
    setLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6 font-sans font-semibold", className)} {...props}>
      <Card className="bg-white border border-stone-200">
        <CardHeader>
          <CardTitle className="text-stone-950">Login to your account</CardTitle>
          <CardDescription className="text-stone-600">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
              <Field>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} >
                      <FieldLabel htmlFor={field.name} className="text-stone-950">
                        Email
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        placeholder="m@example.com"
                        aria-invalid={fieldState.invalid}
                        className="border border-stone-300 bg-white text-stone-950 placeholder:text-stone-400"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password" className="text-stone-950">
                    Password
                  </FieldLabel>
                </div>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id={field.name}
                        type="password"
                        placeholder="********"
                        aria-invalid={fieldState.invalid}
                        className="border border-stone-300 bg-white text-stone-950 placeholder:text-stone-400"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </Field>
              <Field>
                <Button type="submit" disabled={loading} className="w-full bg-stone-950 text-white hover:bg-stone-800">
                  {loading ? <Loader2 className="size-4 animate-spin" /> : "Login"}
                </Button>
                <Button type="button" onClick={signInWithGoogle} className="w-full border border-stone-300 text-stone-950 hover:bg-stone-50">
                  Login with Google
                </Button>
                <FieldDescription className="text-center text-stone-600">
                  Don&apos;t have an account? <a href="/sign-up" className="text-blue-600 hover:underline hover:text-blue-700">
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
