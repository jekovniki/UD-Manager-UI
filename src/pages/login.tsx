import { LoginForm } from "@/app/authentication/components/login-form";

const Login = () => {
    return (
    <main className="min-h-screen">
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 mb-1 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Здравейте!
                </h2>
            </div>

            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm />
            </div>
        </div>
    </main>
    );
}

export default Login;