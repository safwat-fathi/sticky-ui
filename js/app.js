(() => {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("awd");
    const sidebarOne = new StickySidebar(".sidebarOne", {
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: ".main-content",
      innerWrapperSelector: ".sidebar__inner",
    });

    const sidebarTwo = new StickySidebar(".sidebarTwo", {
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: ".main-content",
      innerWrapperSelector: ".sidebar__inner",
    });
  });
})();
