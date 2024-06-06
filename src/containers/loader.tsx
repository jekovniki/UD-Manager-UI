import { Loader } from "@/components/loading";
import { ReactNode } from "react";


const LoaderContainer = ({ isLoading, message, children }: { isLoading: boolean, message: ReactNode | undefined, children: ReactNode }) => {
    return (
        <>
            { isLoading ? <div className="flex justify-around flex-col items-center py-4 px-4 pb-8">
                { message ? <div>{message}</div> : "" }
                <Loader />
            </div>
                :
                <>
                    {children}
                </>
            }
        </>
    )
}

export default LoaderContainer;