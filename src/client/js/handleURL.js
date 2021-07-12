//POST Data function
const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', //*GET,POST,PUT,DELETE, etc.
    credentials: 'same-origin',//include,*same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
          
    body: JSON.stringify(data), // Body data type must match "Content-Type" header 
  });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    //appropriately handle the error
    }
}


function handleURL(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let inputUrl =document.getElementById('name').value

    if(Client.checkUrl(inputUrl)===true){postData('http://localhost:8081/article',{inputUrl:inputUrl})
    .then(data=>{
        document.getElementById('text').innerHTML =`Text: ${data.text}`
        document.getElementById('score').innerHTML =`Score: ${data.score_tag}`
        document.getElementById('agreement').innerHTML =`Agreement: ${data.agreement}`
        document.getElementById('subjectivity').innerHTML=`Subjectivity: ${data.subjectivity}`
        document.getElementById('confidence').innerHTML =`Confidence: ${data.confidence}`
        document.getElementById('irony').innerHTML =`Irony: ${data.irony}`
    })}else{alert("Please enter valied URL")}
   
}

export { handleURL }

