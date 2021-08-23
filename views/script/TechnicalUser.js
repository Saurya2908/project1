


const getUserID = async () => {
    try {
        const rchk = await axios.get('http://localhost:5000/api/user/check', {
            withCredentials: true,
        })

       if (rchk.data.success){
        return
        }
        else{
            //document.location.href='/login.html'
        }
    } catch (error) {
        //document.location.href='/login.html'
    }

}
//getUserID()

    const getAllNormalUsersID = async () => {
        try {
            const rchk = await axios.get('http://localhost:5000/api/user/fetch/normal-user', {
                withCredentials: true,
            })
            console.log(rchk)
    
           if (rchk.data.success){
            console.log(rchk.data)
            }
            else{
                
            }
        } catch (error) {
            
        }
    
    }
    getAllNormalUsersID()