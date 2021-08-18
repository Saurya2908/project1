alert("connected")
firstName=document.getElementById('firstName')
lastName=document.getElementById('lastName')
//userType=document.getElementById('usertype')
password=document.getElementById('exampleInputPassword1')

const  mySubmitFunction = async (e)=>
{
e.preventDefault()
console.log({username:firstName.value , password:password.value, first_name:firstName.value, last_name:lastName.value,user_type:"normal"})
const res =await axios.post('http://localhost:5000/api/user/register' , {username:firstName.value , password:password.value, first_name:firstName.value, last_name:lastName.value,user_type:"normal"}, {Headers: {
    'Access-Control-Allow-Origin': 'http://localhost:5501'
}})

console.log(res.data)

}
