const logout=async()=>{
    try {
        console.log("check")
        const res = await axios.get('http://localhost:5000/api/user/logout',{
            withCredentials: true,
        })
        document.location.href='/login.html'
    } catch (error) { 
       document.location.href='/login.html'
    }
  
}