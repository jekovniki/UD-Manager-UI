import { useState } from "react";
import { AssetWizzardStep } from "@/app/funds/components/asset-wizzard-step";
import { Button } from "@/components/ui/button";
import { InputBox } from "@/components/input-box";
import { useForm } from "react-hook-form";

/**
 * @todo: refactor this when you start implementing the API (separate into components), because currently it's like 
 * Scary movie, but worse.
 */
const FundAssetsWizzard = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [currentTab, setCurrentTab] = useState<'file' | 'manual'>('file');
    const { register } = useForm();


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
                    <nav>
                        <ul key="wizzard-tabs" className="flex items-center h-[80px]">
                            <li 
                                key="file-add" 
                                className={`flex-1 h-full cursor-pointer flex items-center justify-around text-sm duration-500 ${currentTab === 'file' ? 'font-bold text-black border-black border-b-4' : 'text-slate-500 border-b border-slate-200'}`}
                                onClick={() => {setCurrentTab('file')}}
                                >
                                Добави чрез файл
                            </li>
                            <li 
                                key="manual-add" 
                                className={`flex-1 h-full cursor-pointer flex items-center justify-around text-sm duration-500 ${currentTab === 'manual' ? 'font-bold text-black border-black border-b-4' : 'text-slate-500 border-b border-slate-200'}`}
                                onClick={() => {setCurrentTab('manual')}}
                                >
                                Добави ръчно
                            </li>
                        </ul>
                    </nav>
                    <div className="pt-8 px-4">
                        <InputBox id="asset-isin"
                            type="asset-isin"
                            wrapperClassName="mb-4"
                            iconClass="ud-text"
                            label="Борсов код"
                            autoComplete="asset-isin"
                            placeholder="ISIN"
                            required
                            {...register('asset-isin', {
                                required: true
                            })}/>
                        <InputBox id="asset-name"
                            type="asset-name"
                            wrapperClassName="mb-4"
                            iconClass="ud-text"
                            label="Наименование"
                            autoComplete="asset-name"
                            placeholder="Напр. ШЕЛЛИ ГРУП АД"
                            required
                            {...register('asset-name', {
                                required: true
                            })}/>
                        <InputBox id="asset-price"
                            type="asset-price"
                            wrapperClassName="mb-4"
                            iconClass="ud-price-tag"
                            label="Цена за брой(лв.)"
                            autoComplete="asset-price"
                            placeholder="Напр. 60.00лв."
                            required
                            {...register('asset-price', {
                                required: true
                            })}/>
                        <InputBox id="asset-number"
                            type="asset-number"
                            iconClass="ud-add-list"
                            label="Цена за брой(лв.)"
                            autoComplete="asset-number"
                            placeholder="Напр. 10 000"
                            required
                            {...register('asset-number', {
                                required: true
                            })}/>
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