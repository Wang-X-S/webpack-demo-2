import x from './x.js'

import png from './assets/1.png'  //引入图片
console.log(png)

const div = document.getElementById('app')//创建div
div.innerHTML = `
    <img src="${png}">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => { 
    const promise = import('./lazy.js')
    promise.then((module) => { 
        const fn = module.default
        fn()
    }, () => { 
            console.log('模块加载错误')
    })
}

div.appendChild(button)