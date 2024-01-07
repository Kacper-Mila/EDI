const apiUrl = "https://my.api.mockaroo.com/some_schematic.json?key=d7234cf0";
const mockUrl = "./assets/data/Some_schematic.json";
// use this to manipulate the data from the API
let productData = [];

/**
 * Get data from the API
 * @return {Promise} Promise object
 * @description This function will get data from the API and return a promise object.
 * The response will be cached in sessionStorage,
 * because of the API limit we needed to lower the request usage.
 */
// Promise is an object that may produce a single value some time in the future
// either a resolved value or a reason that it's not resolved
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending
// Promise users can attach callbacks to handle the fulfilled value or the reason for rejection
// Promise API is relatively simple
// 1. Create a promise object
// 2. Attach callbacks like .then() and .catch()
// 3. Resolve or reject the promise
// 4. Use the resolved value
function getData() {
    return new Promise((resolve, reject) => {
        if (sessionStorage.getItem("cachedData") !== null) {
            console.log("Using cached data");
            resolve(JSON.parse(sessionStorage.getItem("cachedData")));
        } else {
            $.ajax({
                url: apiUrl,
                method: "GET",
                success: function (response) {
                    console.log("Fetching data");
                    sessionStorage.setItem(
                        "cachedData",
                        JSON.stringify(response)
                    );
                    resolve(response);
                },
                error: function (xhr, status, error) {
                    getMockData(resolve, reject);
                },
            });
        }
    });
}

/**
 * Get data from the mock file
 * @description Get the mock data if the API call fails, becasue e.g. we run out of requests available
 */
function getMockData(resolve, reject) {
    fetch(mockUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log("Fetching mock data");
            resolve(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            reject(error);
        });
}

getData().then((data) => {
  productData = data;
}).catch((error) => {
    console.error("Error fetching data:", error);
});