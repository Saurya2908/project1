emailInput = document.getElementById('loginEmailInput')
passwordInput = document.getElementById('loginPasswordInput')


loginForm = document.getElementById('loginForm')



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

}



