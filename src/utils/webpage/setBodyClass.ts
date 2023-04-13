export default function setBodyClass(className: string): void {
    let currentClasses = document.body.classList;
    currentClasses.forEach((c) => document.body.classList.remove(c));
    document.body.classList.add(className);
}
