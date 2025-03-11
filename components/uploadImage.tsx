"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const UploadImage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>();

  const uploadPhoto = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 border-2 h-55 w-full p-1 mb-1.5">
        <Button
          className="border-2 border-dashed w-50 h-50 bg-transparent text-black"
          variant="outline"
        >
          <input
            type="file"
            accept="image/*"
            className="absolute opacity-0 w-50 h-50 cursor-pointer"
            onChange={(e) => uploadPhoto(e.target.files?.[0] || null)}
          />
          <img
            src={imagePreview || undefined}
            className="flex w-full h-full object-contain"
          />
        </Button>

        <div className="border-2 border-dashed w-50 h-50"></div>
      </div>
      <div className="flex justify-center items-center">
        <Button className=" bg-green-600">Enhance</Button>
      </div>
    </div>
  );
};

export default UploadImage;
