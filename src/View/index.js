export function elementListView(data) {
  this.innerText = data.map((item) => {
    `<div>
            <h1>ayan {item}</h1>
        </div>`;
  });
}
