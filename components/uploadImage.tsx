"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const UploadImage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>();
  const [enhancedImage, setEnhancedImage] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadPhoto = async (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setImagePreview(base64Image);

        // Enhance the image locally
        const img = new Image();
        img.src = base64Image;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (ctx) {
            // Resize the image
            const width = 800;
            const height = 800;
            canvas.width = width;
            canvas.height = height;

            // Draw the image onto the canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Apply sharpening filter
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            // Sharpening kernel (3x3 matrix)
            const kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];
            const side = Math.round(Math.sqrt(kernel.length));
            const halfSide = Math.floor(side / 2);

            // Create a copy of the original image data
            const output = new Uint8ClampedArray(data);

            for (let y = 0; y < height; y++) {
              for (let x = 0; x < width; x++) {
                for (let c = 0; c < 3; c++) {
                  // Loop through R, G, B channels
                  let pixelValue = 0;
                  for (let ky = 0; ky < side; ky++) {
                    for (let kx = 0; kx < side; kx++) {
                      const posX = x + kx - halfSide;
                      const posY = y + ky - halfSide;
                      if (
                        posX >= 0 &&
                        posX < width &&
                        posY >= 0 &&
                        posY < height
                      ) {
                        const offset = (posY * width + posX) * 4 + c;
                        pixelValue += data[offset] * kernel[ky * side + kx];
                      }
                    }
                  }
                  const offset = (y * width + x) * 4 + c;
                  output[offset] = Math.min(255, Math.max(0, pixelValue));
                }
              }
            }

            // Copy the sharpened data back to the canvas
            for (let i = 0; i < data.length; i++) {
              data[i] = output[i];
            }
            ctx.putImageData(imageData, 0, 0);

            // Convert the canvas back to a base64 image
            const enhancedImage = canvas.toDataURL("image/jpeg", 0.9); // High-quality JPEG
            setEnhancedImage(enhancedImage);
          }
        };
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
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-b text-green-800">Basic</h1>
      <h2 className="text-4xl font-bold mb-2">Image Enhancer</h2>
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

        <div className="border-2 border-dashed w-50 h-50">
          <img
            src={enhancedImage || undefined}
            className="flex w-full h-full object-contain p-2"
            hidden={!imagePreview}
          />
        </div>
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
