// // Exe.1.1
// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn)
// console.log(logList)


// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }


// Exe.1.2
// const registerForm = document.querySelector(".form");
// console.log(registerForm)

// registerForm.addEventListener("submit", handleSubmit);


// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }
  
//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

// Exe. 1.3
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//     valueOutput.textContent = selectedOptionValue;
//     console.log(event.currentTarget.selectedIndex)
// }

// Exe.1.4
const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
