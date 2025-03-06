import { Button } from "@/components/ui/button";

const UploadImage = () => {
  return (
    <div className="overflow-hidden flex">
      <Button
        className="border-2 border-dashed w-50 h-50 bg-sky-50 text-black"
        variant="outline"
      >
        Upload file here
        <input
          type="file"
          accept="image/*"
          className="absolute opacity-0 w-50 h-50 cursor-pointer"
        />
      </Button>
    </div>
  );
};

export default UploadImage;
