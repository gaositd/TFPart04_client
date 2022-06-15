import axios from "axios";

export const sendPassword= (mail, password) =>{
  axios.put(`https://54.227.99.93:3001/password/${mail}/${password}`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

export const sendMail= (mail) =>{
  axios.get(`https://54.227.99.93:3001/password/${mail}`)
    .then(res => res.data)
    .catch(err => console.error(err));
};