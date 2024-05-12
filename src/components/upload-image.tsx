export const UploadImage = ({ handleFile, ...props }: { handleFile: any }) => {

    return (
        <>
            <label 
                htmlFor="file"
                className="bg-secondary border-dashed border-2 w-full h-full flex flex-center flex-col text-center cursor-pointer justify-center" 
                {...props}>
                <i className="ud-image text-2xl"></i>
                <p className="text-xs">Лого</p>
                <p className="text-base">150x150px</p>
            </label>
            <input
                id="file"
                type="file"
                className="hidden"
            />
        </>
    )
}