import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const AddObligationModal = () => {

    return (
        <Dialog>
            <div className="px-4 my-4">
                <DialogTrigger asChild>
                    <Button type="button" className="w-full h-[50px] add-button" variant="secondary"><i className="ud-plus"></i> Добави Напомняне</Button>
                </DialogTrigger>
            </div>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Добави задължение</DialogTitle>
                    <DialogDescription>
                        Форма, която да добавя задължения
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}