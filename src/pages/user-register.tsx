import { UserRegisterForm } from "@/app/authentication/components/user-register-form";
import { Card } from "@/components/ui/card";

const UserRegister = () => {
    return (
        <main className="min-h-screen flex items-center p-4">
            <Card className="mx-auto max-w-[37.75rem] w-full rounded-sm shadow-2xl border-transparent">
                <div className="mt-4 w-full sm:mx-auto">
                    <UserRegisterForm />
                </div>
            </Card>
        </main>
    );
}

export default UserRegister;