emailInput = document.getElementById('loginEmailInput')
passwordInput = document.getElementById('loginPasswordInput')


loginForm = document.getElementById('loginForm')



const  mySubmitFunction = async (e)=>
{
e.preventDefault()
const res = await axios.post('http://localhost:5000/api/user/login' , {username:emailInput.value , password:passwordInput.value} , {Headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5501'
}})

console.log(res.data)

}
