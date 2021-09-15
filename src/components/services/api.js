import axios from "axios";
/*eslint-disable no-unused-vars*/
const URL = "https://health-balance-api.herokuapp.com/api/";

let token = null;
let user = null;
export function loginAxios(email, password) {
  const serverPrimise = axios.post(URL + "auth/login", {
    email: email,
    password: password,
  });
  const UserPromise = serverPrimise.then(function(response) {
    token = response.data.accessToken;
    user = response.data.user;
    return UserPromise;
  });
}

//Register form//
//let token = null;
//let user = null;
export function  registerAxios(name,lastName ,email, password) {
  const serverPrimise = axios.post(URL + "auth​/register", {
    name: name,
    lastName:lastName,
    email: email,
    password: password,
  });
  const UserPromise = serverPrimise.then(function(response) {
    token = response.data.accessToken;
    user = response.data.user;
    return UserPromise;
  });
}

/*export function loginAxios(email, password) {
    return axios.post(URL + "auth/login", {
        "email": email,
        "password": password
    })
        .then(function (response) {
            token = response.accessToken
            user = response.user
        })
}*/
/*
export function login(email, password) {
    return fetch(URL + "auth/login", {
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        }),

    })
        .then(response => {
            if (!response.ok) {
                let err = new Error("HTTP status code:" + response.status)
                err.response = response
                err.status = response.status
                throw err
            }
            return response.json()

        })
        .then(body => {
            token = body.accessToken
            user = body.user
        })

    .catch((error) => {
      console.error('Error:', error);
    });
}*/
