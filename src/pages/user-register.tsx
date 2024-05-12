import { UserRegisterForm } from "@/app/authentication/components/user-register-form";
import { Card } from "@/components/ui/card";

const UserRegister = () => {
    return (
        <main className="min-h-screen flex items-center p-4">
            <Card className="mx-auto max-w-[37.75rem] w-full rounded-sm shadow-2xl border-transparent">
                <div className="mt-4 w-full sm:mx-auto">
                    <h2 className="mt-1 px-8 mb-4 text-2xl font-extralight leading-9 tracking-tight text-gray-900">
                        Здравейте!
                    </h2>
                    <p className="px-8 pb-6">Моля попълнете следните полета, за да довършим настройките на вашият акаунт.</p>
                    <UserRegisterForm />
                </div>
            </Card>
        </main>
    );
}

export default UserRegister;