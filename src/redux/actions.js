import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const BY_NAME = "BY_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const PAGINATION = "PAGINATION";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const PERMISSION = "PERMISSION";
export const CREATEREVIEW = "CREATEREVIEW";
export const MODIFYPRODUCT = "MODIFYPRODUCT";
export const LOADINGIMAGE = "LOADINGIMAGE";
export const CREATE_ORDER = "CREATE_ORDER";

export const getProducts = () => {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/product/all`)
      // return axios.get(`/product/all`)
      .then(resp => dispatch({ type: GET_PRODUCTS, payload: resp.data }))
      .catch(error => console.log('Action error in getProducts: ', error))
  }
}

export const getProductById = (id) => {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/product/${id}`)
      // return axios.get(`/product/${id}`)
      .then(resp => dispatch({ type: GET_PRODUCT_ID, payload: resp.data }))
      .catch(error => console.log('Action error in getProductById: ', error))
  }
}

export function byName(name) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/product/name?name=${name}`)
      // return axios.get(`/product/name?name=${name}`)
      .then(resp => dispatch({ type: BY_NAME, payload: resp.data }))
      .catch(error => console.log('Action error in byName: ', error))
  }
}

export function filterByCategory(category) {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  };
};

export function filterByPrice(optionSelected) {
  return {
    type: FILTER_BY_PRICE,
    payload: optionSelected
  };
};

export function createCategory(category) {
  return function () {
    return axios.post("http://localhost:3001/category", category)
      // return axios.post("/category", category)
      .then(alert('Category created successfully!'))
      .catch(error => console.log('Action error in createCategory: ', error))
  };
};

export const getCategories = () => {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/category`)
      // return axios.get(`/category`)
      .then(resp => dispatch({ type: GET_CATEGORIES, payload: resp.data }))
      .catch(error => console('Action error in getCategories: ', error))
  }
}

export const pagination = (pageNumber) => {
  return {
    type: PAGINATION,
    payload: pageNumber
  };
};

export function createProduct(product) {
  return function (dispatch) {
    console.log(product)
    try {
      return axios.post("http://localhost:3001/product", product)
        // return axios.post("/product", product)
        .then(res => {
          alert('Product created Successfully');
          dispatch({
            type: CREATE_PRODUCT,
            payload: res.data
          })
        }).catch(error => {
          if (error.message === 'Request failed with status code 304') {
            alert('The product already exists in the database');
          } else {
            alert(error.message)
          }
        })
    } catch (err) {
      console.log('Action error in createProduct: ', err.message)
    };
  };
};

export function getUsers() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/user`)
      .then(resp => dispatch({ type: GET_USERS, payload: resp.data }))
      .catch(error => console.log('Action error in getProducts: ', error))
  }
}

export function signUp(user) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/user?email=${user.email}`)
      .then(resp => {
        if (resp.data.length) {
          return alert('The email is already in use')
        } else {
          return axios.post("http://localhost:3001/user", user)
            .then(resp => {
              if (resp.data === 'user created successfully') {
                alert('Account created successfully. Welcome to our platform')
                dispatch({
                  type: LOGIN,
                  payload: {
                    email: user.email,
                    password: user.password,
                    usertype: 'user'
                  }
                })
              } else {
                console.log(resp.data)
              }
            })
        };
      })
      .catch(error => console.log('Action error in signup: ', error))
  };
};

export function login(user) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/user?email=${user.email}`, user)
      .then(resp => {
        let loggedUser = JSON.parse(localStorage.getItem("user"));
        if (loggedUser === user.email) return alert('You are already logged in');
        if (!Object.keys(resp.data).length) return alert('No account linked to that email');
        if (resp.data[0].password !== user.password) return alert('Wrong password');
        dispatch({ type: LOGIN, payload: resp.data[0] });
        alert('Successfull login!');
      })
      .catch(error => console.log('Action error in login: ', error))
  };
};

export function logout() {
  return function (dispatch) {
    return dispatch({ type: LOGOUT })
  }
}

export function changePermission(user) {
  return function () {
    return axios.put(`http://localhost:3001/user/update/${user.email}`, user)
      .then(console.log('Admin permissions changed'))
      .catch(error => console.log('Action error in changePermission: ', error))
  };
};

export function deleteUser(emailUser) {
  return function () {
    return axios.delete(`http://localhost:3001/user/delete/${emailUser}`)
      .then(resp => {
        if (resp.data.notFound) alert(resp.data.notFound)
        else if (resp.data.success) alert(resp.data.success)
        else console.log('No response')
      })
      .catch(error => console.log('Action error in changePermission: ', error))
  };
};

export function createReview(data) {
  return function (dispatch) {
    return axios.post("http://localhost:3001/product/review", data)
      .then(resp => {
        console.log('OK', resp, data);
        return dispatch({ type: CREATEREVIEW, payload: resp.data })
      })
      .catch(error => console.log('El error en cuestion: ', error))
  };
};

let uploadPreset = 'd9vdlmyy'
let cloudName = 'da42wdmjv'

export function modifyProduct(data, id) {
  return function (dispatch) {
    if (data.image?.name) {
      const formData = new FormData();
      formData.append('file', data.image);
      formData.append('upload_preset', uploadPreset);
      return axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData)
        .then(resp => {
          let updatedData = {
            ...data,
            image: resp.data.public_id
          }
          return axios.put(`http://localhost:3001/product/update/${id}`, updatedData)
        })
        .then(resp => {
          window.location.href = '/home'
          return dispatch({ type: MODIFYPRODUCT, payload: resp })
        })
        .catch(error => console.log('Error: ', error.message))
    } else {
      return axios.put(`http://localhost:3001/product/update/${id}`, data)
        .then(resp => {
          window.location.href = '/home'
          return dispatch({ type: MODIFYPRODUCT, payload: resp })
        })
        .catch(error => console.log('Error: ', error.message))
    }
  };
};

export function loadingImage(status) {
  return function (dispatch) {
    return dispatch({ type: LOADINGIMAGE, payload: status })
  }
}
export function createOrder(data) {
  return function (dispatch) {
    return axios.post("http://localhost:3001/order", data)
      .then(resp => {
        console.log('OK', resp, data);
        return dispatch({ type: CREATE_ORDER, payload: resp.data })
      })
      .catch(error => console.log('El error en cuestion: ', error))
  };
};
