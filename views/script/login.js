emailInput = document.getElementById('loginEmailInput')
passwordInput = document.getElementById('loginPasswordInput')


loginForm = document.getElementById('loginForm')



const  mySubmitFunction = async (e)=>
{
e.preventDefault()
const res = await axios.post('/api/user/login' , {username:emailInput.value , password:passwordInput.value})

console.log(res.data)

}
console.log(loginForm)