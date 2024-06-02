import Obligations from "@/app/obligations/containers/obligations";
import OverviewFunds from "@/app/funds/containers/overview";

const Home = () => {

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
        <main className="grid min-h-screen w-full grid-cols-[1fr_auto]">
            <section id="entities">
                <div className="m-4 bg-background shadow-md rounded">
                    <OverviewFunds list={funds} />
                </div>
            </section>
            <section id="obligations">
                <Obligations />
            </section>
        </main>
    )
}

export default Home;