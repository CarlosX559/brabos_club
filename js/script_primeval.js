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


                    img_primeval.src = 'img_primeval/primeval_low_rate.png';
                    title_primeval.innerHTML = 'PRIMEVAL LOW RATE';
                    sub_title_primeval.innerHTML = `O Bom e velho Lineage! Um mundo para jogadores que apreciam o clássico do
                    Lineage, com jornada intensa e progressão valiosa.<br><br>

                    Sistema exclusivo de progressão gradativa, com uma atmosfera única e imersiva
                    destinada aos que querem explorar ao máximo tudo que o mundo do Lineage 2 tem a
                    oferecer.<br><br>

                    <a href="#">Saiba mais sobre este mundo.</a>`;
                    break;

                case 1:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'flex';
                    outras_opcoes.forEach((element) => {
                        element.classList.remove("active");
                    });

                    img_primeval.src = 'img_primeval/gameplay.png';
                    title_primeval.innerHTML = 'gameplay';
                    sub_title_primeval.innerHTML = `
                    <ul>
                        <li>O jogador poderá conectar até 3 telas;</li>
                        <li>Chat global habilitado (utilize "!" antes das mensagens in-game);</li>
                        <li>Teleport gratuito até o level 40;</li>
                        <li>Newbie Guide concede todos os buffs beginner do level 1 ao 80;</li>
                        <li>Buffs Songs e Dances duram 5 minutos;</li>
                        <li>Comands habilitado para todos: .xpon/off | .help | .time;</li>
                        <li>Redução do random respawn dos raid bosses para 1 hora;</li>
                        <li>Quests para 1ª, 2ª e 3ª job são necessárias para obtenção das classes;</li>
                        <li>Aprendizado de skills conforme os conceitos estabelecidos pela NCSoft;</li>
                        <li>Seven Signs e Sieges conforme os conceitos estabelecidos pela NCSoft;</li>
                        <li>Rates de enchant de armas, armaduras e joias conforme os conceitos estabelecidos pela NCSoft;</li>
                        <li>PC Bang Points ou Brabos Time Points habilitado.</li>
                    </ul>
`;
                    break;
                case 2:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'flex';
                    outras_opcoes.forEach((element) => {
                        element.classList.remove("active");
                    });

                    img_primeval.src = 'img_primeval/raide_boss.png';
                    title_primeval.innerHTML = 'Raid e EPIC Bosses';
                    sub_title_primeval.innerHTML = `
                    <table class='responsive-table'>
                      <thead>
                        <tr>
                            <th>BOSS</th>
                            <th>TIME</th>
                            <th>TIME</th>
                        </tr>
                      </thead>
              
                      <tbody>
                        <tr>
                            <td>Normal Raid Boss</td>
                            <td>12 horas</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>
                        <tr>
                            <td>Queen Ant</td>
                            <td>48 horas</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>
                        <tr>
                            <td>Core</td>
                            <td>48 horas</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>

                        <tr>
                            <td>Orfen</td>
                            <td>48 horas</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>
                        <tr>
                            <td>Zaken</td>
                            <td>72 horas</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>
                        <tr>
                            <td>Baium</td>
                            <td>5 dias</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>

                        <tr>
                            <td>Frintezza</td>
                            <td>48 horas</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>
                        <tr>
                            <td>Antharas</td>
                            <td>11 dias</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>
                        <tr>
                            <td>Valakas</td>
                            <td>11 dias</td>
                            <td>1 hora random+-30 minutos</td>
                        </tr>

                      </tbody>
                    </table>`;
                    break;
                case 3:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[0].classList.add("active");

                    break;
                case 4:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[1].classList.add("active");

                    break;
                case 5:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[2].classList.add("active");

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
  