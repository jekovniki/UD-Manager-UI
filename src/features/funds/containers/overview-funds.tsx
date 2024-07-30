import { FundOverviewList } from "../components/fund-overview-list";
import { AddFundModal } from "../components/add-fund-modal";

const OverviewFunds = () => {
    const funds = [{
        id: 1, // will be uuid,
        title: 'Expat Gold',
        description: 'GLDX - Високорисков Фонд',
        performance: 3.2 // @todo: this will not be a string 100%,
    }, {
        id: 2,
        title: 'Expat Poland WIG20 UCITS ETF',
        description: 'PLX - Високорисков Фонд',
        performance: -2.4
    }, {
        id: 3,
        title: 'Expat Czech PX UCITS ETF',
        description: 'CZX - Високорисков Фонд',
        performance: -3.2
    }, {
        id: 4,
        title: 'Expat Slovakia SAX UCITS ETF',
        description: 'SK9A - Високорисков Фонд',
        performance: 3.1,
        assets: [{
            name: 'Пари и депозити',
            amount: 2107753,
            currency: 'BGN',
            percantage: 12
        }, {
            name: 'Корпоративни облигации',
            amount: 16785895,
            currency: 'BGN',
            percantage: 20
        }, {
            name: 'Акции',
            amount: 33748895,
            currency: 'BGN',
            percantage: 26
        }, {
            name: 'Дялове на КОИ',
            amount: 6085723,
            currency: 'BGN',
            percantage: 26
        }, {
            name: 'Вземания',
            amount: 74256,
            currency: 'BGN',
            percantage: 1
        }, {
            name: 'Други активи',
            amount: 4302981,
            currency: 'BGN',
            percantage: 9
        }]
    }, {
        id: 5,
        title: 'Activa Asset Management',
        description: 'AATV - Високодоходен Фонд',
        performance: 0
    }]

    return (
        <>
            <div className="funds-section flex justify-between items-center px-4 py-4">
                <div>
                    <h2 className="text-lg font-normal text-sky-900 mb-none">Фондове</h2>
                    <p className="text-sm label-color font-light">Създайте и менажирайте фондове</p>
                </div>
                <div>
                    <AddFundModal />
                </div>
            </div>
            <div className="funds-section flex justify-between items-center px-4 py-4">
                <FundOverviewList list={funds} />
            </div>
        </>

    )
}

export default OverviewFunds;