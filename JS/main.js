  function openMenu(){
    const addBody = document.querySelector("body")
    const addMenu = document.querySelector("#menu")
    addBody.classList.add('MenuOn')
    addMenu.classList.remove('Close')
    addMenu.classList.add('Open')

  }

  function CloseMenu(){
    const addBody = document.querySelector("body")
    const addMenu = document.querySelector("#menu")
    addBody.classList.remove('MenuOn')
    addMenu.classList.remove('Open')
    addMenu.classList.add('Close')
  }

