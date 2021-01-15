console.log("hello world")
if( "serviceWorker" in navigator){
  window.addEventListener("load", ()=> {
    navigator.serviceWorker.register("/service-work.js").then(res => {
      console.log("service-work registed!")
    }).catch(err => {
      console.log("service-work register err")
    })
  })
}