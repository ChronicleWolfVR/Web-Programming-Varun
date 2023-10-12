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

    console.log("title:", title);
    console.log("description:", description);
    console.log("guid:", guid);

    const div = document.createElement("div");
    div.classList.add("tile");
    document.body.appendChild(div);
    div.innerHTML = `
    <a href='${guid}'><h2>${title}</h2></a>
                <p>${description}</p>
        `;
  });
};

getRssFeed();

console.log("end");
