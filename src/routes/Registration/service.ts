import { AxiosResquestError, IUserData } from 'greenpeace';
import {ApiCall} from '../../utils/apiCall';

export interface IResponse {
  submitted: boolean;
  post_id?: number;
}

export const submitData = async  (data?: IUserData, refParam = `${process.env.REACT_APP_DEFAULT_REF_PARAM}`): Promise<IResponse> => {

  let formData = new FormData();

  formData.append('form_id', `${process.env.REACT_APP_FORM_ID}`);
  formData.append('ref', `${refParam}`);

  if(data) {
    for(const field in Object.keys(data)) {
      if(field) {
        formData.append(Object.keys(data)[field], Object.values(data)[field]);
      }
    }
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const response = await ApiCall<AxiosResquestError | any>({
    url: 'procesar_cupon.php',
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params: {},
  });

  if(response.error) {
    return {
      submitted: false,
    }
  } else {
    return {
      submitted: true,
    };
=======
  // const response = await ApiCall<AxiosResquestError | any>({
  //   url: 'procesar_cupon_en_pasos_ajax.php',
  //   method: 'POST',
  //   data: formData,
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   },
  //   params: {},
  // });

=======
  // const response = await ApiCall<AxiosResquestError | any>({
  //   url: 'procesar_cupon_en_pasos_ajax.php',
  //   method: 'POST',
  //   data: formData,
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   },
  //   params: {},
  // });

>>>>>>> Stashed changes
  // if(response.error) {
  //   return {
  //     submitted: false,
  //   }
  // } else {
  //   return {
  //     submitted: true,
  //     post_id: response.post_id || post_id,
  //   };
  // }
  return {
    submitted: true,
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }
};

export const submitDataWithSteps = async  (data?: IUserData, post_id?: number, refParam = `${process.env.REACT_APP_DEFAULT_REF_PARAM}`): Promise<IResponse> => {

  let formData = new FormData();
  formData.append('partial_post_id', `${post_id}`);
  formData.append('form_id', `${process.env.REACT_APP_FORM_ID}`);
  formData.append('ref', `${refParam}`);

  if(data) {
    for(const field in Object.keys(data)) {
      if(field) {
        formData.append(Object.keys(data)[field], Object.values(data)[field]);
      }
    }
  }
console.log(formData.get('monto'));
  const response = await ApiCall<AxiosResquestError | any>({
    url: 'procesar_cupon_en_pasos_ajax.php',
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params: {},
  });

  if(response.error) {
    return {
      submitted: false,
    }
  } else {
    return {
      submitted: true,
      post_id: response.post_id || post_id,
    };
  }
};

