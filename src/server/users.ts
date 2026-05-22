"use server";

import { auth } from "@/lib/auth";

export const signIn = async (data: { email: string; password: string }) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });
    return {
      success: true,
      message: "Signed in successfully",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "An error occurred while signing in",
    };
  }
};

export const signUp = async (data: {
  email: string;
  password: string;
  name: string;
}) => {
  await auth.api.signUpEmail({
    body: {
      email: data.email,
      password: data.password,
      name: data.name,
    },
  });
};
