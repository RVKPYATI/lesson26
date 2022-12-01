const getData = () => {
    return fetch('db.json')
        .then(data => data.json())
        .then(data => sendDataXML(data))
        .catch(Error => console.log(Error));
};

const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(Error => console.log(Error));

};

const sendDataXML = (data) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send(JSON.stringify(data));

    xhr.onload = function () {
        console.log(`Загружено: ${xhr.status} ${xhr.response}`);
    };

    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            console.log(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
            console.log(`Получено ${event.loaded} байт`);
        }

    };

    xhr.onerror = function () {
        console.log(`Ошибка соединения`);
    };
};
getData();