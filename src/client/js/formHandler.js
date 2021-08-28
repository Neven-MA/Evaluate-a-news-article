const handleSubmit = () => {
  const url = document.getElementById("article-url").value;
  const invalid = document.getElementById("invalid").innerHTML;
  const agreement = document.getElementById("agreement").innerHTML;
  const subjectivity = document.getElementById("subjectivity").innerHTML;
  const confidence = document.getElementById("confidence").innerHTML;
  const irony = document.getElementById("irony").innerHTML;
  const scoreTag = document.getElementById("score_tag").innerHTML;

  if (Client.checkURL(url)) {
    postData("http://localhost:8000/url-Analyzer", { url }).then((data) => {
      if (data.status.msg==="No content to analyze") {
        invalid = `${data.status.msg}`;
        agreement =''
        subjectivity = '';
        confidence.innerHTML ='';
        irony ='';
        scoreTag = '';
      } else {
        console.log(data);
        invalid = ``;
        agreement = `Agreement:${data.agreement}`;
        subjectivity = `Subjectivity:${data.subjectivity}`;
        confidence = `Confidence:${data.confidence}`;
        irony = `Irony:${data.irony}`;
        scoreTag = `Score_tag:${data.score_tag}`;
      }
    });
  } else {
    invalid = `Please,enter a valid URL`;
    agreement =''
    subjectivity = '';
    confidence ='';
    irony ='';
    scoreTag = '';
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
