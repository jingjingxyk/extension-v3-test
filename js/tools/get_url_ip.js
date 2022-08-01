{
let domains=new Set()

 let urlOBJ=null;
//window.performance.getEntriesByType("resource")
  window.performance.getEntries().forEach((key,value,array) => {
    console.log(key)
    console.log(
      key.entryType,
      key.name,
      key.type,
      key.initiatorType,
      key.nextHopProtocol
    );
    if(
        key.name.indexOf('https://') !==-1 || key.name.indexOf('http://') !==-1 ||
        key.name.indexOf('ws://') !==-1 || key.name.indexOf('http://') !==-1 ||
        key.name.indexOf('wss://') !==-1 || key.name.indexOf('http://') !==-1
    ){
        urlOBJ=new URL(key.name)
        console.log(urlOBJ)
        domains.add(urlOBJ.hostname)
    }
   //
  });
 }
console.log(domains)


 // 星域云 例子
 // https://www.xycloud.com/products/example

// dig sd6tordv.v3n.szbdyd.com +short