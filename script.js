'use strict';

const data = [
    {"name":"Keeley Bosco","email":"katlyn@jenkinsmaggio.net","city":"Lake Gladysberg","mac":"08:fd:0b:cd:77:f7","timestamp":"2015-04-25 13:57:36 +0700","creditcard":"1228-1221-1221-1431"},
    {"name":"Rubye Jerde","email":"juvenal@johnston.name","city":null,"mac":"90:4d:fa:42:63:a2","timestamp":"2015-04-25 09:02:04 +0700","creditcard":"1228-1221-1221-1431"},
    {"name":"Miss Darian Breitenberg","email":null,"city":null,"mac":"f9:0e:d3:40:cb:e9","timestamp":"2015-04-25 13:16:03 +0700","creditcard":null},
    {"name":"Celine Ankunding","email":"emery_kunze@rogahn.net","city":null,"mac":"3a:af:c9:0b:5c:08","timestamp":"2015-04-25 14:22:22 +0700","creditcard":"1228-1221-1221-1431"},
    {"name":"Dr. Araceli Lang","email":"mavis_lehner@jacobi.name","city":"Yvettemouth","mac":"9e:ea:28:41:2a:50","timestamp":"2015-04-25 21:02:11 +0700","creditcard":"1211-1221-1234-2201"},
    {"name":"Esteban Von","email":null,"city":null,"mac":"2d:e4:f0:dd:90:96","timestamp":"2015-04-25 21:47:09 +0700","creditcard":null},
    {"name":"Everette Swift","email":"gielle_jacobs@flatleyboehm.biz","city":null,"mac":"29:e0:54:7a:b7:ca","timestamp":"2015-04-25 01:42:40 +0700","creditcard":null},
    {"name":"Terrell Boyle","email":"augustine.conroy@keebler.name","city":"Port Reaganfort","mac":"c5:32:09:5a:f7:15","timestamp":"2015-04-25 23:03:57 +0700","creditcard":"1228-1221-1221-1431"},
    {"name":"Miss Emmie Muller","email":null,"city":"Kaleyhaven","mac":"be:dc:d2:57:81:8b","timestamp":"2015-04-25 15:48:26 +0700","creditcard":null},
    {"name":"Libby Renner","email":null,"city":"Port Reneeside","mac":"9c:63:13:31:c4:ac","timestamp":"2015-04-25 08:21:59 +0700","creditcard":"1234-2121-1221-1211"},
    {"name":"Kris Spencer","email":null,"city":null,"mac":"f9:8a:01:69:aa:63","timestamp":"2015-04-25 18:49:00 +0700","creditcard":null},
    {"name":"Terrance Schiller","email":"prince@rosenbaum.info","city":null,"mac":"fd:b7:2a:2e:97:8f","timestamp":"2015-04-25 02:25:23 +0700","creditcard":null},
    {"name":"Alessandro Barton","email":"sigurd.hudson@hodkiewicz.net","city":"South Pearl","mac":"1e:44:17:8c:c6:d8","timestamp":"2015-04-25 11:21:45 +0700","creditcard":"1234-2121-1221-1211"},
    {"name":"Dr. Art Grimes","email":"monica@abbott.org","city":null,"mac":"bf:2a:a2:75:a4:38","timestamp":"2015-04-25 22:51:21 +0700","creditcard":"1211-1221-1234-2201"},
    {"name":"Keven Purdy","email":"carter_zboncak@schmidtjenkins.info","city":"Port Marjolaineshire","mac":"cd:a7:57:c0:03:50","timestamp":"2015-04-25 10:13:00 +0700","creditcard":"1211-1221-1234-2201"},
    {"name":"William Wisozk DVM","email":"adonis@dach.net","city":"Rogelioton","mac":"9a:6e:08:fe:8d:41","timestamp":"2015-04-25 20:57:29 +0700","creditcard":null},
    {"name":"Oma Grady","email":"laurianne_goldner@kerluke.biz","city":"South Chelsie","mac":"9e:60:32:9f:88:9d","timestamp":"2015-04-25 04:08:07 +0700","creditcard":"1212-1221-1121-1234"},
    {"name":"Annie Schamberger","email":"blanca_smitham@pfeffervon.net","city":"Marvinville","mac":"f0:45:37:1b:d8:19","timestamp":"2015-04-25 10:28:07 +0700","creditcard":null},
    {"name":"Jazmin Kovacek","email":"mittie.ullrich@boehm.name","city":null,"mac":"13:36:6a:b4:2d:07","timestamp":"2015-04-25 19:20:51 +0700","creditcard":"1211-1221-1234-2201"},
    {"name":"Thomas O'Conner","email":null,"city":"North Tierramouth","mac":"b1:cd:47:c7:ab:82","timestamp":"2015-04-25 09:58:01 +0700","creditcard":null},
    {"name":"Jordi Jaskolski II","email":null,"city":null,"mac":"e8:32:67:7d:7c:b2","timestamp":"2015-04-25 03:19:14 +0700","creditcard":"1212-1221-1121-1234"},
    {"name":"Willy Beahan III","email":null,"city":"Port Heloise","mac":"a1:ec:ec:06:f3:ad","timestamp":"2015-04-25 02:11:16 +0700","creditcard":"1212-1221-1121-1234"},
    {"name":"Alessandra Nader Sr.","email":null,"city":"Yasminville","mac":"8e:6a:df:fb:35:4a","timestamp":"2015-04-25 05:15:08 +0700","creditcard":"1211-1221-1234-2201"},
    {"name":"Leora Heller","email":null,"city":"Port Jerad","mac":"c6:bf:5a:51:c2:70","timestamp":"2015-04-25 13:40:33 +0700","creditcard":null},
    {"name":"Crystel Satterfield","email":"olin@christiansenklocko.name","city":"New Ebony","mac":"ef:97:12:2e:67:30","timestamp":"2015-04-25 12:45:19 +0700","creditcard":null},
    {"name":"Neal Nitzsche","email":null,"city":"Rohanview","mac":"f1:6a:f4:2b:bb:d2","timestamp":"2015-04-25 22:33:50 +0700","creditcard":null},
    {"name":"Ramona Lubowitz","email":null,"city":"Port Ford","mac":"c1:c2:43:0c:e0:d8","timestamp":"2015-04-25 16:28:26 +0700","creditcard":"1228-1221-1221-1431"},
    {"name":"Miss Brock Macejkovic","email":null,"city":null,"mac":"ed:0b:2c:db:a9:6f","timestamp":"2015-04-25 01:47:22 +0700","creditcard":null},
    {"name":"Mrs. Keyon Bergnaum","email":null,"city":"Port Alaynaview","mac":"f0:df:59:38:62:ba","timestamp":"2015-04-25 12:31:33 +0700","creditcard":null},
];

const htmlElem = document.querySelector('#root');

function renderHTML (dataToRender, renderPlace) {
    renderPlace.appendChild(dataToRender);
}

function dataToTable (data) {

    let table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    let thead = document.createElement('thead');
    thead.classList.add('thead-dark');
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    

    Object.keys(data[0]).forEach(item => {
        let th = document.createElement('th');
        th.textContent = item[0].toUpperCase() + item.slice(1);
        tr.appendChild(th);
    });

    data.map((item) => {
        let tr = document.createElement('tr');
        Object.values(item).forEach(itemData => {
            let td = document.createElement('td');
            td.textContent = itemData;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    renderHTML(table, htmlElem);
}

dataToTable(data);