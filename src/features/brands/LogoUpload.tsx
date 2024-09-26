import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from 'keep-react';
import { Folder } from 'phosphor-react';
import { Dispatch, useCallback } from 'react';
import toBase64 from '../../utils/toBase64';

interface ILogoUploadProps {
  file: string;
  setFile: Dispatch<React.SetStateAction<string>>;
}

export const LogoUpload = ({ file, setFile }: ILogoUploadProps) => {
  const onDrop = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      const base64Data = await toBase64(file);
      setFile(base64Data as string);
    },
    [setFile]
  );

  return (
    <Upload options={{ onDrop }}>
      {!file && (
        <UploadBody>
          <UploadIcon>
            <Folder />
          </UploadIcon>
          <UploadText>
            <p className="text-body-3 font-medium text-metal-600 dark:text-white">
              Drag & Drop or Choose File to Upload
            </p>
            <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
              PNG, JPEG, JPG and other image formats, up to 50 MB.
            </p>
          </UploadText>
        </UploadBody>
      )}
      <UploadFooter isFileExists={Boolean(file)}>
        <img src={file} className="rounded-lg" alt="" />
      </UploadFooter>
    </Upload>
  );
};
