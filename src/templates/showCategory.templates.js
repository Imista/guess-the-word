import categoryControl from "@handlers/categoryControl.handler";

const showCategory = (content,categories,category) => {
    const title = document.createElement('h1');
    title.innerText = "La categoria es:";

    const text = document.createElement('p');
    // text.classList.add('category');
    categoryControl(categories,category,text);

    content.appendChild(title);
    content.appendChild(text);
}

export default showCategory;
