async function askAI() {
  const question = document.getElementById("question").value;

  const res = await fetch("http://localhost:3000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.answer;
}

async function generateQuiz() {
  const res = await fetch("http://localhost:3000/quiz");
  const data = await res.json();

  document.getElementById("quiz").innerText = data.quiz;
}
