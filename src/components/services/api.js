import axios from "axios";
/*eslint-disable no-unused-vars*/
const URL = "https://health-balance-api.herokuapp.com/api/";

let token = null;
let user = null;

//Login form////POST//

export function loginAxios(email, password) {
  return axios.post(URL + "auth/login", {
    email: email,
    password: password,
  }).then((response) => {
    token = response.data.accessToken;
    user = response.data.user;
    alert(token)
  });

}
//---------------------User--------------------------------//
//Register form////POST//

export function registerAxios(name, lastName, email, password) {
  const serverPromise = axios.post(URL + "auth/register", {
    firstName: name,
    lastName: lastName,
    email: email,
    password: password,

  });
  const UserPromise = serverPromise.then(function (response) {
    token = response.data.accessToken;
    user = response.data.user;
    return user;
  });
  return UserPromise;

}
//Register form////GET//
/*created() {
  axios.get('https://jsonplaceholder.typicode.com/users').then( res => {
    this.serverDatas = res.data
  }).catch(e => {
    alert(e)
  }).finally(()=>{
    //alert("通信完了")
  })
}*/

/*export function getRegisterAxios(name, lastName, email, password) {
  const serverPromise = axios.get(URL +"auth/register" , {
    firstName:name,
    lastName: lastName,
    email: email,
    password: password,
  });
  const UserPromise = serverPromise.then(function (response) {
    token = response.data.accessToken;
    user = response.data.user;
    return user;
  });
  return UserPromise;

*/


//Calculator//

export function calculateAxios(name, lastName, height, weight, age) {
  const serverPrimise = axios.put(URL + "user/{id}", {
    firstName: name,
    lastName: lastName,
    height: height,
    weight: weight,
    age: age,
  });
  const UserPromise = serverPrimise.then(function (response) {
    /*password = response.data.accessToken;
    email = response.data.user.email;
    name = response.data.user.firstName;
    lastName = response.data.user.lastName;
    return email*/
  });
  return UserPromise;

}
//---------------------User END--------------------------------//

//---------------------FOOD--------------------------------//
//FOOD ITEM////POST//

export function foodItemsAxios(name, description, calories) {
  alert(URL + "​food-items")
  alert(token)
 return axios.post(URL + "​food-items", {
    name: name,
    description: description,
    calories: Number(calories)
  },
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"

      }
    });
  /*const UserPromise = serverPromise.then(function (response) {
    token = response.data.accessToken;
    alert(token)
    user = response.data.user;
    //return user;
  });
  return UserPromise;*/
}
//---------------------FOOD END--------------------------------//





















//---------------------AXIOS&FETCH--------------------------------//
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
//---------------------AXIOS&FETCH--------------------------------