import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  // todo: mudar para a url do backend quando for para produção
  baseURL: "http://localhost:3000",
});

