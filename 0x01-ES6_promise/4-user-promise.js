/** */
export default function signUpUser(firstName, lastName) {
  // return Promise.resolve({ firstName: firstName, lastName: lastName, });
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
