const checkLogin=async() =>{
    try {
        const rchk = await axios.get('http://localhost:5000/api/user/check', {
            withCredentials: true,
        })
        console.log(rchk)
        if (rchk.data.usertype==="super"){
            return 
        }
        else{
            document.location.href='/login.html'
        } 
    } catch (error) {
        document.location.href='/login.html'
    }
}
checkLogin()

