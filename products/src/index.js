import faker from 'faker'

let htmlString = ''
for(let i=0;i<5;i++){
    htmlString+=`<ul>
        <li>${faker.commerce.productName()}</li>
    </ul>`
}

document.querySelector('#product-list').innerHTML=htmlString