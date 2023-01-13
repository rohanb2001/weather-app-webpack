class ElementService {
  constructor() {
    (this.fetchedData = []),
      (this.error = null),
      (this.errorMessage = ""),
      (this.name = "");
  }

  async getRemainingItems() {
    let data = await axios.get("http://pokemon.com", { id: 20 });
    this.fetchedData = data;
  }
  getNames() {
    this.name = "ayan";
    if (this.name.length !== 0) {
      this.error = "No error found!";
    }
  }
}
