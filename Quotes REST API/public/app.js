async function renderQuotes(quotes) {
   const res = await fetch("/api/quotes")
   const data = await res.json()
   console.log(quotes)
   document.querySelector("#textbox").innerHTML = `
   <h1 id="quote">" ${data.quote}"</h1>

<div class="author-box">
   <div class="line-div"><div  id="line"></div></div>
  <div> <h3 id="author">  ${data.author}</h3></div>
   <div class="line-div"><div id="line"></div></div>
   </div>
   
              `
} renderQuotes()