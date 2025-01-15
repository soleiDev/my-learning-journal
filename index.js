const viewMoreBtn = document.getElementById('view-more-btn')
const hiddenArticles = document.querySelectorAll('.recent-posts-container article:nth-child(n+7)')

viewMoreBtn.addEventListener( 'click', () => {
    hiddenArticles.forEach( article => {
        article.style.display = 'block'
    })

    viewMoreBtn.style.display = 'none'
})