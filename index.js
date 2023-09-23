// var url = 'https://my-json-server.typicode.com/typicode/demo/posts';

// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url + '/1', true);
// xhr.onload = function() {

//     var users = JSON.parse(xhr.responseText);

//     if (xhr.readyState == 4 && xhr.status == "200") {

//         console.log("Delete successfully");

//     } else {

//         console.error(users);

//     }

// }

// xhr.send(null);




// var url = "http://localhost:8080/api/v1/users";

// var url = 'https://jsonplaceholder.typicode.com/todos';

// var xhr = new XMLHttpRequest()

// xhr.open('GET', url, true)

// xhr.onload = function() {

//     var users = JSON.parse(xhr.responseText);

//     if (xhr.readyState == 4 && xhr.status == "200") {

//         console.table(users);

//     } else {

//         console.error(users);

//     }

// }

// xhr.send(null);


// var url = 'https://my-json-server.typicode.com/typicode/demo/posts';

// var data = {};
// data.firstname = "John";
// data.lastname = "Snow";

// const jsonString = JSON.stringify(data)
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();

// xhr.open("POST", url, true);

// xhr.setRequestHeader('Content-type',
//     'application/json; charset=utf-8');

// xhr.onload = function() {

//     var users = JSON.parse(xhr.responseText);

//     if (xhr.readyState == 4 && xhr.status == "201") {

//         console.table(users);

//     } else {

//         console.error(users);

//     }

// }

// xhr.send(jsonString);



var url = 'https://my-json-server.typicode.com/typicode/demo/posts';

var data = {};

data.firstname = "John2";

data.lastname = "Snow2";

var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();

xhr.open("PUT", url + '/1', true);

xhr.setRequestHeader('Content-type', 'application/json; charset = utf-8');

xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {

        console.table(users);

    } else {

        console.error(users);

    }
}

xhr.send(json);