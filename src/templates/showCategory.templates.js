import categoryControl from "@handlers/categoryControl.handler";

const showCategory = (Box) => {
    const content = document.querySelector('.category');
    content.innerHTML = '';
    const categories = Box.categories;
    const category = Box.category;


    const title = document.createElement('h1');
    title.innerText = "La categoria es:";

    const text = document.createElement('p');
    categoryControl(categories,category,text);

    content.appendChild(title);
    content.appendChild(text);
}

export default showCategory;
