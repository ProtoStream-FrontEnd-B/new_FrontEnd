// const { API } = require("../API/backend");

// export const signup = (user) => {
//   return fetch(`${API}/register`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.log("inside error");
//       console.log(error);
//     });
// };

// export const signin = (user) => {
//   return fetch(`${API}/login`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.log("error>>>>>>>", error);
//     });
// };
// export const signout = (next) => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("jwt");
//     next();

//     return fetch(`${API}/logout`, {
//       method: "GET",
//     })
//       .then((response) => console.log("signout success"))
//       .catch((err) => console.log(err));
//   }
// };

// export const authenticate = (data, next) => {
//   console.log("[AUTHENTICATE..]");
//   console.log("data.......", data);
//   if (typeof window !== "undefined") {
//     localStorage.setItem("jwt", JSON.stringify(data));
//     next();
//   }
// };

// export const isAuthenticated = () => {
//   if (typeof window == "undefined") {
//     console.log("jwt not found");
//     return false;
//   }

//   if (localStorage.getItem("jwt")) {
//     return JSON.parse(localStorage.getItem("jwt"));
//   } else {
//     console.log("inside false error!!");
//     return false;
//   }
// };

// export const schemeFetch = (token) => {
//   return fetch(`${API}/schemes/allSchemes/`, {
//     method: "GET",
//     Authorization: `Bearer ${token}`,
//   })
//     .then((response) => response.json())
//     .catch((err) => console.log(err));
// };

// export const schemeSubmit = (userId, scheme) => {
//   return fetch(`${API}/schemes/createScheme/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: scheme,
//   })
//     .then((response) => response.json())
//     .catch((error) => error);
// };

// export const hackathonSubmit = (hackathon, userId) => {
//   console.log("inside hackathon submit", hackathon);
//   return fetch(`${API}/hackathon/createHackathon/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(hackathon),
//   })
//     .then((response) => response.json())
//     .catch((error) => error);
// };

// export const allHackathons = () => {
//   console.log("api:", API);
//   return fetch(`${API}/hackathon/allHackathons`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// // Startups..

// export const otp = (userId) => {
//   console.log("inside");

//   return fetch(`${API}/startup/register/${userId}`, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .catch((err) => console.log(err));
// };
// export const optVerify = (userId, otpCode) => {
//   return fetch(`${API}/startup/verify/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(otpCode),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.log("inside error");
//       console.log(error);
//     });
// };

// // nda

// export const ndaUpload = (userId, formData) => {
//   return fetch(`${API}/startup/nda/upload/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: formData,
//   })
//     .then((response) => response.json())
//     .catch((error) => error);
// };

// export const fetchNda = (userId) => {
//   return fetch(`${API}/myndas/${userId}`, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .catch((err) => console.log(err));
// };

// export const startupFormSubmit = (formData, userId, ndaId) => {
//   console.log(ndaId);
//   return fetch(`${API}/createstartup/${ndaId}/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: formData,
//   })
//     .then((response) => response.json())
//     .catch((error) => error);
// };

// export const fetchStartups = (UserId) => {
//   return fetch(`${API}/startups/allstartups/${UserId}`, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .catch((error) => error);
// };
