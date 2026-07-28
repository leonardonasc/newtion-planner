
interface MainNavbarProps {
   user: any
}

export default function MainNavbar({ user }: MainNavbarProps) {
    return (
        <div className="bg-white shadow-md w-full h-10">
            {user?.name}
        </div>
    )
}
