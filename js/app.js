function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;

        return people.map(function (person) {
            let li = createNode('li')
            span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);

        });
    }).catch(e => {
        console.log(e);
        var img = document.createElement("img");

        img.src = "./images/download.png";
        img.width="300";
        img.height="150";
        append(ul,img);
    })