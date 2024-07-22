import { Link } from "react-router-dom";

export const SuccessUserRegistratonTemplate = () => {
	return (
		<div className="flex justify-around flex-col items-center py-4 w-50 px-4">
			<p className="text-center mb-6">
				<strong>Успешно завършване на регистрацията!</strong>
			</p>
			<p className="text-center mb-2">
				Може да се върнете на началната страница и да се впишете с мейла и паролата, която току-що въведохте!
			</p>
			<p className="text-center mb-2">
				<Link to="/">Вписване</Link>
			</p>
		</div>
	);
};
