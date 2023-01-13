import ElementService from "./elements";
import ElementListView from "./elements";

errorHandlerWrapper(async function getFewElementsFromBackend() {
  let elemServ = new ElementService();
  elemServ.getRemainingItems();

  let updatedState = createStateForList(elemServ.fetchedData);

  elementListView(updatedState);
});

async function getFewElementsFromBackend() {
  try {
    let elemServ = new ElementService();
    elemServ.getRemainingItems();

    let updatedState = createStateForList(elemServ.fetchedData);

    elementListView.render(updatedState);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.statusCode);
  }
}
async function getFewElementsFromBackend() {
  try {
    let elemServ = new ElementService();
    elemServ.getRemainingItems();

    let updatedState = createStateForList(elemServ.fetchedData);

    elementListView.render(updatedState);
  } catch (error) {
    console.log(error);
  }
}
async function getFewElementsFromBackend() {
  try {
    let elemServ = new ElementService();
    elemServ.getRemainingItems();

    let updatedState = createStateForList(elemServ.fetchedData);

    elementListView.render(updatedState);
  } catch (error) {
    console.log(error);
  }
}
