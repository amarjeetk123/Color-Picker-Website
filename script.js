// document.getElementById("input_box").value = "abcd"

let btns = document.querySelectorAll(".box")


btns.forEach((item)=>{
  item.addEventListener("click" , function(val){
    console.log(val)
    let style = val.currentTarget
    console.log(style)
    let bg = getBgColor(style)
    console.log(bg)
    document.getElementById("input_box").value = bg;
//  console.log(style)
  })
})

const getBgColor= (selectedElement) =>{
return window.getComputedStyle(selectedElement).backgroundColor
}

let copy_btn = document.getElementById("copy_btn")
copy_btn.addEventListener("click" , function(){
    let input =  document.getElementById("input_box")
    input.select();
   document.execCommand("copy")
    window.getSelection().removeAllRanges();
})
