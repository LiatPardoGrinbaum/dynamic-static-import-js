//****static import****

// import greet, { sayHello } from "./checkAdmin.js";

// const user = {
//   name: "Liat",
//   isUserLogged: true,
// };

// if (user.isUserLogged) {
//   sayHello(user.name);
//   greet();
// }

//****dynamic import****

const user = {
  name: "Liat",
  isUserLogged: true,
};

if (user.isUserLogged) {
  import("./checkAdmin.js")
    .then((checkAdmin) => {
      checkAdmin.sayHello(user.name);
      checkAdmin.default();
    })
    .catch((error) => console.log(error));
}

//*with destructuring*

// if (user.isUserLogged) {
//   import("./checkAdmin.js")
//     .then(({ sayHello, default: greet }) => {
//       sayHello(user.name);
//       greet();
//     })
//     .catch((error) => console.log(error));
// }

//*Async-Await syntax - Example 1*
// let loadCheckAdmin = async () => {
//   let functions = await import("./checkAdmin.js");
//   functions.sayHello(user.name);
//   functions.default();
// };

// if (user.isUserLogged) {
//   loadCheckAdmin();
// }

//*Async-Await syntax - Example 2*
// let loadCheckAdmin2 = async () => await import("./checkAdmin.js");

// if (user.isUserLogged) {
//   loadCheckAdmin2().then((obj) => {
//     obj.sayHello(user.name);
//     obj.default();
//   });
// }
