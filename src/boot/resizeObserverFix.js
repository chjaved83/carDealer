import { defineBoot } from '#q-app/wrappers'

export default defineBoot(() => {
  const resizeObserverErr = /ResizeObserver loop completed with undelivered notifications/

  window.addEventListener("error", e => {
    if (resizeObserverErr.test(e.message)) {
      e.stopImmediatePropagation()
    }
  })

  const OriginalResizeObserver = window.ResizeObserver
  window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
    constructor(callback) {
      super((entries, observer) => {
        requestAnimationFrame(() => {
          callback(entries, observer)
        })
      })
    }
  }
})
