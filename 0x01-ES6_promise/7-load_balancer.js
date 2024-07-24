/* eslint-disable */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise
        .race([chinaDownload,
            USDownload])
            .then((value) => {
                return value; // Explicitly return the value
            })
            .catch((error) => {
                throw error; // Handle potential rejection
            });
}
