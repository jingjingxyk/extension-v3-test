{
    let list = []
    let table_body = document.querySelectorAll('#app .show-detection-data .ping-result-area .next-table-body table tbody tr')
    table_body.forEach((value, key, parent) => {
        let row = [];
        value.querySelectorAll('td').forEach((v) => {
            console.log(v.innerText)
            row.push(v.innerText)
        })
        list.push(row)
    })
    // 优化，做的就是 查找和排序
    //取第二列数据
    let new_list = list.map((value) => {
        return value[1]
    })
    //去重
    let ip_list = Array.from(new Set(new_list))
    console.log(ip_list)


    //下载文件
    let blob = new Blob([JSON.stringify(ip_list)], {type: "application/json"});
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = 'google-ip-' + (new Date()).toISOString() + '.txt';
    a.click();
    setTimeout(function () {
        window.URL.revokeObjectURL(url);
    }, 3000);
}
