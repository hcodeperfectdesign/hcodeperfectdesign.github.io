    const btnOpen = document.querySelector('#open-btn');
        btnOpen.addEventListener('click', e=> {
        const header = document.querySelector('body');
        header.classList.toggle('open-menu');
        }
    );
    
    const btnClose = document.querySelector('#header-menu');
        btnClose.addEventListener('click', e=> {
        const header = document.querySelector('body');
        header.classList.toggle('open-menu');
        }
    );