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
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size='lg' className="font-light text-xs rounded-sm">
                    Създай фонд
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[800px] max-w-[90vw]">
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
                    <DialogFooter className="mt-8">
                        <DialogClose asChild>
                            <Button variant="secondary" size='lg'>
                                Отмени
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button variant="default" size='lg' className="font-light text-xs rounded-sm">Създай фонд</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>

            </DialogContent>

        </Dialog>
    )
}