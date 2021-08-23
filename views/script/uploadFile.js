
loggedInUserID = ''


const getUserID = async () => {
    try {
        const rchk = await axios.get('http://localhost:5000/api/user/check', {
            withCredentials: true,
        })

       if (rchk.data.success){
        loggedInUserID = (rchk.data.id)
        getAllFilesUploaded()
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
    let normalUserTable = document.getElementById('normalUserTable')
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
                normalUserTable.innerHTML +=str
                }
                else{
                    let str =  `<tr><td>${file.filename} <button class="btn btn-secondary" style="float: right; margin-left: 5px">Pending for approval</button> <button type="submit" class="btn btn-danger" style="float: right; margin-left: 5px;">Delete</button> <a href = '${file.path}' download ><button  class="btn btn-info" style="float: right;">Download</button></a> </td></tr>`
                    console.log(str)
                    normalUserTable.innerHTML +=str   
                }
        })
    
    
    }


    console.log(res.data)

}catch(error){
    console.log({error})
    alert('ERROR IN GETTING UPLOADED FILES')
}
}





const openSheet = async (path) =>{
   console.log(path)



   const res = await axios.get(path, {
        withCredentials: false,
        
        Headers:{
            'Access-Control-Allow-Origin': '*'
        }
    })




  
    var reader = new FileReader();
    reader.readAsArrayBuffer(res);
    reader.onload = function(e) {
            var data = new Uint8Array(reader.result);
            var wb = XLSX.read(data,{type:'array'});
            var htmlstr = XLSX.write(wb,{sheet:"sheet no1", type:'binary',bookType:'html'});
            $('#wrapper')[0].innerHTML += htmlstr;
    }







}










function initialize() {
    // [START storage_initialize]
    // Set the configuration for your app
    // TODO: Replace with your app's config object
    var firebaseConfig = {
        apiKey: "AIzaSyBrQto3t5pUK9q1swS-F9mRfoy1CX8C4ic",
        authDomain: "resumeapi-9d1d4.firebaseapp.com",
        projectId: "resumeapi-9d1d4",
        storageBucket: "resumeapi-9d1d4.appspot.com",
        messagingSenderId: "493096124942",
        appId: "1:493096124942:web:8eb8e68736c16e82e1f25f",
        measurementId: "G-SJR8P7RB76"
    };
    firebase.initializeApp(firebaseConfig);




    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();
    // [END storage_initialize]
}
initialize()



function storageOnComplete(file) {
    // The file param would be a File object from a file selection event in the browser.
    // See:
    // - https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
    // - https://developer.mozilla.org/en-US/docs/Web/API/File

    const metadata = {
        'contentType': file.type
    };

    // [START storage_on_complete]
    const storageRef = firebase.storage().ref();
    storageRef.child('UploadDocs/' + file.name).put(file, metadata)
        .then((snapshot) => {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log('File metadata:', snapshot.metadata);
            // Let's get a download URL for the file.
            snapshot.ref.getDownloadURL().then(async (url) => {
                console.log('File available at', url);
                alert('File Uplaoded successfully')
                const rchk = await axios.get('http://localhost:5000/api/user/check', {
                    withCredentials: true,
                })

                await mySubmitFunction(file.name, url, file.type, rchk.data.id)
               document.location.reload()
            });
        }).catch((error) => {
            alert('Upload failed', error);
            // ...
        });
    // [END storage_on_complete]
}

















// File To Upload
let file = {}



//   Click On Button


const UploadButtonCLick = () => {
    uploadInput = document.getElementById('NormalUserFileUpload')
    uploadInput.click()
}

// file selected

const fileUploader = (e) => {
    file = e.target.files[0]
    console.log(file)
    // console.log(e.target.files[0])
    // storageOnComplete(file)
}


// updating the database with the file Location 


const mySubmitFunction = async (fileName, path, type, uploader) => {

    const res = await axios.post('http://localhost:5000/api/file/uploadfile', {
        "filename": fileName,
        "path": path,
        "approved": false,
        "type": type,
        "uploader": uploader
    }
        , {
            withCredentials: true,
        })

    console.log(res.data)

}