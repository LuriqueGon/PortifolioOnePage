
projects.forEach(project => {

    // CARD DO

    const cardGroup = document.querySelector('.swiper-wrapper')

    const slide = document.createElement('div')
    slide.className = "swiper-slide"

    const projectImg = document.createElement('div')
    projectImg.className = "project-img"

    const img = document.createElement('img')
    img.src = `./img/${project.image}`

    const projectInfo = document.createElement('div')
    projectInfo.className = "project-info"

    const h2 = document.createElement('div')
    h2.textContent = project.title

    const button = document.createElement('div')
    button.className = "button-config btn btn-dark text-light"
    button.setAttribute('href', `#${project.id}`)
    button.setAttribute('data-bs-toggle', 'modal')
    button.setAttribute('data-bs-target', `#modalProject${project.id}`)
    button.textContent = "Saiba Mais"
    
    projectInfo.appendChild(h2)
    projectInfo.appendChild(button)
    projectImg.appendChild(img)
    slide.appendChild(projectImg)
    slide.appendChild(projectInfo)

    // MODAL DO
    const modalContentSection = document.querySelector('section.modals')

    const modal = document.createElement('div')
    modal.className = "modal fade"
    modal.id = `modalProject${project.id}`
    modal.setAttribute('tabindex', '-1')

    const modalDialog = document.createElement('div')
    modalDialog.className = "modal-dialog"

    const modalContent = document.createElement('div')
    modalContent.className = "modal-content bg-dark"

    const modalHeader = document.createElement('div')
    modalHeader.className = "modal-header border border-0 text-light text-center"

    const modalTitle = document.createElement('h5')
    modalTitle.className = "modal-title"
    modalTitle.textContent = project.title

    const modalIco = document.createElement('i')
    modalIco.className = "fa fa-close icoClose btn-danger text-danger"
    modalIco.setAttribute('data-bs-dismiss', 'modal')
    modalIco.setAttribute('aria-label', 'close')

    const modalBody = document.createElement('div')
    modalBody.className = "modal-body text-light text-center"

    const modalTech = document.createElement('p')
    modalTech.textContent = "Tecnologias"

    const modalTechText = document.createElement('span')
    modalTechText.className = "text-info"
    modalTechText.textContent = project.Tech

    const modalFooter = document.createElement('div')
    modalFooter.className = "modal-footer border border-0 d-flex justify-content-evenly"

    const modalRepo = document.createElement('a')
    modalRepo.className = "btn btn-primary"
    modalRepo.setAttribute('target', '_blank')
    modalRepo.setAttribute('href', `https://github.com/LuriqueGon/${project.github}#boaLeituraDeCodigo`)
    modalRepo.textContent = "Acessar Repositorio"

    const modalAcess = document.createElement('a')
    modalAcess.className = "btn btn-primary"
    modalAcess.setAttribute('target', '_blank')
    modalAcess.textContent = "Acessar Projeto"

    if (project.type == 1) {
        modalAcess.setAttribute('href', `${project.host}#BonsTestes`)
    }

    modalFooter.appendChild(modalRepo)
    if (project.type == 1) {
        modalFooter.appendChild(modalAcess)
    }

    modalBody.appendChild(modalTech)
    modalBody.appendChild(modalTechText)

    modalHeader.appendChild(modalTitle)
    modalHeader.appendChild(modalIco)

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)

    modalDialog.appendChild(modalContent)

    modal.appendChild(modalDialog)

    modalContentSection.appendChild(modal)

    cardGroup.appendChild(slide)

});