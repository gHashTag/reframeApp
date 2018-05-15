(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homePage~mastersPage"],{

/***/ "./views/ArrowBack.png":
/*!*****************************!*\
  !*** ./views/ArrowBack.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ArrowBack.hash_342a3a4986e9458d17362ca587adb647.png";

/***/ }),

/***/ "./views/ArrowNext.png":
/*!*****************************!*\
  !*** ./views/ArrowNext.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ArrowNext.hash_9de9dcd27caf245bc1bcc8af59163155.png";

/***/ }),

/***/ "./views/Masters/Master.js":
/*!*********************************!*\
  !*** ./views/Masters/Master.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Master; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/exports/TouchableOpacity */ "./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js");
/* harmony import */ var react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_exports_Dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/Dimensions */ "./node_modules/react-native-web/dist/exports/Dimensions/index.js");
/* harmony import */ var react_native_web_dist_exports_Dimensions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Dimensions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/Image */ "./node_modules/react-native-web/dist/exports/Image/index.js");
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.json */ "./views/Masters/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/Object.assign({}, _data_json__WEBPACK_IMPORTED_MODULE_7__, {"default": _data_json__WEBPACK_IMPORTED_MODULE_7__});
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ "./views/Masters/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./views/common/index.js");
/* harmony import */ var _ArrowNext_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ArrowNext.png */ "./views/ArrowNext.png");
/* harmony import */ var _ArrowNext_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ArrowNext_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ArrowBack_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ArrowBack.png */ "./views/ArrowBack.png");
/* harmony import */ var _ArrowBack_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ArrowBack_png__WEBPACK_IMPORTED_MODULE_11__);
















const win = react_native_web_dist_exports_Dimensions__WEBPACK_IMPORTED_MODULE_2___default.a.get('window');

class Master extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  onPressNext(match) {
    return () => {
      const now = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(_data_json__WEBPACK_IMPORTED_MODULE_7__, { name: match.params.name });
      const { history } = this.props;
      if (_data_json__WEBPACK_IMPORTED_MODULE_7__.length !== now.id + 1) {
        const next = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(_data_json__WEBPACK_IMPORTED_MODULE_7__, { id: now.id + 1 });
        history.push(`/master/${next.name}`);
      } else {
        history.push(`/master/${_data_json__WEBPACK_IMPORTED_MODULE_7__[0].name}`);
      }
    };
  }

  onPressBack(match) {
    return () => {
      const now = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(_data_json__WEBPACK_IMPORTED_MODULE_7__, { name: match.params.name });
      const { history } = this.props;
      if (now.id !== 0) {
        const back = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(_data_json__WEBPACK_IMPORTED_MODULE_7__, { id: now.id - 1 });
        history.push(`/master/${back.name}`);
      } else {
        const lengthdata = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(_data_json__WEBPACK_IMPORTED_MODULE_7__, { id: _data_json__WEBPACK_IMPORTED_MODULE_7__.length - 1 });
        history.push(`/master/${lengthdata.name}`);
      }
    };
  }

  render() {
    const { match } = this.props;
    const store = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.find(_data_json__WEBPACK_IMPORTED_MODULE_7__, { name: match.params.name });
    const { img, title, subTitle, info } = store;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_9__["Header"], null),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3___default.a, { source: img, style: { position: 'absolute', left: '8%', bottom: 0, width: 500, height: 500 } }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
        { style: { position: 'absolute', top: '30.9%', right: '15%', width: '40%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a, { className: 'stripe pink' })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
        { style: { position: 'absolute', top: '25%', right: '15%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5___default.a,
          { style: { fontFamily: 'Museo500', fontSize: 40, textAlign: 'right' } },
          title
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
        { style: { position: 'absolute', top: '32%', right: '15%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5___default.a,
          { style: { fontFamily: 'CirceExtraLight', fontSize: 22, textAlign: 'right' } },
          subTitle
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
        { style: { position: 'absolute', width: '40%', top: '38%', right: '15%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
          { style: { flex: 1, flexDirection: 'row' } },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5___default.a,
            { style: { color: '#707070', fontFamily: 'CirceExtraLight', fontSize: 17, lineHeight: 20 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5___default.a,
              { style: { color: '#000', fontFamily: 'Museo500', fontSize: 40, lineHeight: 1, bottom: 0 } },
              info.charAt(0)
            ),
            info.substring(1)
          )
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
        { style: { position: 'absolute', width: '7%', top: '43%', right: '5%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_1___default.a,
          { onPress: this.onPressNext(match) },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            style: { height: 100, width: 100 },
            source: _ArrowNext_png__WEBPACK_IMPORTED_MODULE_10___default.a
          })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_4___default.a,
        { style: { position: 'absolute', width: '7%', top: '43%', left: '5%' } },
        parseInt(match.params.id, 10) !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_1___default.a,
          { onPress: this.onPressBack(match) },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            style: { height: 100, width: 100 },
            source: _ArrowBack_png__WEBPACK_IMPORTED_MODULE_11___default.a
          })
        )
      )
    );
  }
}

/***/ }),

/***/ "./views/Masters/data.json":
/*!*********************************!*\
  !*** ./views/Masters/data.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = [{"id":0,"name":"felikspak","title":"Феликс Пак","subTitle":"Сила&Баланс","info":"Океан — стихия, поражающая своей красотой, силой и величием! Колебания в его глубинах образуют течения, которые встречая на своем пути прибрежные рифы преображаются в волны. Всего лишь на мгновение вода поднимается в стенку образуя форму, и падая разбивается, стремясь снова стать океаном. \nМоя жизнь связана с волной и методика курса получилась особенная — прошедшая через силу океана.","img":"http://www.cityretreat.ru/static/media/8.737bc909.png"},{"id":1,"name":"dmitryfedorov","title":"Дмитрий Федеров","subTitle":"System 432","info":"Авторская гимнастика позволяющая на минимальном пространстве за 20 минут ежедневных упражнений запустить в себе энергию, мягко проработать проблемные зоны спины, растянуться и шаг за шагом благодаря гармонизирующим вибрациям в диапазоне 432 hz научиться отключаться от техногенного воздействия города.","img":"http://www.cityretreat.ru/static/media/0.c5a8c048.png"},{"id":2,"name":"olgasemicheva","title":"Ольга Семичева","subTitle":"Аштанга-Виньяса","info":"По образованию я дизайнер интерьера, также долгое время работала фотографом. С йогой познакомилась 15 лет назад,и всё это время она она интересовала меня больше, чем моя профессиональная деятельность. \n Я практиковала: йогу Айенгара, йогу 23, Аштанга-Виньяса йогу (и преподавала её же изначально, с 2011 года), Ха-Тха и Кундалини-йогу.","img":"http://www.cityretreat.ru/static/media/1.0ae72054.png"},{"id":3,"name":"sergeyshatalov","title":"Сергей Шаталов","subTitle":"Змеиный эффект","info":"Cтиль Сергея Шаталова достаточно сильно отличается от основных течений. В нем есть 3 основные линии. Условно и красиво: линия тигра — преобладание силовых техник, линия змей — активизация найбольшей гибкости, и линия дракона — комбинация и гибкости и силы, но не в предельных проявлениях.","img":"http://www.cityretreat.ru/static/media/2.9171fdf4.png"},{"id":4,"name":"tatyanamitus","title":"Татьяна Митус","subTitle":"Кундалини йога","info":"В процессе практики люди неизбежно сталкиваются с личными вызовами и внутренними конфликтами, так как любой духовный путь обладает мощной трансформирующей преобразующей силой. Зачастую ученики проходят у меня консультации, в которых я использую свое умение распознавать слова человека через дату его рождения, через руководство чисел.","img":"http://www.cityretreat.ru/static/media/3.83f7c00e.png"},{"id":5,"name":"yakovmarshak","title":"Яков Маршак","subTitle":"Форумала молодости","info":"Уже более 10 лет Яков Маршак является соучредителем и научным консультантом компании «Витапром», которая занимается разработкой и производством продуктов функционального и лечебного питания.\nВ настоящее время Яков Маршак продолжает вести научную и просветительскую деятельность.","img":"http://www.cityretreat.ru/static/media/4.7f165a17.png"},{"id":6,"name":"elinafateeva","title":"Элина Фатеева","subTitle":"Йога критического выравнивания","info":"Ежедневный стресс и накопленные с детства психологические ограничения лишают тело естественной грации и легкости движения, а ум – осознания внутренней свободы. Практика йоги, самопознание и работа над собой помогают их восстановлению. Нет лучшего времени чтобы учится чему-либо, чем сейчас. Особенно если речь идет об умении быть счастливым.","img":"http://www.cityretreat.ru/static/media/5.4c8bf8c2.png"},{"id":7,"name":"farzonchulibayev","title":"Фарзон Чулибаев","subTitle":"Функциональная тренировка","info":"Для чего нужна функциональная тренировка? Конечно, для получения красивого и подтянутого тела! Она представляется собой тренировку всего тела за одно занятие и направлена на увеличение силовых показателей и развитие выносливости. \nНаши тренировки проводит мастер спорта России по боксу, многократный победитель и финалист первенства и чемпионата Москвы по боксу.","img":"http://www.cityretreat.ru/static/media/6.dd2083af.png"},{"id":8,"name":"elenaavdeeva","title":"Елена Авдеева","subTitle":"Йога критического выравнивания","info":"Лично я занимаюсь данной практикой более 4 лет и могу отметить только положительную динамику как в теле. Что касается йогатерапии по методу критического выравнивания, то в этой практике скрыт огромный потенциал, и даже если нет сильно выраженных проблем с телом (боли в пояснице, грыжи, протрузии и т.д.), и мы «практически здоровы», всё равно йога-терапия помогает мягко поработать с позвоночником.","img":"http://www.cityretreat.ru/static/media/7.e5c78dd3.png"},{"id":9,"name":"alexeybaikov","title":"Алексей Байков","subTitle":"Крийя-Тантра-Йога","info":"Преподаю на Русском и Английском языках Крийя-Тантра-Йогу, объединяющую в себе различные направления: хатха-йога, крийя-йога, тантра-йога, бхакти-йога, мантра-йога, йога-нидра и др., в том числе кундалини-йога, йога с медитацией со звуком гонга или тибетских чаш. Перевожу статьи с английского, немецкого и санскрита, пишу свои статьи и перевожу книги","img":"http://www.cityretreat.ru/static/media/10.a59bee30.png"},{"id":10,"name":"irinarudnitskaya","title":"Ирина Рудницкая","subTitle":"Телесные практики","info":"Преподаватель телесных практик и оздоровительных систем (хатха йога, аэро йога, пилатес, танец, пластика движения, lady’s пластика). Автор  уникальной методики по раскрытию и развитию природной пластики тела. Создатель Школы Пластики для детей и взрослых.","img":"http://www.cityretreat.ru/static/media/11.f5544d56.png"},{"id":11,"name":"alexandervysotsky","title":"Александр Высоцкий","subTitle":"Cпортивная медицина","info":"Кандидат медицинских наук по специальностям - восстановительная медицина, лечебная физкультура и спортивная медицина, курортология и физиотерапия, авиационная, космическая и морская медицина. \nЯвляется заведующим отделением традиционной медицины центра медицинской реабилитации No1 «7 Центральный военный клинический авиационный госпиталь МО РФ» ФГКУ «ГВКГ им.Н.Н. Бурденко» Минобороны России.","img":"http://www.cityretreat.ru/static/media/12.a1546427.png"},{"id":12,"name":"danielahmadeyev","title":"Даниэль Ахмадеев","subTitle":"Практика Осознанности","info":"Не гонитесь за блаженством, оно само вас настигнет, как только вы глубоко расслабитесь и позволите любви править вашим миром» — говорит Даниэль. Ахмадеев, автор проекта “Исток Всего”, преподаватель Практики Осознанности. \nВ 2011 году с ним случился глубокий опыт проживания настоящего момента, после которого он стал внимательно изучать вопрос осознанности.","img":"http://www.cityretreat.ru/static/media/13.27dccb3d.png"},{"id":13,"name":"juliadubnell","title":"Юлия Дубнель","subTitle":"Хатха-йога","info":"Йогой начала заниматься в г. Томске после того, как получила травму шейных позвонков… Постепенно, увлекаясь практикой, решила пойти дальше и преподавать сама.\nПосле переезда в Москву в 2014 г прошла полный теоретический и практический курс с правом преподавания в Московской школе йоге у Егорова Филиппа.","img":"http://www.cityretreat.ru/static/media/14.a8d4529b.png"},{"id":14,"name":"kamilkhusnullin","title":"Камиль Хуснуллин","subTitle":"Yoga 23","info":"Провожу занятия по тренировочным программам суставно-сухожильной гимнастики по методике Yoga 23 и Yoga 23 FIT А. В. Сидерского.\nКроме гимнастики йогов в программу занятий включаю освоение и практику комплекса эфирной гимнастики в рамках той же методики (Ян Цигун).","img":"http://www.cityretreat.ru/static/media/15.5cfad586.png"},{"id":15,"name":"alexandermirzabekyan","title":"Александр Мирзабекян","subTitle":"Кундалини Йога","info":"Сертифицированный преподаватель Кундалини йоги (KRI, США) Ученик Харидживана Сингх Халса Член Федерации Учителей Кундалини йоги России.\nПреподаю традиционную Кундалини Йогу школы Йоги Бхаджана. Каждое занятие включает в себя дыхательные практики (пранаямы), физические упражнения (крийи) и медитативные практики.","img":"http://www.cityretreat.ru/static/media/16.83048bf0.png"}];

/***/ }),

/***/ "./views/Masters/dotdotdot.svg":
/*!*************************************!*\
  !*** ./views/Masters/dotdotdot.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dotdotdot.hash_635005ba757a610c71154c3b5b07e855.svg";

/***/ }),

/***/ "./views/Masters/index.js":
/*!********************************!*\
  !*** ./views/Masters/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Master */ "./views/Masters/Master.js");
/* harmony import */ var _dotdotdot_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dotdotdot.svg */ "./views/Masters/dotdotdot.svg");
/* harmony import */ var _dotdotdot_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dotdotdot_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.json */ "./views/Masters/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _data_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _data_json__WEBPACK_IMPORTED_MODULE_5__});









function isNodejs() {
  return typeof window === "undefined";
}

const platform = x => {
  if (isNodejs()) {
    return x * 3.9;
  }
  try {
    const w = window.innerWidth;
    if (w <= 320) {
      return x + 3; //'iphone5'
    } else if (w <= 375 && w > 321) {
      return x * 3.7; // 'iphone6'
    } else if (w <= 414 && w > 375) {
      return x * 3.9; // 'iphone6+'
    } else if (w > 414) {
      return x * 3.9; // 'web'
    }
  } catch (e) {
    throw e;
  }
};

const menuY = x => {
  if (isNodejs()) {
    return x + 20;
  }
  try {
    const w = window.innerWidth;
    if (w <= 320) {
      return x + 2; //'iphone5'
    } else if (w <= 375 && w > 321) {
      return x + 3; // 'iphone6'
    } else if (w <= 414 && w > 375) {
      return x + 3; //'iphone6+'
    } else if (w > 414) {
      return x + 20; // 'web'
    }
  } catch (e) {
    throw e;
  }
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '43px',
    height: '53px',
    right: platform(5) + 9,
    top: menuY(1)
  },
  bmCrossButton: {
    position: 'absolute',
    left: '10px',
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff'
  },
  bmMenu: {
    background: 'rgba(100, 100, 100, 0.83)',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '500',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#fff',
    marginTop: 80,
    marginLeft: 50
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  navLink: {
    color: '#fff',
    fontSize: '1.00em',
    fontFamily: 'AppleSDGothicNeo-Light',
    paddingLeft: 10
  },
  activeStyle: {
    color: '#D6B784',
    textDecoration: 'none'
  }
};

class Masters extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { match } = this.props;
    const { navLink, activeStyle } = styles;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"],
        {
          isOpen: this.state.menuOpen,
          onStateChange: state => this.handleStateChange(state),
          styles: styles,
          right: true,
          customBurgerIcon: !this.state.menuOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _dotdotdot_svg__WEBPACK_IMPORTED_MODULE_4___default.a, style: { height: 100, width: 100 } }) : false
        },
        _data_json__WEBPACK_IMPORTED_MODULE_5__.map(({ name, id, title }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { key: id },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
            {
              onClick: () => this.closeMenu(),
              to: `/masters/master/${name}`,
              style: navLink,
              activeStyle: activeStyle
            },
            title
          )
        ))
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/masters/master/:name', component: _Master__WEBPACK_IMPORTED_MODULE_3__["default"] })
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Masters);

/***/ }),

/***/ "./views/Masters/styles.css":
/*!**********************************!*\
  !*** ./views/Masters/styles.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./views/common/Header.js":
/*!********************************!*\
  !*** ./views/common/Header.js ***!
  \********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Mansion_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mansion.svg */ "./views/common/Mansion.svg");
/* harmony import */ var _Mansion_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Mansion_svg__WEBPACK_IMPORTED_MODULE_2__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


//import { img, TouchableOpacity, Text, StyleSheet, div } from 'react-native' // eslint-disable-line



const Desktop = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, { minWidth: 992 }));
const Tablet = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, { minWidth: 415, maxWidth: 991 }));
const Mobile6 = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, { minWidth: 321, maxWidth: 414 }));
const Mobile5 = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, { maxWidth: 320 }));

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const { title } = this.props;
    const { container, h1 } = styles;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Desktop,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: container },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _Mansion_svg__WEBPACK_IMPORTED_MODULE_2___default.a, style: { width: 328, height: 70 } })
        ),
        this.props.children
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tablet,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: container },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _Mansion_svg__WEBPACK_IMPORTED_MODULE_2___default.a, style: { width: 328, height: 70 } })
        ),
        this.props.children
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Mobile6,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: [container, { height: 60 }] },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Text,
            { style: [h1, { paddingTop: 0, fontSize: 21 }] },
            title
          )
        ),
        this.props.children
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Mobile5,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: [container, { height: 60 }] },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Text,
            { style: [h1, { paddingTop: 0, fontSize: 18 }] },
            title
          )
        ),
        this.props.children
      )
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: '100%',
    borderBottomWidth: 0,
    shadowColor: '#9B9B9B',
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'fixed',
    zIndex: 4
  },
  h1: {
    flex: 1,
    color: '#4B4B4B',
    fontFamily: 'CirceLight',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '100',
    textAlign: 'center'
  }
};



/***/ }),

/***/ "./views/common/Mansion.svg":
/*!**********************************!*\
  !*** ./views/common/Mansion.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Mansion.hash_eac190b2308399cf371d13bf65890930.svg";

/***/ }),

/***/ "./views/common/index.js":
/*!*******************************!*\
  !*** ./views/common/index.js ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./views/common/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



//export * from './Image'

//export * from './PriceCard'
//export * from './NoMatch'

/***/ })

}]);
//# sourceMappingURL=homePage~mastersPage.hash_79b4337ae5cde011d886.js.map