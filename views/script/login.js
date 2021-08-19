emailInput = document.getElementById('loginEmailInput')
passwordInput = document.getElementById('loginPasswordInput')


loginForm = document.getElementById('loginForm')



<<<<<<< HEAD
const mySubmitFunction = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/api/user/login', { username: emailInput.value, password: passwordInput.value }, {
        withCredentials: true,
    })
    

    if(res.data.user_type === 'normal'){
        document.location.href='/normalUser.html'
    }else if(res.data.user_type === 'technical'){
        document.location.href='/datagovernanceuser.html'
    }else if(res.data.user_type === 'super')
    {
        document.location.href='/superuser.html'
    }
    
    
    
    console.log(res.data)

// const res = await axios.get('http://localhost:5000/api/user/logout', {
//         withCredentials: true
//     })
=======
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

>>>>>>> ecb7431bfbf92fc8ad990b8a01c074b8e54c7e97

}



