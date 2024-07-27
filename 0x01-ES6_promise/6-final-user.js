/** */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// export default function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise.allSettled([
//     signUpUser(firstName, lastName),
//     uploadPhoto(fileName),
//   ]).then((results) => {
//     return results.map((result) => {
//       if (result.status === 'fulfilled') {
//         return { status: result.status, value: result.value };
//       } else {
//         return { status: result.status, value: result.reason };
//       }
//     });
//   });
// }

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const result = [];
    results.forEach((item) => {
      if (item.status === 'fulfilled') {
        result.push({ status: item.status, value: item.value });
      } else {
        result.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return result;
  });
}
