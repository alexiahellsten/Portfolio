window.onload = function(){

//Setting up a SVG favicon in the head section
const favicon = document.querySelector(
    `head > link[rel='icon']`
  );
  
  function template(string, icon) {
    return `
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${icon}
        </text>
      </svg>
    `.trim();
  }
}