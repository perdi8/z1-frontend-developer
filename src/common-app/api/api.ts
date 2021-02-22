import Axios, { AxiosError } from 'axios';

export const service = (imgSrc:string) => Axios.post("https://front-exercise.z1.digital/evaluations", {
        imgSrc,
      }).then(
        (response) => {
         return response.data.summary;
        },
        ((error:AxiosError) => {
          switch (error.response?.status) {
            case 403:
              throw 'Too much front-exercise.z1.digital API calls!'
            case 503: 
              throw 'Unavailable service'
          }
        }
      ));