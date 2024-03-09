const removeActive = () => {
    //Transformando o nodelist em array
    const btnActive = [...document.querySelectorAll(".opcoes_estilos_primeval.active")];
    //map para percorrer
    btnActive.map((el) => {
        el.classList.remove("active");
    })

}

const removeActiveOpcoes = () => {
    //Transformando o nodelist em array
    const btnActive = [...document.querySelectorAll(".opcoes_outros.active")];
    //map para percorrer
    btnActive.map((el) => {
        el.classList.remove("active");
    })

}


function primeval() {

    let opcoes_primeval = document.querySelectorAll(".opcoes_estilos_primeval");
    let img_primeval = document.querySelector(".primeval_low_rate");
    let title_primeval = document.querySelector(".title_primeval_low h2");
    let sub_title_primeval = document.querySelector(".sub_title_primeval_low p");

    let opcoes_int = document.querySelector(".area_primeval_opcoes_int");
    let outras_opcoes = document.querySelectorAll(".opcoes_outros");

    opcoes_primeval.forEach((element, key) => {
        element.addEventListener('click', () => {
            animation_opacity()
            switch (key) {
                case 0:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'flex';
                    outras_opcoes.forEach((element) => {
                        element.classList.remove("active");
                    });


                    img_primeval.src = 'img_classic/classic_x50.png';
                    title_primeval.innerHTML = 'CLASSIC';
                    sub_title_primeval.innerHTML = `Um mundo para os jogadores destinados ao PVP Mid Rate com gráficos renovados e
                    jogabilidade do clássico Interlude.<br><br>

                    Progressão acelerada, recompensas diárias e objetivos coletivos, o PVP é o alvo
                    principal para os jogadores do mundo Classic. Uma experiência única com
                    competitividade de alto nível.<br><br>

                    <a href="#">Saiba mais sobre este mundo.</a>`;
                    break;

                case 1:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[0].classList.add("active");

                    break;
                case 2:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[1].classList.add("active");

                    break;
                case 3:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[2].classList.add("active");

                    break;
                case 4:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[3].classList.add("active");

                    break;
                case 5:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[4].classList.add("active");

                    break;
            }
        });
    });


}

primeval()

function animation_opacity() {
    let animationOpacity = document.querySelectorAll(".animation_opacity_primeval");

    animationOpacity.forEach((element) => {

        element.style.animation = "opacidade 400ms";

        setTimeout(() => {
            element.style.animation = "";
        }, 200);
    });

}

function menu() {
    let open = document.querySelector(".menu_open");
    let menu = document.getElementById("container_menu");
    open.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.style.right = "0px";
        menu.style.animation = "move ease-in 400ms";
    });

    let close = document.querySelector(".close");

    close.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.style.right = "-100%";
        menu.style.animation = "move ease-out 400ms";
    });

    let area_menu = document.querySelectorAll(".area_menu nav ul li a");

    area_menu.forEach((element) => {
        element.addEventListener("click", () => {
            menu.style.right = "-100%";
            menu.style.animation = "move ease-out 400ms";
        });
    });
}
menu();


const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
    const area_window = window.innerHeight * 0.21 * 3.8;

    animations.forEach((element) => {
        let posicaoAtual = element.getBoundingClientRect().top;

        if (area_window > posicaoAtual) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

if (animations.length) {
    window.addEventListener("scroll", animation_scroll);
}

function close_modal() {

    let open_modal = document.querySelector(".container_modal");
    let btn_modal = document.querySelectorAll(".sub_title_primeval_war p a");
    let close_modal = document.querySelector(".close_modal");

    let modal_iframe = document.querySelector(".area_modal iframe");
  
    btn_modal.forEach( (element, key) => {
        element.addEventListener("click", () => {
            modal_iframe.src = btn_modal[key].attributes[0].value;
            open_modal.style.opacity = 1;
            open_modal.style.display.animation = "modal_animation 200ms";
            setTimeout(() => {
              open_modal.style.display = "flex";
            }, 200);
        
          });
    });

    close_modal.addEventListener("click", () => {
      open_modal.style.opacity = 0;
      open_modal.style.display.animation = "";
      setTimeout(() => {
        open_modal.style.display = "none";
      }, 200);
  
    });
  
  }
  close_modal();