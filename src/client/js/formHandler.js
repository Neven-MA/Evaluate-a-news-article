const handleSubmit = () => {
  const url = document.getElementById("article-url").value;
  if (Client.checkURL(url)) {
    postData("http://localhost:8000/url-Analyzer", { url }).then((data) => {
      if (data.msg==="No content to analyze") {
        document.getElementById("invalid").innerHTML = `${data.msg}`;
        document.getElementById("agreement").innerHTML =''
        document.getElementById("subjectivity").innerHTML = '';
        document.getElementById("confidence").innerHTML ='';
        document.getElementById("irony").innerHTML ='';
        document.getElementById("score_tag").innerHTML = '';
      } else {
        console.log(data);
        document.getElementById("invalid").innerHTML = ``;
        document.getElementById("agreement").innerHTML = `Agreement:${data.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity:${data.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence:${data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony:${data.irony}`;
        document.getElementById("score_tag").innerHTML = `Score_tag:${data.score_tag}`;
      }
    });
  } else {
    document.getElementById("invalid").innerHTML = `Please,enter a valid URL`;
    document.getElementById("agreement").innerHTML =''
    document.getElementById("subjectivity").innerHTML = '';
    document.getElementById("confidence").innerHTML ='';
    document.getElementById("irony").innerHTML ='';
    document.getElementById("score_tag").innerHTML = '';
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
