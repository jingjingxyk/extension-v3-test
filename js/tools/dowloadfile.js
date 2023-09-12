
let url='';
let filename=''
fetch(url,{
    method: 'get',
    responseType: 'blob'
}).then(res => res.blob()).then(data => {
    const downloadURL = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = downloadURL;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadURL);
})