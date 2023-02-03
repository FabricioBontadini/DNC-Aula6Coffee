const link = document.getElementById('modal')
const modal = document.querySelector('dialog')
const buttonClose = document.getElementById('closex')

const salenow = 

link.onclick = function() {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}

