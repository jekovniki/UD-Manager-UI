
type WizzardStep = {
    step: number, 
    description: string, 
    name: string, 
    isActive?: boolean,
    isCompleted?: boolean
}

export const AssetWizzardStep = ({ step, description, name, isActive = false, isCompleted = false } : WizzardStep) => {
    const activeClasses = isActive || isCompleted ? 'text-primary' : 'text-slate-200';
    const completedClassesComponent = isCompleted ? "gap-1" : "gap-2";
    const completedClassesDescription = isCompleted ? 'text-primary' :  'text-slate-500';
    const completedClassesName = isCompleted ? 'text-primary' :  'text-slate-900';

    return (
        <div className={`flex items-center duration-500 ${completedClassesComponent}`}>
            <div className={`text-5xl font-extralight duration-500 ${activeClasses}`}>{ step > 9 ? step : '0' + step }</div>
            <div>
                <div className={`text-xs leading-none font-extralight ${completedClassesDescription}`}>{ description }</div>
                <div className={`text-xl leading-none font-bold ${completedClassesName}`}>{ name }</div>
            </div>
        </div>
    )
}