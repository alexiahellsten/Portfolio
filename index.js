//Setting up a SVG favicon in the head section
const $4fe70c33057481a9$var$favicon = document.querySelector(`head > link[rel='icon']`);
function $4fe70c33057481a9$var$template(string, icon) {
    return `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${icon}
        </text>
      </svg>
    `.trim();
}


//# sourceMappingURL=index.js.map
