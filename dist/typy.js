// CREATED By MotahharMokfi

function dictChecker(CONTENT, DEFAULT) {
  if (CONTENT != undefined) {
    return CONTENT;
  } else {
    return DEFAULT;
  }
}

class Typy {
  constructor(SELECTOR, SETTING) {
    this.el = document.querySelector(SELECTOR);
    this.SETTING = {};

    this.SETTING["selector"] = SELECTOR;
    this.SETTING["content"] = dictChecker(SETTING["content"], [
      "Type Something",
      "with",
      "Typy",
    ]);
    this.SETTING["speed"] = dictChecker(SETTING["speed"], 250);
    this.SETTING["hasCursor"] = dictChecker(SETTING["hasCursor"], true);
    this.SETTING["cursor"] = dictChecker(SETTING["cursor"], "|");
    this.SETTING["loop"] = dictChecker(SETTING["loop"], true);
  }

  start() {
    let setting = this.SETTING;

    let content = setting["content"];
    let cursor = setting["cursor"];
    let speed = setting["speed"];
    let hasCursor = setting["hasCursor"];
    let whileLoop = setting["loop"];

    if (!hasCursor) {
      cursor = "";
    }

    var text_position = 0;
    var __content = content[0];
    var __content_checker = 0;
    var __cursor_checker = true;
    var __cursor = cursor;
    const typewriter = () => {
      if (__cursor_checker) {
        __cursor = cursor;
        __cursor_checker = false;
      } else {
        __cursor = "";
        __cursor_checker = true;
      }

      if (text_position == __content.length) {
        __cursor = "";
      }

      this.el.innerHTML = __content.substring(0, text_position) + __cursor;

      if (text_position++ != __content.length) {
        setTimeout(typewriter, speed);
      } else {
        if (content[__content_checker + 1] != undefined) {
          __content = content[++__content_checker];
          text_position = 0;
          setTimeout(typewriter, speed);
        } else if (whileLoop) {
          __content_checker = 0;
          __content = content[__content_checker];
          text_position = 0;
          setTimeout(typewriter, speed);
        }
      }
    };

    typewriter();
  }
}
