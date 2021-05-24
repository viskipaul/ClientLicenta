import { useCamera } from '@ionic/react-hooks/camera';
import { CameraPhoto, CameraResultType, CameraSource } from '@capacitor/core';
import { createContext, useState } from 'react';
import { useHistory } from 'react-router';
import { base64FromPath, useFilesystem} from '@ionic/react-hooks/filesystem';
import axios, { AxiosResponse } from 'axios';

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const { getPhoto } = useCamera();
  const [photo, setPhoto] = useState<Photo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState([[]]);
  const [failed, setFailed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState();
  const [solution, setSolution] = useState([[]]);
  const history = useHistory();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      correctOrientation: true
    });
    const fileName = new Date().getTime() + '.jpeg';
    const newPhoto = {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
    setPhoto(newPhoto);
    setLoading(true);
    const savedFileImage = await sendPictureRequest(cameraPhoto);
  };

  const sendPictureRequest = async(photo: CameraPhoto) => {
    const formData = new FormData();
    const base64Data = await base64FromPath(photo.webPath!);
    formData.append('image', base64Data);
    axios.post('http://192.168.0.166:5000/upload', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
      setFailed(false); console.log(res); setLoading(false); setResponse(res.data.message); setSolution(res.data.solution);
    }).catch(err => {
      setResponse([[]]);
      setSolution([[]]);
      setFailed(true);
      setLoading(false);
    });
  }

  return {
    photo,
    takePhoto,
    loading,
    response,
    failed,
    errorMessage,
    solution
  };
}
