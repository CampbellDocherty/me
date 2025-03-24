import { initializeApp } from 'firebase/app';
import {
  // eslint-disable-next-line import/named
  FullMetadata,
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
  uploadString,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBFgMMvG9fLvB6zg3uUlB0D_cSsil4mdQ',
  authDomain: 'portfolio-95586.firebaseapp.com',
  projectId: 'portfolio-95586',
  storageBucket: 'portfolio-95586.firebasestorage.app',
  messagingSenderId: '1046723134557',
  appId: '1:1046723134557:web:b3a22c9c527d50710af9b4',
};

export const app = initializeApp(firebaseConfig);

const storage = getStorage();

const rootDir = 'visitors/';
const listRef = ref(storage, rootDir);

export type FirebaseStorageContent = {
  downloadUrl: string;
  metadata: FullMetadata;
};

export const getFiles = async () => {
  const res = await listAll(listRef);
  const promisedFiles = res.items.map(async (item) => {
    const storageRef = ref(storage, item.fullPath);
    const downloadUrl = await getDownloadURL(storageRef);
    const metadata = await getMetadata(storageRef);
    return {
      downloadUrl,
      metadata,
    } as FirebaseStorageContent;
  });
  const files: FirebaseStorageContent[] = await Promise.all(promisedFiles);
  return files;
};

export async function uploadBase64Image(
  base64Image: string,
  visitorName: string,
  id: string,
) {
  const storageRef = ref(storage, `${rootDir}/${id}`);

  const metadata = {
    customMetadata: {
      imageName: visitorName,
    },
  };

  await uploadString(storageRef, base64Image, 'data_url', metadata);

  return true;
}
