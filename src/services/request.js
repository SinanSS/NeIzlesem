function request(url) {
    return new Promise(async (resolve, reject) => {
        const options = {}
        const response = await fetch(url, options)
        const result = response.json()
        if (response.ok && response.status == 200) {
            resolve(result)
        } else {
            reject(result)
        }
    })
}