import { Map } from "immutable";

let book = Map({ name: "shafe alam" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);
console.log(book.toJS());
