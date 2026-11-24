export async function login(email: string, password: string): Promise<string> {
  const userJwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1c3QgVXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzk1NjI4ODExLCJleHAiOjE4OTU2Mjg4MTF9.D19Jha24H0Q4qSUYsPZw0_ZHqZUHin4lwnElrubmzqw`

  const adminJwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3OTU2Mjg4MTEsImV4cCI6MTg5NTYyODgxMX0.MlzmzaVPnlskupQHN3F0nhYqaDco0vWP5-JXBafc5SE`

  if (email === 'a@a.dev' && password === 'a@a.dev') {
    return Promise.resolve(adminJwt) // fetch('/login', {body: {email, password}})
  } else if (email === 'u@a.dev' && password === 'u@a.dev') {
    return Promise.resolve(userJwt)
  } else {
    return Promise.reject(new Error('Wrong credentials'))
  }
}
