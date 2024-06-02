import { Button } from "@/components/ui/button";

const OverviewFunds = ({ list } : { list: Record<string, any>[]}) => {

    return (
        <>
            <div className="funds-section flex justify-between items-center px-4 py-4">
                <div>
                    <h2 className="text-lg font-normal text-sky-900 mb-none">Фондове</h2>
                    <p className="text-sm label-color font-light">Създайте и менажирайте фондове</p>
                </div>
                <div>
                    <Button variant="default" size='lg' className="font-light text-xs rounded-sm">
                        Създай фонд
                    </Button>
                </div>
            </div>
        </>

    )
}

export default OverviewFunds;