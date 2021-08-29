const handleSubmit = () => {
  const url = document.getElementById("article-url").value;
  const invalid = document.getElementById("invalid");
  const agreement = document.getElementById("agreement");
  const subjectivity = document.getElementById("subjectivity");
  const confidence = document.getElementById("confidence");
  const irony = document.getElementById("irony");
  const scoreTag = document.getElementById("score_tag");

  if (Client.checkURL(url)) {
    postData("http://localhost:8000/url-Analyzer", { url }).then((data) => {
      if (data.status.msg === "No content to analyze") {
        invalid.innerHTML = `${data.status.msg}`;
        agreement.innerHTML = "";
        subjectivity.innerHTML = "";
        confidence.innerHTML = "";
        irony.innerHTML = "";
        scoreTag.innerHTML = "";
      } else {
        console.log(data);
        invalid.innerHTML = ``;
        agreement.innerHTML = `Agreement:${data.agreement}`;
        subjectivity.innerHTML = `Subjectivity:${data.subjectivity}`;
        confidence.innerHTML = `Confidence:${data.confidence}`;
        irony.innerHTML = `Irony:${data.irony}`;
        scoreTag.innerHTML = `Score_tag:${data.score_tag}`;
      }
    });
  } else {
    invalid.innerHTML = `Please,enter a valid URL`;
    agreement.innerHTML = "";
    subjectivity.innerHTML = "";
    confidence.innerHTML = "";
    irony.innerHTML = "";
    scoreTag.innerHTML = "";
  }
};
const postData = async (url = "", data = {}) => {
  console.log("Analyzing:", data);
  const response = await fetch(url, {
    method: "post",
    crendentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
export { handleSubmit };
