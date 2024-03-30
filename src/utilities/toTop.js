//Moves the user to the top of the page when clicked
export default function toTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}