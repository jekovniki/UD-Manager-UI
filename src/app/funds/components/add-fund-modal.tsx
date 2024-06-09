import { InputBox } from "@/components/input-box"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useAddFund } from "../api/use-add-fund";
import LoaderContainer from "@/containers/loader";
import { Link } from "react-router-dom";

export const ROLES = [{
    key: "asd",
    value: 'Администратор',
    label: 'Администратор'
}, {
    key: 'dsdsf',
    value: 'a.stoyanova@ud-manager.com',
    label: 'Служител'
}]

export const AddFundModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate = useNavigate();
    console.error(errors);
    const { mutate, isPending, isSuccess } = useAddFund();
    const onSubmit = (data: any) => {
        try {
            mutate(data, {
                onSuccess: () => {
                    console.log('success');
                },
                onError: error => console.error(error)
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size='lg' className="font-light text-xs rounded-sm">
                    Създай фонд
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[800px] max-w-[90vw]">
                <LoaderContainer isLoading={isPending} message={
                    <p className="text-center mt-4 mb-8">Моля изчакайте докато системата регистрира фонда ви. Това би следвало да отнеме няколко секунди.</p>
                }>
                    {isSuccess ?
                        <div className="flex justify-around flex-col items-center py-4 w-50 px-4">
                            <p className="text-center mb-6"><strong>Успешно добавихте нов фонд!</strong></p>
                            <p className="text-center mb-2">Ако желаете можете да продължите с регистрацията и в следващите стъпки да добавите информация за активите (Акции, Облигации, Пари и депозити и т.н.) и ограниченията на фонда. </p>
                            <p className="text-center mb-2">Имате възможност и да пропуснете тази стъпка и да добавите активите и задълженията на по-късен етап.</p>
                            <div className="flex items-center gap-2">
                                <DialogClose asChild>
                                    <Button variant="secondary" size='lg'>
                                        Пропусни
                                    </Button>
                                </DialogClose>
                                <Link className="text-white h-[39px] flex items-center duration-500 bg-primary border-2 border-primary px-4 rounded hover:bg-white hover:text-primary" to="/:id/funds/add">Добави активи и задължения</Link>
                            </div>
                        </div> :
                        <>
                            <DialogHeader>
                                <DialogTitle>Нов фонд</DialogTitle>
                                <DialogDescription>
                                    Попълнете формата, за да добавите КИС или НИФ.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <InputBox
                                    id="fund-name"
                                    type="text"
                                    iconClass="ud-text"
                                    label="Наименование"
                                    autoComplete="fund-name"
                                    placeholder="Име на фонда"
                                    wrapperClassName="mb-4"
                                    required
                                    {...register('fund-name', {
                                        required: true,
                                    })}
                                />
                                <InputBox
                                    id="fund-description"
                                    type="text"
                                    iconClass="ud-text"
                                    label="Допълнително описание"
                                    autoComplete="fund-description"
                                    placeholder="Описание за КИС, например - Високорисков Фонд"
                                />
                                <div className="flex mt-4 gap-4">
                                    <InputBox
                                        id="uic"
                                        type="text"
                                        iconClass="ud-wallet"
                                        label="ЕИК"
                                        autoComplete="uic"
                                        placeholder="ЕИК на компанията"
                                        wrapperClassName="w-full"
                                        required
                                        {...register('uic', {
                                            required: true,
                                            minLength: {
                                                value: 5,
                                                message: "ЕИК номера трябва да съдържа поне 5 цифри"
                                            },
                                        })}
                                    />
                                    <InputBox
                                        id="representative"
                                        type='text'
                                        iconClass="ud-get-cash"
                                        label="Представител"
                                        wrapperClassName="w-full"
                                        autoComplete="representative"
                                        placeholder="Три имена на председателя"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    {errors?.uic?.message && <p className="text-red-500 text-xs italic">{errors?.uic?.message as string}</p>}
                                </div>
                                <DialogFooter className="mt-8">
                                    <DialogClose asChild>
                                        <Button variant="secondary" size='lg'>
                                            Отмени
                                        </Button>
                                    </DialogClose>
                                    <Button variant="default" type="submit" size='lg' className="font-light text-xs rounded-sm">Създай фонд</Button>
                                </DialogFooter>
                            </form>
                        </>}
                </LoaderContainer>
            </DialogContent>

        </Dialog>
    )
}