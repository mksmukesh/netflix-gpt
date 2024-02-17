export const checkValidData=(email,password)=>{
   const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
   const isPasswordValid=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
//    const isNameValid=/^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/.test(name)


 if (!isEmailValid) return "Email id is not valid"
 if (!isPasswordValid) return "Password is not valid"
//  if(!isNameValid) return "Please enter a valid name"

 return null;
}