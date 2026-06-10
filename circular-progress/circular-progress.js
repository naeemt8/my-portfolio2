const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="circular-progress/circular-progress.css">
<svg width="120" height="120">
    <circle class="bg" cx="60" cy="60" r="50"></circle>
    <circle class="progress" cx="60" cy="60" r="50"></circle>
    <text x="60" y="63" text-anchor="middle" dominant-baseline="middle" class="percent">80%</text>
</svg>
`

class CircularProgress extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallback () {

        console.log("کامپوننت به دام ملحق شد");

        const percentNum = this.getAttribute('circle-percent')
        const color = this.getAttribute('circle-color')

        const circle = this.shadowRoot.querySelector('.progress');
        const circumference = 314;
        const percentElem = this.shadowRoot.querySelector('.percent');
        
        circle.style.strokeDashoffset = circumference * (1 - percentNum / 100);
        circle.style.stroke = color;
        percentElem.innerHTML = `${percentNum}%`;

    }

    disconnectedCallback () {
        // Remove Handlers
        console.log('کامپوننت از دام ریمو شد');
    }

    static observedAttributes () {
        return ['circle-color', 'circle-percent']
    }

}

export { CircularProgress }