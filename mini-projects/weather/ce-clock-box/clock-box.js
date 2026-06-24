const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="ce-clock-box/clock-box.css">
    <div class="clock"></div>
    `

class ClockBox extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallback () {
        // Codes - Event Handling

        console.log("کامپوننت به دام ملحق شد");

        let clockElem = this.shadowRoot.querySelector('.clock');
        setInterval(() => {
            showTime(new Date().toLocaleTimeString('en-US', { hour12: true }));   
        }, 1000);

        function showTime(clock){

            clockElem.innerHTML = clock;
        }
    }

    disconnectedCallback () {
        // Remove Handlers
        console.log('کامپوننت از دام ریمو شد');
    }

    // static observedAttributes () {
    //     return []
    // }

}

export { ClockBox }