
// 반복문
const ulEl = document.querySelector('ul')

for (let i=0; i<10; i++) {
    const li = document.createElement('li')
    li.textContent = `list-${i+1}`
    li.addEventListener('click', function() {
        console.log(li.textContent)
    })
    ulEl.appendChild(li)

}