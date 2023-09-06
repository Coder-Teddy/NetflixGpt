export const checkValidData = (email,password)=>{
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!isEmailValid) return "Enter Valid Emai ld"
    if(!isPasswordValid) return "Enter Valid Password"
}