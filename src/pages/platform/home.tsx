import Obligations from "@/app/obligations/containers/obligations";

const Home = () => {

    return (
        <main className="grid min-h-screen w-full grid-cols-[1fr_auto]">
            <div>
                <h1>Home</h1>
            </div>
            <div className="w-[280px]">
                <Obligations />
            </div>
        </main>
    )
}

export default Home;