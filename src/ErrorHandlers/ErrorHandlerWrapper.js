export function errorHandlerWrapper(fn) {
  try {
    fn();
  } catch (error) {
    console.log(error);
  }
}
