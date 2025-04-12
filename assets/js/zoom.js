// Initialize medium zoom.
// $(document).ready(function () {
//   medium_zoom = mediumZoom("[data-zoomable]", {
//     background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
//   });
// });


// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]:not(.preview)", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
});

