async function askAI() {
  const question = document.getElementById("question").value;

  const res = await fetch(API + "/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.answer;
}

async function generateQuiz() {
  const res = await fetch(API + "/quiz");
  const data = await res.json();

  document.getElementById("quiz").innerText = data.quiz;
}
document.querySelector("input[type=file]").addEventListener("change", async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append("file", file);

  await fetch(API + "/upload", {
    method: "POST",
    body: formData
  });

  alert("Archivo subido 🚀");
});
