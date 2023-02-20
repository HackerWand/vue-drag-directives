import './styles.css'
function onDrop (e) {
  e.preventDefault()
  this.dispatchEvent(new CustomEvent('file-drag', {
    detail:{
      files: e.dataTransfer.files
    }
  }))
}

function onDragenter (e) {
  e.preventDefault()
  this.classList.add("dragover")
}

function onDragleave (e) {
  e.preventDefault()
  if (e.relatedTarget !== this) {
    this.classList.remove("dragover")
  }
}

function onDragover (e) {
  e.preventDefault()
}

export default {
  install (app) {
    app.directive('drag', {
      mounted (el) {
        el.classList.add('vue-drag-directives')
        el.addEventListener('drop', onDrop)
        el.addEventListener('dragenter', onDragenter)
        el.addEventListener('dragleave', onDragleave)
        el.addEventListener('dragover', onDragover)
      },
      unmounted (el) {
        el.removeEventListener('drag', onDrop)
        el.removeEventListener('dragenter', onDragenter)
        el.removeEventListener('dragleave', onDragleave)
        el.removeEventListener('dragover', onDragover)
      }
    })
  }
}