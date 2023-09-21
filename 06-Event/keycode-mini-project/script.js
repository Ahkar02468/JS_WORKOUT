const insert = document.getElementById('insert');
console.log(insert.innerText);

window.addEventListener('keydown', e => {
    insert.innerHTML = `
        <div class="key">
            ${e.key === ' '? e.key = 'Space' : e.key }
            <small>e.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>e.keycode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>e.code</small>
        </div>`
})