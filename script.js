console.log("Hello World!")

function showURL() {
    const url = document.getElementById("wiki-frame").contentWindow.document.title
    alert(url)
}