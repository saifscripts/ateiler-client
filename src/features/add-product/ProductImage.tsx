import { ChangeEvent } from 'react';
import { MdDelete } from 'react-icons/md';
import { TbPhotoUp } from 'react-icons/tb';
import toBase64 from '../../utils/toBase64';

interface IProductImageProps {
  imageData: string[];
  setImageData: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProductImage = ({ imageData, setImageData }: IProductImageProps) => {
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return;

    const file = e.target.files[0];
    const base64Data = await toBase64(file);
    setImageData([...imageData, base64Data as string]);
    e.target.value = '';
  };

  const handleRemove = (index: number) => {
    const updatedUrls = [...imageData];
    updatedUrls.splice(index, 1);
    setImageData(updatedUrls);
  };

  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">Product Image</h5>
      <div className="grid grid-cols-4 gap-2">
        {imageData.map((url, i) => (
          <div
            key={url}
            style={{ backgroundImage: `url("${url}")` }}
            className="bg-cover bg-center bg-no-repeat rounded-sm relative aspect-square group"
          >
            <div className="hidden group-hover:flex absolute cursor-pointer inset-0 justify-center items-center bg-metal-900 bg-opacity-30">
              <MdDelete
                onClick={() => handleRemove(i)}
                className="text-2xl text-white hover:text-error-300"
              />
            </div>
          </div>
        ))}
        {imageData.length < 4 && (
          <div className="relative border border-dashed border-metal-500 aspect-square flex flex-col gap-1 justify-center items-center rounded-sm cursor-pointer">
            <TbPhotoUp className="cursor-pointer" />
            <p className="text-xs text-primary-400 cursor-pointer">
              Upload Image
            </p>
            <input
              onChange={handleUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
