const categories = document.querySelector('.categories')
const projectsContainer = document.querySelector('.projects')
const projects = document.querySelectorAll('.projects')

categories.addEventListener('click', (e)=>{
    const filter = e.target.dataset.category
    // console.log(filter)
    if(filter == null){
        return;
    }
    activeSelection(e.target)
    filterProjects(filter)
})

function activeSelection(target){
    const active = document.querySelector('.category--selected')
    active.classList.remove('category--selected')
    target.classList.add('category--selected')
}

function filterProjects(filter){
    projects.forEach((project)=>{
        if(filter === 'all' || filter === project.dataset.type){
            project.computedStyleMap.display = 'block'
        }else{
            project.computedStyleMap.display = 'none'
        }
    })
    projectsContainer.classList.add('anim-out')
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out')
    },300)
}



// 요소.dataset.type
const data = document.que