// Generate a unique id string
export function makeid(length: number): string {
  // TODO: figure out how high length needs to be to avoid collision. 
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// TODO: figure out how to generate this class with javascript so it works without needing to add a class manually
export const HIDDEN_CLASS_NAME = "hidden"

export function toggleElementVisibility(elementId: string) {
  let element = document.getElementById(elementId)
  if (element) {
    console.log(element.classList)
    if(element.classList.contains(HIDDEN_CLASS_NAME)){
      console.log("element is hidden, unhiding it")
      element.classList.remove(HIDDEN_CLASS_NAME)
      console.log(element.classList)
    } else {
      element.classList.add(HIDDEN_CLASS_NAME)
    }
  }
}

// export function destoryElement(elementId: string) {
//   let element = document.getElementById(elementId)
//   if(element){
//     element.remove()
//   }
// }