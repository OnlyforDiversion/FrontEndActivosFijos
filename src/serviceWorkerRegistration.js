export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registrado: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW falló al registrarse: ", registrationError);
        });
    });
  }
}