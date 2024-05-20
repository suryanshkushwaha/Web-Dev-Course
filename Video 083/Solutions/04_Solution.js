// <!-- The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. -->

let password = 'Labcaaa122dM'

function passwordValidation(password) {
   let uppercase = false
   let lowercase = false
   let digit = false

   if (password.length < 8) {
      return false
   }

   for (const char of password) {
      const unicode = char.charCodeAt(0)
      if (!uppercase && unicode > 64 && unicode < 91) {
         uppercase = true
      } else if (!lowercase && unicode > 96 && unicode < 123) {
         lowercase = true
      } else if (!digit && unicode > 47 && unicode < 58) {
         digit = true
      }
   }

   return uppercase && lowercase && digit
}

console.log(passwordValidation(password));