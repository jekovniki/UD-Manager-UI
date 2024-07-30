import { InputBox } from "@/components/input-box";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import LoaderContainer from "@/containers/loader";
import { useForm } from "react-hook-form";
import { useAddObligations } from "../api/use-add-obligations";
import { useState } from "react";

export const AddObligationModal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { mutate, isPending } = useAddObligations();
	/**
	 * I use because I can't invalidate the isSuccess from the react-query
	 * @see: https://github.com/TanStack/query/discussions/1014#discussioncomment-79334
	 */
	const [isSuccess, setSuccess] = useState(false);

	const onSubmit = (data: unknown) => {
		try {
			mutate(data, {
				onSuccess: () => {
					setSuccess(true);
				},
				onError: (error) => console.error(error),
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Dialog>
			<div className="px-4 my-4">
				<DialogTrigger asChild>
					<Button
						type="button"
						className="w-full h-[50px] add-button"
						variant="secondary"
					>
						<i className="ud-plus"></i> Добави Напомняне
					</Button>
				</DialogTrigger>
			</div>
			<DialogContent className="w-[600px] max-w-[90vw]">
				<DialogHeader>
					<DialogTitle>Добави напомняне</DialogTitle>
					<DialogDescription>
						<LoaderContainer
							isLoading={isPending}
							message={
								<p className="text-center mt-4 mb-8">
									Моля изчакайте докато системата добави новото ви задължение.
									Това би следвало да отнеме няколко секунди.
								</p>
							}
						>
							{isSuccess ? (
								<div className="flex justify-around flex-col items-center py-4 w-50 px-4">
									<p className="text-center mb-6">
										<strong>Успешно добавихте ново задължение!</strong>
									</p>
								</div>
							) : (
								<>
									<form onSubmit={handleSubmit(onSubmit)} className="mt-4">
										<InputBox
											id="obligation-name"
											type="text"
											iconClass="ud-text"
											label="Задължение"
											autoComplete="obligation-name"
											placeholder="Име на фонда"
											wrapperClassName="mb-4"
											required
											{...register("obligation-name", {
												required: true,
											})}
										/>
										<InputBox
											id="obligation-description"
											type="text"
											iconClass="ud-text"
											label="Допълнително описание"
											autoComplete="obligation-description"
											placeholder="Подробна информация за задължението"
										/>
										<div className="mt-4">
											{errors?.uic?.message && (
												<p className="text-red-500 text-xs italic">
													{errors?.uic?.message as string}
												</p>
											)}
										</div>
										<DialogFooter className="mt-8">
											<DialogClose asChild>
												<Button variant="secondary" size="lg">
													Отмени
												</Button>
											</DialogClose>
											<Button
												variant="default"
												type="submit"
												size="lg"
												className="font-light text-xs rounded-sm"
											>
												Запази
											</Button>
										</DialogFooter>
									</form>
								</>
							)}
						</LoaderContainer>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
