import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Tooltip, ArcElement);

export const PieChart = () => {
	const dummyData = {
		labels: [
			"Пари и депозити",
			"Корпоративни облигации",
			"Акции",
			"Дялове на К.О.И",
			"Вземания",
			"Други активи",
		],
		datasets: [
			{
				label: "Сума в лева",
				data: [2107753, 16785895, 33748813, 6085723, 74256, 4302981],
				backgroundColor: [
					"rgba(249, 199, 79, 1)",
					"rgba(230, 109, 71, 1)",
					"rgba(40, 207, 177, 1)",
					"rgba(50, 170, 237, 1)",
					"rgba(139, 94, 213, 1)",
					"rgba(144, 190, 109, 1)",
				],
				hoverOffset: 4,
			},
		],
	};

	return (
		<Pie
			data={dummyData}
			options={{
				responsive: true,
			}}
		/>
	);
};
