function customRender(reactElement, constiner) {
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.chaildren
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // constiner.appendChild(domElement)

    const domElement = document.createElement
        (reactElement.type)
    domElement.innerHTML = reactElement.chaildren
    for (const prop in reactElement.props) {
        if (prop == 'chaildren') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    constiner.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    chaildren: 'Click me to visit google'

}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)