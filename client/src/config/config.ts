export const URL = "http://localhost:5000/entities"
export const HeaderConfig = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + localStorage.getItem("token")
    }
}