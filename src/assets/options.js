const iframe = document.getElementById('miframe')
iframe.onload = () => {
  var data = { url: location.href }
  iframe.contentWindow.postMessage(JSON.stringify(data), '*')
}

window.addEventListener('message', e => {
  console.log(e.data)
  const { pagekey } = JSON.parse(e.data)
  const { hash } = location
  const hashkey = hash ? hash.slice(1) : ''
  if (pagekey !== hashkey) {
    location.hash = pagekey
  }
})
