

var typing = document.querySelector('.Typing');
console.log(typing)
var typewriter = new Typewriter(typing, {
  loop: false,
  delay: 30,
});

typewriter
  .pauseFor(3000)
  .typeString(`    <span class="text-primary">const</span>    
    <span class="text-warning">baber :</span>    
    <span class="">Array</span>    
    <span class="">&lt<soan class="text-success">Ingredients</soan><span>&gt<span/></span>    
    <span class="">=</span>    
    <span class="">[</span>    
    <span class="text-danger">Designer</span>    
    <span class="">,</span>    
    <span class="text-danger">Developer</span>    
    <span class="">,</span>    
    <span class="text-danger">Debugger</span>   
    <span class="">,</span>    
    <span class="text-danger">Sugar</span>    
    <span class="">,</span>    
    <span class="text-danger">Spice</span>    
    <span class="">,</span>    
    <span class="text-danger">...EveryThing Nice</span>    
    <span class="">];</span>    
`)
  .changeDelay(10)
  .start();

  console.log("script")
