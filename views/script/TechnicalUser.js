


const getUserID = async () => {
    try {
        const rchk = await axios.get('http://localhost:5000/api/user/check', {
            withCredentials: true,
        })

       if (rchk.data.success){
        
        }
        else{
            document.location.href='/login.html'
        }
    } catch (error) {
        document.location.href='/login.html'
    }

}
getUserID()

const getAllFilesUploaded = async () =>{
    let TechnicalUserTable = document.getElementById('TechnicalUserTable')
    try {
        
   
    const res = await axios.get(`http://localhost:5000/api/file/getfilesbyuser/${loggedInUserID}`, {
        withCredentials: true
    })

        if (res.data.success){
            res.data.data.forEach((file, i)=>{
                console.log(file)
                if(file.approved){
                let str =  `<tr><td>${file.filename} <button class="btn btn-success" style="float: right; margin-left: 5px">Approved</button> <button type="submit" class="btn btn-danger" style="float: right; margin-left: 5px;">Delete</button> <a href = '${file.path}' download ><button  class="btn btn-info" style="float: right;">Download</button></a> </td></tr>`
                console.log(str)
                TechnicalUserTable.innerHTML +=str
                }
                else{
                    let str =  `<tr><td>${file.filename} <button class="btn btn-secondary" style="float: right; margin-left: 5px">Pending for approval</button> <button type="submit" class="btn btn-danger" style="float: right; margin-left: 5px;">Delete</button> <a href = '${file.path}' download ><button  class="btn btn-info" style="float: right;">Download</button></a> </td></tr>`
                    console.log(str)
                    TechnicalUserTable.innerHTML +=str   
                }
        })
    
    
    }