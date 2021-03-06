/**
 * Get data from API
 *
 * @param path specifying which data to get
 *
 * @returns {Promise<void>} returns a JavaScript Object containing data as request from the API
 */
async function getData(APIpath) {
    let data = await fetch(getBaseUrl() + APIpath)
    data = await data.json()
    return await data;
}


