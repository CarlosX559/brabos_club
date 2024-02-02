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

const removeActive = () => {
  //Transformando o nodelist em array
  const btnActive = [...document.querySelectorAll(".personagem_option.active")];
  //map para percorrer
  btnActive.map((el) => {
      el.classList.remove("active");
  })

}

function personagens() {

  let personagens = document.querySelectorAll(".area_opcoes_personagens img");

  let title = document.querySelector(".title_card_personagem h2");
  let sub_title = document.querySelector(".sub_title_info_caracteristicas p");
  let personagens_opcao = document.querySelector(".personagens");
  let tipo_mistico = document.querySelector(".title_info_tipo_mistico h2");
  let sub_tipo_mistico = document.querySelector(".sub_title_info_tipo_mistico p");
  
  let bg_personagens = document.getElementById("container_personagens");

  let info_tipo = document.querySelector(".info_tipo p");

  let animationOpacity = document.querySelectorAll(".animation_opacity");
  let animationOpacityBg = document.querySelector(".animation_opacity_bg");

  personagens.forEach((element, key) => {
    element.addEventListener('click', () => {

      animationOpacity.forEach((element) => {
    
        element.style.animation = "opacidade 400ms";
        animationOpacityBg.style.animation = "opacidade";
      
        setTimeout(() => {
          element.style.animation = "";
          animationOpacityBg.style.animation = "";
        }, 200);
      });


      switch (key) {
        case 0:
          removeActive()
          element.classList.toggle("active");

          bg_personagens.style.backgroundImage = "url(img/personagens_bg_humanos.webp)";

          title.innerHTML = "humanos";
          sub_title.innerHTML = `Mais balanceado em status.<br>
          Apesar de não tem nenhuma habilidade especial, sua vantagem é poder se transferir para classes mais especializadas.`;
          info_tipo.innerHTML = `É um tipo de lutador básico, que possui destreza e força. No estilo de jogo eles são habilidosos em combate de curto alcance, principalmente usando espadas, mas também podem se especializar em combate de longo alcance mais tarde em suas Jobs.<br><br>
          O Humano Fighter em sua primeira mudança de classe (Job) pode ser:<br><br>
          <b>Warrior:</b> Os que querem seguir o caminho para Warlord (guerreiros que usam lanças) ou Duelist (guerreiros que usam duas espadas).<br>
          <b>Knight:</b> Os que querem seguir o caminho de Tank Paladin ou Dark Avanger (guerreiros que são especializados em defesa).<br>
          <b>Rogue:</b> Os que querem seguir o caminho furtivo Treasure Hunter (que usam adagas) ou longo alcance Hawkeye (que usam arco e flecha).`;
          tipo_mistico.innerHTML = "MÍSTICO";
          sub_tipo_mistico.innerHTML = `É um tipo de lutador básico, que possui destreza e força. No estilo de jogo eles são habilidosos em combate de curto alcance, principalmente usando espadas, mas também podem se especializar em combate de longo alcance mais tarde em suas Jobs.<br><br>
          O Humano Místico em sua primeira mudança de classe (Job) pode ser:<br><br>
          <b>Wizard:</b> magos capazes de causar grande dano nos inimigos, esta classe poderá escolher entre Sorcer (magos do fogo), Necromancer (mago de evocação de mortos) ou Warlock (mago de evocação de aliados para combate).<br>
          <b>Cleric:</b> magos capazes de ajudar os companheiros em batalhas com curas (Bishop) e suporte mágico (Prophet).`;
          personagens_opcao.src = "img/personagens_humanos.png";
          break;

        case 1:
          removeActive()
          element.classList.toggle("active");

          bg_personagens.style.backgroundImage = "url(img/personagens_bg_elfos.webp)";

          title.innerHTML = "elfos";
          sub_title.innerHTML = `São velozes em ataque, movimento e lançamento de magias. São precisos em seus ataques, além de ter alto poder de evasão. Seu ponto fraco é sua força de ataque em relação as outras raças.<br>
          Os elfos podem ficar submersos por mais tempo e saltar para locais mais altos.`;
          info_tipo.innerHTML = `É um tipo de lutador básico, que possui destreza e usam armaduras leves (light) e pesadas (heavy). No estilo de jogo eles são habilidosos em combate de curto alcance, principalmente usando espadas, mas também podem se especializar em combate de longo alcance mais tarde em suas Jobs.<br>
          O Elfo Lutador em sua primeira mudança de classe, pode ser:<br><br>
          <b>Elven Scout:</b> Os que querem seguir caminho para Plains Walker (caçador de recompensas que usam espadas curtas) ou o caminho do Silver Ranger (Arqueiro).<br>
          <b>Elven Knight:</b> Os que querem seguir o caminho para Temple Knight (guerreiros especializados na defesa) ou Sword Singer (encantadores que dão suporte através do canto).`;
          tipo_mistico.innerHTML = "MÍSTICO";
          sub_tipo_mistico.innerHTML = `É uma classe mágica veloz que conjura feitiços e usa túnicas (robe), podem utilizar, cajados, maças e espadas mágicas. Os Elfos místicos são excelentes magos de conjuração e invocação, mas também podem seguir o caminho de suporte auxiliando seus amigos com buffs e curas.<br><br>
          O Elfo Místico em sua primeira mudança de classe, pode ser:<br><br>
          <b>Elven Wizard:</b>  magos capazes de causar grande dano no inimigo, esta classe pode escolher entra Spellsinger (magos da água) ou elemental summoner (mago de invocação de elementais, que causam danos).<br>
          <b>Elven Oracle:</b> magos capazes de ajudar os companheiros em batalhas com curas e suporte mágico (Elven Elder).`;
          personagens_opcao.src = "img/personagens_elfos.png";
          break;

        case 2:
          removeActive()
          element.classList.toggle("active");

          bg_personagens.style.backgroundImage = "url(img/personagens_bg_elfos_negros.webp)";

          title.innerHTML = "elfos negros";
          sub_title.innerHTML = `Eles possuem alto de poder de Ataque e Magia (Força e Inteligência).<br>
          Os elfos podem ficar submersos por mais tempo e saltar para locais mais altos.`;
          info_tipo.innerHTML = `É um tipo de lutador, que possui grande força e utiliza armaduras leves (light). No estilo de jogo eles são habilidosos em combate corpo a corpo, principalmente usando espadas de duas mãos e grandes garras.<br>
          O Orc Lutador em sua primeira mudança de classe, pode ser:<br><br>
          <b>Orc Raider:</b> Os que querem seguir caminho para Destroyer (Destruidores importantes para conquista dos Chefes), esses lutadores utilizam grandes e poderosas espadas de duas mãos, mas também são capazes de utilizar lanças com maestria.<br>
          <b>Orc Monk:</b> Os que querem seguir o caminho para Tyrant (guerreiros especializados no combate corpo a corpo), esses lutadores utilizam grandes garras, são extremamente rápidos em seus ataques quando estão sob efeito dos totens.`;
          tipo_mistico.innerHTML = "MÍSTICO";
          sub_tipo_mistico.innerHTML = `É uma classe mágica poderosa que conjura feitiços e usa túnicas (robe), podem utilizar, cajados, maças e espadas mágicas. Os Dark Elfos místicos são excelentes magos de conjuração e invocação, mas também podem seguir o caminho de suporte auxiliando seus amigos com buffs e curas.<br>
          O Dark Elfo Místico em sua primeira mudança de classe, pode ser:<br><br>
          <b>Dark Wizard:</b> magos capazes de causar grande dano no inimigo, esta classe pode escolher entra Spellhowller (magos do vento) ou Phanton summoner (mago de invocação de elementais, que causam danos).<br>
          <b>Shillen Oracle:</b> magos capazes de ajudar os companheiros em batalhas com curas e suporte mágico (Shillen Elder).`;
          personagens_opcao.src = "img/personagens_elfos_negros.png";
          break;

        case 3:
          removeActive()
          element.classList.toggle("active");

          bg_personagens.style.backgroundImage = "url(img/personagens_bg_orcs.webp)";

          title.innerHTML = "Orcs";
          sub_title.innerHTML = "Possuem grande força e são robustos em vida e mana, possuem alta capacidade de regeneração de vida, no entanto são classes lentas em movimento, lançamento de magias e ataques.<br>Forte resistência a efeitos negativos (debuffs), como venenos, paralisias."
          tipo_mistico.innerHTML = "Místico";
          sub_tipo_mistico.innerHTML = `É uma classe mágica poderosa que conjura feitiços, doenças e encantamentos, usa túnicas (robe), podem utilizar, cajados, maças, machados e espadas mágicas.
          Os orcs místicos são excelentes magos de conjuração, mas também podem seguir o caminho de suporte auxiliando seus amigos com buffs e curas.<br><br>
          O Orc Místico em sua primeira mudança de classe, pode ser:<br><br>
          <b>Orc Shaman:</b> magos capazes de auxiliar seus amigos com suporte mágico e conjurar magias e doenças, esta classe pode escolher entre Warcryer 
          (magos especialistas em suporte para classes lutadoras) ou Overlord (mago de conjuração, especializado no suporte de classes mágicas),
          o Overlord tem como uma particularidade a regeneração de CP e é capaz de dar suporte a um clan e aliança inteiros.`;

          personagens_opcao.src = "img/personagens_orcs.png";
          break;

        case 4:
          removeActive()
          element.classList.toggle("active");

          bg_personagens.style.backgroundImage = "url(img/personagens_bg_dwarfs.webp)";
            
          title.innerHTML = "DWARFS";
          sub_title.innerHTML = "São os únicos capazes de criar itens e possuem grande força. <br>Possui o maior inventário em relação as outras raças e sua penalidade de peso é menor.";
          info_tipo.innerHTML = `É um tipo de artesão e colecionador de itens, que possui grande força e utiliza armaduras pesadas (heavy). No estilo de jogo eles são habilidosos em combate corpo a corpo, principalmente utilizando grandes machados. São capazes de invocar autômatos para auxiliar nas guerras de conquista de Castelos e durante sua caçada.<br><br>
          O Anão em sua primeira mudança de classe, pode ser:<br><br>
          <b>Artisan:</b> Os que querem seguir caminho para Warsmith (Artesãos capazes de produzir armas e armaduras poderosas), esses lutadores utilizam grandes machados.<br>
          <b>Scavanger:</b> Os que querem seguir o caminho para Bounty Hunter (guerreiros especializados em colecionar itens e materiais valiosos), esses lutadores utilizam grandes machados, mas também possuem aptidão com lança.`;
          tipo_mistico.innerHTML = "";
          sub_tipo_mistico.innerHTML = "";
          personagens_opcao.src = "img/personagens_dwarfs.png";
          break;
      }

    });

  });



}

personagens();