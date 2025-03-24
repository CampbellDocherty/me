import { useEffect, useState } from 'react';
import { getFiles } from '../../firebase';

export const useGetImages = () => {
  const [images, setImages] = useState<HTMLImageElement[] | null>(null);

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      const images = files.map((file) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = file.downloadUrl;
          img.alt = file.metadata?.customMetadata?.imageName || '';
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });
      const imgs = (await Promise.all(images)) as HTMLImageElement[];
      setImages(imgs);
    };

    get();
  }, []);

  return { images };
};
