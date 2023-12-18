// API Url
const apiUrl = "https://my.api.mockaroo.com/some_schematic.json?key=d7234cf0";
let reasponseData = [];

/**
 * Get data from the API
 * @return {Promise} Promise object
 */
// Promise is an object that may produce a single value some time in the future
// either a resolved value or a reason that it's not resolved
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending
// Promise users can attach callbacks to handle the fulfilled value or the reason for rejection
// Promise API is relatively simple
// 1. Create a promise object
// 2. Attach callbacks / like .then() and .catch()
// 3. Resolve or reject the promise
// 4. Use the resolved value
function getData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(response) {
                resolve(response);
            },
            error: function(xhr, status, error) {
                reject("Error has occurred: " + error);
            }
        });
    });
}

// Use the data outside the AJAX call
getData().then(responseData => {
    console.log(responseData);
}).catch(error => {
    console.error(error);
});
