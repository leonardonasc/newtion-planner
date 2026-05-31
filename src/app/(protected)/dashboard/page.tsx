import { Logout } from "@/components/logout";

export const revalidate = 60;
export default async function Page() {

  return (

    <>
      <h1>Dashboard</h1>
      <Logout />
    </>
  )
}
