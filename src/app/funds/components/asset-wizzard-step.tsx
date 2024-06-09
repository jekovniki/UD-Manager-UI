
type WizzardStep = {
    step: number, 
    description: string, 
    name: string, 
    isActive: boolean
}

export const AssetWizzardStep = ({ step, description, name, isActive = false } : WizzardStep) => {
    const activeClasses = isActive ? 'text-primary' : 'text-slate-200';
    
    return (
        <div className="flex items-center gap-2">
            <div className={`text-5xl font-extralight ${activeClasses}`}>{ step > 9 ? step : '0' + step }</div>
            <div>
                <div className="text-xs leading-none font-extralight text-slate-500">{ description }</div>
                <div className="text-xl leading-none text-slate-900 font-bold">{ name }</div>
            </div>
        </div>
    )
}