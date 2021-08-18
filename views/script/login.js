emailInput = document.getElementById('loginEmailInput')
passwordInput = document.getElementById('loginPasswordInput')


loginForm = document.getElementById('loginForm')



const  mySubmitFunction = async (e)=>
{
e.preventDefault()
try {
    const res = await axios.post('http://localhost:5000/api/user/login' , {username:emailInput.value , password:passwordInput.value} , {Headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5501'
}})
const check= await axios.get('http://localhost:5000/api/user/check' ,  {Headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5501'
}})
console.log(res.data,check.data)
if(res.data.user_type==="normal"){
    //window.location.href="/views/normalUser.html"
}
} catch (error) {
    alert(error.response.data.msg)
}


}
