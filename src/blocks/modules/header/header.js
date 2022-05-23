document.addEventListener("DOMContentLoaded", () => {
  const burgerToggle = document.getElementById("toggle")
  burgerToggle.addEventListener("change", () => {
    const navList = document.getElementsByClassName("header__nav")
    for (let index = 0; index < navList.length; index++) {
      const el = navList[index]
      el.classList.toggle("--burger-header")
    }
  })
})
