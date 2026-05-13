import {MainPage} from "./pages/main/index.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root');

const mainPage = new MainPage(root);
mainPage.render();
