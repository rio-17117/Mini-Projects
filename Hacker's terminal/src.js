

let hack = async () => {

    let arr = ["Reading your files", "Password files detected", "Sending all personal and password files to server", "Cleaning up", "HAPPY HACKING"]
    let cont = document.getElementsByClassName("container")[0]
    cont.innerHTML += "vbonuser@ubuntu:$ " + "Initializing hacking"

    let temp = 1;
    setInterval(()=>{
      if(temp){
         cont.innerHTML += "..."
         temp = 0;
      }
      else{
          let html = cont.innerHTML;
          html = html.replace("...", "");
          cont.innerHTML = html;
          temp = 1;
      }
    }, 500)

    for (let index = 0; index < arr.length; index++) {
        let time = Math.ceil(Math.random() * 7) * 1000
        await new Promise(r => setTimeout(r, time));
        cont.innerHTML += "<br>vbonuser@ubuntu:$ " + arr[index] 
    }
}
hack();