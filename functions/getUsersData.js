// Getting data from the API
export default async function getUsersData() {
    const response = await fetch(`https://api.github.com/users`, {
        headers: {
            authorization: "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"
        }
    })
    const usersData = await response.json()
    return usersData
}