import faker from 'faker'

let cartString=`<h3> ${faker.datatype.number(20)}</h3>`;

document.querySelector('#cart-list').innerHTML=cartString