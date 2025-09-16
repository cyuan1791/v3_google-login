// @ts-ignore
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
// @ts-ignore
import vue3GoogleLogin from "vue3-google-login";

let myWindow = window as any;

const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId:
    "764997431754-lqskpfikdo3vfh84abo01bn3dhgrbksb.apps.googleusercontent.com",
});
app.mount("#" + myWindow.asoneId);
