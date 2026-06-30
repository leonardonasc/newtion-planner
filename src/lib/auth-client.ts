import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  // todo: mudar para a url do backend quando for para produção
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

