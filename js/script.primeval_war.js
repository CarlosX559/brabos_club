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


                    img_primeval.src = 'img_primeval_war/primeval_war.png';
                    title_primeval.innerHTML = 'PRIMEVAL WAR';
                    sub_title_primeval.innerHTML = `Um Mundo para os amantes do PVP. Personagens prontos para o combate com jornada
                    simplificada.<br><br>

                    Temporadas mensais com mecânicas e eventos exclusivos para revelar os melhores
                    guerreiros deste mundo. Renovação de recursos e destaque aos que se mostrarem
                    habilidosos no combate PVP.<br><br>

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
                    outras_opcoes[1].classList.add("active");

                    break;
                case 4:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[2].classList.add("active");

                    break;
                case 5:
                    removeActive()
                    element.classList.toggle("active");
                    opcoes_int.style.display = 'none';
                    removeActiveOpcoes()
                    outras_opcoes[3].classList.add("active");

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

