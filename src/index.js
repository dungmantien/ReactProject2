import Contact from "./srceens/Contact.js";
import Home from "./srceens/home.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
  "/": Home,
  "/home": Home,
  "/contact": Contact,
};
console.log();
const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] || Home;
  //   const header = document.getElementById('header-container');
  //   header.innerHTML = await Header.render();
  //   await Header.after_render();

  //   const aside = document.getElementById('aside-container');
  //   aside.innerHTML = await Aside.render();
  //   await Aside.after_render();

  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
