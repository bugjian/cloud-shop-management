import {SERVER} from '../constants/common';

export const request = (url, method,headers, body) => {
  let isOk;
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Accept': 'application/json',
        ...headers
      },
      body
    })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

