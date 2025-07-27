const adviceId = document.querySelector("#advice-id span");
const adviceTxt = document.querySelector("#advice-text");
const diceBtn = document.querySelector(".dice-btn");

async function getAdvice() {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`, {
      cache: "no-store",
    });
    const data = await res.json();
    adviceId.textContent = data.slip.id;
    adviceTxt.textContent = `“${data.slip.advice}”`;
  } catch (err) {
    adviceTxt.textContent = "Oops! Something went wrong.";
    console.error(err);
  }
}

diceBtn.addEventListener("click", getAdvice);

getAdvice();
