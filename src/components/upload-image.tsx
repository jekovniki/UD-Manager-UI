import { useState } from "react";

export const UploadImage = ({ handleFile, ...props }: { handleFile: any }) => {
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    const handlePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };
    
    return (
        <>
            <label
                htmlFor="file"
                className="bg-secondary border-dashed border-2 w-full h-full flex flex-center flex-col text-center cursor-pointer justify-center"
                {...props}>
                { preview ? 
                    <div className="w-full h-full flex flex-center" style={{ outline: "2px solid #fff", background: "#fff"}}>
                        <img src={preview.toString()} alt="Preview" className="max-h-40 mb-2 object-contain" />
                    </div> :
                    <>
                        <i className="ud-image text-2xl"></i>
                        <p className="text-xs">Лого</p>
                        <p className="text-base">150x150px</p>
                    </>
                }
            </label>
            <input
                id="file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handlePreview}
            />
        </>
    )
}