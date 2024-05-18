import { CompanyRegisterForm } from "@/app/authentication/components/company-register-form";
import { Card } from "@/components/ui/card";

const CompanyRegister = () => {
    return (
        <main className="min-h-screen flex items-center p-4">
            <Card className="mx-auto max-w-[55rem] w-full rounded-sm shadow-2xl border-transparent">
                <div className="mt-1 w-full sm:mx-auto">
                    <CompanyRegisterForm />
                </div>
            </Card>
        </main>
    );
}

export default CompanyRegister;