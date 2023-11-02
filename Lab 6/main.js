/**
 * Fetches an RSS feed from a URL and displays the items on the page.
 * @async
 * @function getRssFeed
 * @returns {Promise<void>}
 */
const getRssFeed = async () => {
    const prom = await fetch(
      "https://moxie.foxnews.com/google-publisher/latest.xml"
    );
    const text = await prom.text();
  
    console.log(text.substring(0, 100));
  
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
  
    console.log(xmlDoc);
  
    const items = xmlDoc.querySelectorAll("item");
    console.log("items:", items);
  
    items.forEach((el) => {
      const title = el.querySelector("title").textContent;
      const description = el.querySelector("description").textContent;
      const guid = el.querySelector("guid").textContent;
      const mediaContent = el.getElementsByTagNameNS(
        "http://search.yahoo.com/mrss/",
        "content"
      )[0];
      const imageUrl = mediaContent ? mediaContent.getAttribute("url") : null;
  
      const div = document.createElement("div");
      div.classList.add("tile");
      document.body.appendChild(div);
      div.innerHTML = `
            <a href='${guid}'><h2 style="opacity:1;">${title}</h2></a>
            <p style="opacity:1; color:white;">${description}</p>
        `;
  
      // Set the background image of the div element
      if (imageUrl) {
        div.style.backgroundImage = `url(${imageUrl})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
        div.style.opacity = "0.8"; // Add opacity property
      }
    });
  };
  
  getRssFeed();
  
  console.log("end");
  