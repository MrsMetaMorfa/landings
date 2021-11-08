/*!
 * gulp-nunjucks-sass-template
 * A Gulp 4 template including SCSS, Nunjucks, JS and more
 *
 * Url: https://github.com/DefaultSimon
 * Author: Simon Goričar
 * Copyright 2021. License: MIT
 */
window.onload = () => {
  'use strict';

  const menuDesigns = new Vivus(
    'menu_designs',
    {
      duration: 300,
      animTimingFunction: Vivus.EASE,
      onReady: () => {
        ResetAnimationMenuDesigns()
      }
    }
  );

  function ResetAnimationMenuDesigns() {
    setTimeout(() => {
      menuDesigns.stop().reset().play(1, ResetAnimationMenuDesigns());
    }, 6000)
  }

  const menuProjects = new Vivus(
    'menu_projects',
    {
      type: 'scenario-sync',
      animTimingFunction: Vivus.EASE,
      onReady: () => {
        ResetAnimationMenuProjects()
      }
    }
  );

  function ResetAnimationMenuProjects() {
    setTimeout(() => {
      menuProjects.stop().reset().play(1, ResetAnimationMenuProjects());
    }, 7000)
  }

  const map = new Vivus(
    'map',
    {
      type: 'scenario',
      animTimingFunction: Vivus.EASE,
      onReady: () => {
        ResetAnimationMap()
      }
    }
  );

  function ResetAnimationMap() {
    setTimeout(() => {
      map.stop().reset().play(1, ResetAnimationMap());
    }, 10000)
  }

  if (document.querySelector('.paginator')) {
    let linkList = document.querySelectorAll('.paginator .paginator_link');
    let sectionList = document.querySelectorAll('.section');
    function SetProgress(topPosition, windowHeight) {
      sectionList.forEach((section, index) => {
        if ((section.getBoundingClientRect().y + topPosition) < (topPosition + (windowHeight / 2))) {
          if ((section.getBoundingClientRect().y + section.getBoundingClientRect().height + topPosition) > (topPosition + (windowHeight / 2))) {
            linkList[index].classList.add('current', 'active');
          } else {
            linkList[index].classList.add('active');
            linkList[index].classList.remove('current');
          }
        } else {
          if (linkList[index].classList.contains('active')) {
            linkList[index].classList.remove('active');
          }
          if (linkList[index].classList.contains('current')) {
            linkList[index].classList.remove('current');
          }
        }
      });
    }

    SetProgress(window.scrollY, window.innerHeight)

    window.onscroll = () => {
      SetProgress(window.scrollY, window.innerHeight)
    }
  }

  const Inputs = document.querySelectorAll("input");

  const prefixNumber = (str) => {
    if (str === "7") {
      return "7 (";
    }
    if (str === "8") {
      return "8 (";
    }
    if (str === "9") {
      return "7 (9";
    }
    return "7 (";
  };

// ======================================
  Inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const value = input.value.replace(/\D+/g, "");
      const numberLength = 11;

      let result;
      if (input.value.includes("+8") || input.value[0] === "8") {
        result = "";
      } else {
        result = "+";
      }

      //
      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ") ";
            break;
          case 7:
            result += "-";
            break;
          case 9:
            result += "-";
            break;
          default:
            break;
        }
        result += value[i];
      }
      //
      input.value = result;
    });
// ======================================
  });

  const headerHamburger = document.querySelector('.header_button');
  const headerMobileMenu = document.querySelector('.header_mobile ul');

  headerHamburger.onclick = () => {
    headerMobileMenu.classList.toggle('show');
  }
}

