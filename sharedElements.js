// footer-component.js
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = //html
        `
            <a href="https://discord.gg/99DUces7Gh" target="_blank"><img src="icon_discord.png" class="footer-icon"></a>
            <a href="https://www.youtube.com/channel/UCNmjcyOUzKybMeXUT_H9JPw" target="_blank"><img src="icon_youtube.png" class="footer-icon"></a>
        `;
    }
}

customElements.define('my-footer', MyFooter);
