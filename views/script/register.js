userName=document.getElementById('userName')
firstName=document.getElementById('firstName')
lastName=document.getElementById('lastName')
userType=document.getElementById('usertype')
password=document.getElementById('exampleInputPassword1')

const  mySubmitFunction = async (e)=>
{
e.preventDefault()
try{
console.log({username:userName.value , password:password.value, first_name:firstName.value, last_name:lastName.value,user_type:userType.value})
const res =await axios.post('http://localhost:5000/api/user/register' , {username:userName.value , password:password.value, first_name:firstName.value, last_name:lastName.value,user_type:userType.value}, {Headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5501'
}})
console.log(res.data)
}
catch(error){
    alert(error.response.data.msg)
}

}
