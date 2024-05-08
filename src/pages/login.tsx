import { LoginForm } from "@/app/authentication/components/login-form";
import { Card } from "@/components/ui/card";

const Login = () => {
    return (
        <main className="min-h-screen flex items-center">
            <Card className="mx-auto min-w-96 p-4 rounded-sm shadow-2xl border-transparent">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 mb-6 text-2xl font-extralight leading-9 tracking-tight text-gray-900">
                        Здравейте!
                    </h2>
                </div>
                <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />
                </div>
                <div className="text-right mt-8">
                    <a href="" className="color-link">Забравена парола?</a>
                </div>
            </Card>
        </main>
    );
}

export default Login;