// const prevBtns = document.querySelectorAll(".progress-step1")
const form2 = document.getElementById("form2")


const next1 = document.getElementById("progress-step7")


next1.forEach(btn => {
  btn.addEventListener{ "click", () =>{
    updateFormSteps();
  });
  
});


function updateFormSteps() {
    form2.classList.add("form-style-active");
}