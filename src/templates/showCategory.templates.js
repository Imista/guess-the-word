import categoryControl from "@handlers/categoryControl.handler";

const showCategory = (head,categories,category) => {
    return (() => {
    const title = document.createElement('h1');
    title.innerText = "La categoria es:";

    const text = document.createElement('p');
    text.classList.add('category');
    categoryControl(categories,category,text);

    head.appendChild(title);
    head.appendChild(text);
    })
}

export default showCategory;
