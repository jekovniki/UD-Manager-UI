import { Button } from "@/components/ui/button";
import { FundOverviewList } from "../components/fund-overview-list";

const OverviewFunds = () => {
    const funds = [{
        id: 1, // will be uuid,
        title: 'Expat Gold',
        description: 'GLDX - Високорисков Фонд',
        performance: '+ 3.2%' // @todo: this will not be a string 100%,
    }, {
        id: 2,
        title: 'Expat Poland WIG20 UCITS ETF',
        description: 'PLX - Високорисков Фонд',
        performance: '- 2.4%'
    }, {
        id: 3,
        title: 'Expat Czech PX UCITS ETF',
        description: 'CZX - Високорисков Фонд',
        performance: '- 3.2%'
    }, {
        id: 4,
        title: 'Expat Slovakia SAX UCITS ETF',
        description: 'SK9A - Високорисков Фонд',
        performance: '+ 3.1%'
    }]

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
            <div className="funds-section flex justify-between items-center px-4 py-4">
                <FundOverviewList list={funds} />
            </div>
        </>

    )
}

export default OverviewFunds;