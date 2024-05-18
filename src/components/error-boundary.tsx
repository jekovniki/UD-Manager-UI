import { FallbackProps } from "react-error-boundary"


export const DefaultErrorBoundary = (props: FallbackProps) => {
    const { error, resetErrorBoundary } = props;
    return (
        <div>
            <div className="text-sm">
                Съжаляваме, но апликацията временно има проблем. Моля съобщете ни и ще се опитаме 
                да го отстраним в най-кратък срок.
            </div>
            <div className="mt-2 text-xl">Причина за грешката: { error.message }</div>
            <button className="mt-4" onClick={resetErrorBoundary}>Презареди страницата</button>
        </div>

    )
}