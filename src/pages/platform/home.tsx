import Obligations from "@/features/obligations/containers/obligations";
import OverviewFunds from "@/features/funds/containers/overview-funds";

const Home = () => {
	return (
		<main className="grid min-h-screen w-full grid-cols-[1fr_auto]">
			<section id="entities">
				<div className="m-4 bg-background shadow-md rounded">
					<OverviewFunds />
				</div>
			</section>
			<section id="obligations" className="w-[320px]">
				<Obligations />
			</section>
		</main>
	);
};

export default Home;
