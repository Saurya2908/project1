const checkLogin=async() =>{
    try {
        const rchk = await axios.get('http://localhost:5000/api/user/check', {
            withCredentials: true,
        })
        console.log(rchk)
        if (rchk.data.usertype==="technical"){
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






const getAllNormalUsersID = async () => {
    try {
        const rchk = await axios.get('http://localhost:5000/api/user/fetch/normal-users', {
            withCredentials: true,
        })
        console.log(rchk)

        if (rchk.data.success){
        console.log(rchk.data)
        let Users = document.getElementById('users')
        users=rchk.data.data
        users.forEach(user => {
            let str=`<option class="" value="${user._id}">${user.username}</option>`
            Users.innerHTML +=str
        });
        }
        else{
            console.log('abc') 
        }
    } catch (error) {
        console.log(error)
    }
    
}
getAllNormalUsersID()

const getUserFiles=async (e) => {
    let TechnicalUserTable = document.getElementById('TechnicalUserTable')
    try {
        
   
    const res = await axios.get(`http://localhost:5000/api/file/getfilesbyuser/${e.target.value}`, {
        withCredentials: true
    })

        if (res.data.success){
            TechnicalUserTable.innerHTML=""
            res.data.data.forEach((file, i)=>{
                console.log(file)
                if(file.approved){
                let str =  `<tr><td>${file.filename} <button class="btn btn-success" style="float: right; margin-left: 5px">Approved</button> <button type="submit" class="btn btn-danger" style="float: right; margin-left: 5px;">Delete</button> <a href = '${file.path}' download ><button  class="btn btn-info" style="float: right;">Download</button></a> </td></tr>`
                console.log(str)
                TechnicalUserTable.innerHTML +=str
                }
                else{
                    let str =  `<tr><td>${file.filename} <button class="btn btn-success" style="float: right; margin-left: 5px">Approve</button> <button type="submit" class="btn btn-danger" style="float: right; margin-left: 5px;">Reject</button> <a href = '${file.path}' download ><button  class="btn btn-info" style="float: right;">Download</button></a> </td></tr>`
                    console.log(str)
                    TechnicalUserTable.innerHTML +=str   
                }
        })
    
    
    }


    console.log(res.data)

}catch(error){
    console.log({error})
    alert('ERROR IN GETTING UPLOADED FILES')
}

    

}

