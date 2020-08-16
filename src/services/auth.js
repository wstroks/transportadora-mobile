export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5NzU5NjQzNH0.uj9WM32NHlNIrDZOfmaFWblKfGDfO97Bvp7ERSps60w',
                user: {
                    username: "wstroks",
                    email: "wstroks@gmail.com"
                }
            })
        }, 2000);
    })
}
