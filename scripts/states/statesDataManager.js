export const getStates = () => {
    return fetch('http://localhost:8088/states')
    .then(response => response.json())
}