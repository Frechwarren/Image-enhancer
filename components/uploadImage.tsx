"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const UploadImage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadPhoto = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        reader.abort();
      };
      reader.readAsDataURL(file);
    }
  };

  const cancelUpload = () => {
    setImagePreview(null);

    // Reset the file input field
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 border-2 h-55 w-full p-1 mb-1.5">
        <Button
          className="border-2 border-dashed w-50 h-50 bg-transparent text-gray-400 hover:text-gray-600"
          variant="outline"
        >
          {!imagePreview ? " Upload photo here" : ""}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="absolute opacity-0 w-50 h-50 cursor-pointer"
            onChange={(e) => uploadPhoto(e.target.files?.[0] || null)}
          />
          <img
            src={imagePreview || undefined}
            className="flex w-full h-full object-contain"
            hidden={!imagePreview}
          />
        </Button>

        <div className="border-2 border-dashed w-50 h-50"></div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button
          className=" bg-red-800"
          hidden={!imagePreview}
          onClick={cancelUpload}
        >
          Cancel
        </Button>
        <Button className=" bg-green-800">Enhance</Button>
      </div>
    </div>
  );
};

export default UploadImage;
