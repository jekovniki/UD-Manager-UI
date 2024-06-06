import { LoginForm } from "@/app/authentication/components/login-form";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";

const Login = () => {
    return (
        <main className="min-h-screen flex items-center p-4">
            <Card className="mx-auto max-w-[27rem] w-full p-4 rounded-sm shadow-2xl border-transparent">
                <LoginForm />
            </Card>
            <Toaster />
        </main>
    );
}

export default Login;