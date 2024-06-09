// import { useState } from "react";
import React from "react";
import { AssetWizzardStep } from "@/app/funds/components/asset-wizzard-step";
import { Button } from "@/components/ui/button";


const FundAssetsWizzard = () => {
    const useState = React.useState;
    const [currentStep, setCurrentStep] = useState<number>(1);
    console.log(currentStep);
    const incrementStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const decrementStep = () => {
        setCurrentStep(currentStep - 1);
    }


    return (
        <main className="min-h-screen">
            <header className="min-h-[100px] bg-white border-b flex items-center justify-between px-4">
                <AssetWizzardStep step={1} description="СТЪПКА 1" name="Акции" isActive={currentStep === 1} isCompleted={currentStep > 1} />
                <AssetWizzardStep step={2} description="СТЪПКА 2" name="Облигации" isActive={currentStep === 2} isCompleted={currentStep > 2} />
                <AssetWizzardStep step={3} description="СТЪПКА 3" name="Дялове на К.И.С" isActive={currentStep === 3} isCompleted={currentStep > 3} />
                <AssetWizzardStep step={4} description="СТЪПКА 4" name="Други активи" isActive={currentStep === 4} isCompleted={currentStep > 4} />
                <AssetWizzardStep step={5} description="СТЪПКА 5" name="Ограничения" isActive={currentStep === 5} isCompleted={currentStep > 5}/>
            </header>
            <div className="grid fund-wizzard-content-height w-full grid-cols-[1fr_auto]">
                <section id="assets">
                    Left
                </section>
                <section id="form" className="w-[380px] bg-background h-full border-l">
                    <div className="p-4">

                    </div>
                </section>
            </div>
            <footer className="min-h-[110px] bg-white border-t px-4 flex items-center justify-end">
                <div className="flex items-center gap-4">
                    <div className="text-slate-500 text-sm">Стъпка {currentStep} от 5</div>
                    { currentStep > 1 ? <Button variant="secondary" className="min-w-[150px] h-[50px]" onClick={decrementStep}>Назад</Button> : "" }
                    { currentStep === 5 ? <Button variant="default" className="min-w-[150px] h-[50px]" onClick={incrementStep}>Завърши</Button> : <Button variant="default" className="min-w-[150px] h-[50px]" onClick={incrementStep}>Напред</Button>}
                    
                </div>
            </footer>
        </main>
    )
}

export default FundAssetsWizzard;