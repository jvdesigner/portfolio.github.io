// Funcao de movimentacao do menu

const vnavBar = document.getElementById('menu-header');
const viconMenu = document.getElementById('icon-hamburguer');

viconMenu.addEventListener('click', () => {

        if (vnavBar.style.display == 'flex'){

            vnavBar.style.display = 'none';
            document.body.style.overflow = 'auto';

            


        }else{
            vnavBar.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };
        
        


});

window.addEventListener('resize', () => {

    if (window.innerWidth > 1024){

        vnavBar.style.display = 'flex';

    }

    else

    {
        vnavBar.style.display = 'none';
    }

  });