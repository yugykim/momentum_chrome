window.onload = () => {
  sendApiRequest();
  let image;
  
  async function sendApiRequest() {
    let API_KEY = "yuRZ5ybsxH7EeWZEtDW7aQeZcKw7XLqNGCkhL5Ae";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`);
    let data = await response.json();
    console.log(data);
    if (data[0].media_type === "image"){
      image = data[0].url;
    } else {
      image = data[1].url;
    }
    
    
    document.body.style.backgroundImage = `url(${image})`
    const bgImage = document.createElement("img");
    console.log(bgImage);
    document.body.appendChild(bgImage);
    
  }

};