
// Evento de Navegadores
$(document).ready(function(){
    let arquivo = $("#arquivo");
    let cliente = $("#cliente");
    let servico = $("#servico");
    let orcamento = $("#orcamento");
    let os = $("#os");
    let forcenedores = $("#fornecedores");
    let relatorios = $("#relatorios");
    let verificaNavClick = $(".nav-item dropdown");
    // arquivo.on("click", function(e){
    //     e.preventDefault();
    //     arquivo.css({"background-color":"rgba(197, 167, 161)", "color":"black"});
    //     cliente.css({"color":"rgba(255, 255, 255, 0.5)","background-color":"rgba(14, 2, 2, 0.829)"});
    // },function(e){
    //     e.preventDefault();
    //     cliente.css({"background-color":"rgba(197, 167, 161)", "color":"black"});
    //     arquivo.css({"color":"rgba(255, 255, 255, 0.5)","background-color":"rgba(14, 2, 2, 0.829)"});
    // }
    // );
    // cliente.click( 
    //     function(e){
    //         cliente.css({"background-color":"rgba(197, 167, 161)", "color":"black"});
            
    //     }
    // );

    // $(".nav-link").hover(function(e){
    //     e.preventDefault();
    //     $(".dropdown").addClass("focusNavBar");
    // });



//     $(".nav-link").on("click",function(e){
//         e.preventDefault();
//         $(".dropdown").addClass("focusNavBar");
        
//         $(".dropdown").hover(
//             function(e){

//             },
//             function(e){
//                 $(".version").click();
//             }
//         );
        
        
//     });

    $(".close").on("click", function(e){
        $(".tamanhoOpt").removeClass("show");
    })
});






// const debounce = function(func, wait, immediate){
//     let timeout;
//     return function(...args){
//         const context = this;
//         const later = function(){
//             timeout = null;
//             if(!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if(callNow) func.apply(context, args);
//     };
// };


// const target = document.querySelectorAll('[data-anime]');
// const naigation = document.querySelectorAll('[data-target]');
// const animationClass = 'animate';
// const animationNav = 'animateNav';
// let i=0;
// let primeiro =0;
// function animeScroll(){
    
//     const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    
//     target.forEach(function(element){
        
//         if((windowTop) > element.offsetTop){

//             if(primeiro ==0){
//                 i=windowTop;
//                 primeiro ==1;
//             }
//             element.classList.add(animationClass);
//         }else{
//             element.classList.remove(animationClass);


//         }
//         if(windowTop> 1000){
            

//             naigation.forEach(function(element){
//                 element.classList.add(animationNav);
            
//         })
//         }else{
//             naigation.forEach(function(element){
//                 element.classList.remove(animationNav);
            
//         })
//         }
        
//     })
// }
// animeScroll();

// if(target.length){
//     window.addEventListener('scroll', debounce(function() {
//         animeScroll();
//     }, 200));
// }

// //'nav a[href^="#habilidades"]'
// const menuItens = document.querySelectorAll('nav a');
// menuItens.forEach(item =>{
//     item.addEventListener('click', scrollToIdOnClick);
// })

// function scrollToIdOnClick(event){
//     event.preventDefault();
//     const elemento = event.target;
//     const id = elemento.getAttribute('href');
//     const to = document.querySelector(id).offsetTop;
//     window.scroll({
//         top: to - 80,
//         behavior: "smooth"
        
//     });
// }


