import { Camera, UserRound } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const ImageDropzone = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    setPreview(URL.createObjectURL(file));

    console.log("siap upload");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Hanya terima gambar
    multiple: false, // Cuma boleh satu gambar (buat profil)
  });

  console.log(preview);

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? "border-violet-500 bg-indigo-50" : "border-gray-300 hover:border-violet-400"}`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col justify-center items-center gap-y-2">
          <div className="relative">
            <div className="relative border-4 border-slate-100 bg-gray-300 w-28 h-28 rounded-full overflow-hidden grid place-items-center select-none">
              {preview ? (
                <Image
                  src={""}
                  alt="profile picture"
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <UserRound
                  size={100}
                  strokeWidth={1}
                  fill="#6a7282"
                  className="absolute -bottom-3.5 text-gray-300"
                />
              )}
            </div>
            <span className="absolute bottom-0 -right-2 bg-slate-100 rounded-full p-2 cursor-pointer shadow-md">
              <Camera
                size={20}
                strokeWidth={1.5}
                fill="#7f22fe"
                className="text-slate-200"
              />
            </span>
          </div>
          <p className="text-gray-600 font-medium text-sm">
            {isDragActive
              ? "Drop your image here..."
              : "Click or drag and drop to upload a photo."}
          </p>
          <p className="text-xs text-gray-400">
            Formats: JPG, PNG (maximum 2 MB)
          </p>
        </div>
      </div>
    </div>
  );
};
