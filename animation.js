const addCard = (title, text) => {
  const template = document.createElement("div");
  template.innerHTML = `
      <div class="card">
        <div class="card-body">
          <div class="card-title">${title}</div>
          <div class="card-text">${text}</div>
        </div>
      </div>
    `;
  document.querySelector("#card-list").appendChild(template.firstChild);
};
