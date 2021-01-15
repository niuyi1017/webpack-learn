class Greeter {
  greeting: string
  constructor(message: string){
    this.greeting = message
  }
  greet(){
    return 'hello' + this.greeting
  }
}

let greeter = new Greeter("world")
// let btn = document.createElement("button")
// btn.textContent = "say hello"
// btn.addEventListener('click', () => {
  alert(greeter.greet())
// } )
// document.body.appendChild(btn)