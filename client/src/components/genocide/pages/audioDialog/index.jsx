import React, { useState } from "react";

import { Button } from "@chakra-ui/react";
import "./audioDialog.scss";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Accordions from "../../../accordion";

import a1 from "../../../../assets/genocide/mp3/dialog/1.mp3";
import a2 from "../../../../assets/genocide/mp3/dialog/2.mp3";
import a3 from "../../../../assets/genocide/mp3/dialog/3.mp3";
import a4 from "../../../../assets/genocide/mp3/dialog/4.mp3";
import a5 from "../../../../assets/genocide/mp3/dialog/5.mp3";
import a6 from "../../../../assets/genocide/mp3/dialog/6.mp3";
import a7 from "../../../../assets/genocide/mp3/dialog/7.mp3";
import a8 from "../../../../assets/genocide/mp3/dialog/8.mp3";
import a9 from "../../../../assets/genocide/mp3/dialog/9.mp3";
import a10 from "../../../../assets/genocide/mp3/dialog/10.mp3";
import a11 from "../../../../assets/genocide/mp3/dialog/11.mp3";
import a12 from "../../../../assets/genocide/mp3/dialog/12.mp3";
import a14 from "../../../../assets/genocide/mp3/dialog/14.mp3";
import a15 from "../../../../assets/genocide/mp3/dialog/15.mp3";

function AudioDialog() {
  const [audio1] = useState(new Audio(a1));
  const [audio2] = useState(new Audio(a2));
  const [audio3] = useState(new Audio(a3));
  const [audio4] = useState(new Audio(a4));
  const [audio5] = useState(new Audio(a5));
  const [audio6] = useState(new Audio(a6));
  const [audio7] = useState(new Audio(a7));
  const [audio8] = useState(new Audio(a8));
  const [audio9] = useState(new Audio(a9));
  const [audio10] = useState(new Audio(a10));
  const [audio11] = useState(new Audio(a11));
  const [audio12] = useState(new Audio(a12));
  const [audio14] = useState(new Audio(a14));
  const [audio15] = useState(new Audio(a15));
  const { t } = useTranslation();

  const mainAnim = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  return (
    <div className="audioDialog" id="audioDialog">
      <motion.div
        className="audioDialog-content text-black"
        initial="hidden"
        variants={mainAnim}
        whileInView="visible"
      >
        <h1 id="h1">{t("Жизнь продолжается!")}</h1>
        <strong>
          {t(
            "Интервью-диалог с малолетним узником фашизма Глевацким Анатолием Владимировичем"
          )}
        </strong>
        <h2 id="p">{t("Знакомство")}</h2>
        <Button onClick={() => audio1.play()}>Слушать</Button>
        <Button onClick={() => audio1.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio1.pause();
            audio1.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body={
            <>
              <p id="p">
                {t(
                  "Сегодня у нас в гостях малолетний узник концентрационного лагеря «Освенцим» Анатолий Владимирович Глевацкий. Он у нас работал мастером производственного обучения"
                )}
              </p>
              <p id="p">
                {t(
                  " - Здравствуйте, уважаемый Анатолий Владимирович! Мы благодарны, что Вы нашли время и желание пообщаться с нами, рассказать о себе! Так уж устроен человек, что со временем в его сознании боль от любой потери стихает, сглаживается. С годами самые тяжелые воспоминания становятся частью прошлого, которое принадлежит памяти, а к настоящему отношения уже не имеет. Это помогает пережить утрату, сохранить себя для будущей жизни. Механизм самосохранения работает бесперебойно, стирая память, утешая, оправдывая, облегчая... Человечеству в целом иной раз свойственна та же спасительная забывчивость. Однако в этом не только спасение, но и гибель - забывая об ужасах, которые происходили в прошлом, мы готовим их повторение. Вот поэтому учащиеся нашего лицея и, в частности члены волонтёрской группы «Луч добра», стараются сохранить память, дабы не увидеть и не ощутить тех ужасов войны, которые выпали на Вашу долю. В начале нашей беседы, просим Вас рассказать: где  и когда Вы родились, в какой семье?"
                )}
              </p>
              <p id="p">
                {t(
                  "- Родился я в Спасском городке, районе нынешнего города Полоцка, 17 июля 1941 года, в семье молодого военного Глевацкого  Владимира Марковича и телефонистки Войцеховской (девичья фамилия) Галины Матвеевны. Молодая семья Глевацких поселилась в доме моего дедушки по материнской линии, где проживали не только дедушка и бабушка, но  ещё три сестры и брат матери."
                )}
              </p>
            </>
          }
        />
        <h2 id="p">
          - Скажите, пожалуйста, как же изменилась жизнь в большой семье с
          приходом войны?
        </h2>
        <Button onClick={() => audio2.play()}>Слушать</Button>
        <Button onClick={() => audio2.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio2.pause();
            audio2.currentTime = 0;
          }}
        >
          Стоп
        </Button>

        <Accordions
          title="Читать"
          body={
            <p id="p">
              - Понятно, что с первых дней войны отец ушёл на фронт. Вскоре беда
              постучалась и в дом Войцеховских: кто-то донёс, что муж Галины –
              военный офицер. Вся семья была арестована. Есть ещё одна версия
              случившемуся: дедушка был связан с подпольщиками, которые
              планировали передать партию валенок партизанам. Каким-то образом
              это стало известно фашистам. Так, осенью 1942 года вся наша семья
              была отправлена в тюрьму в район Задвинья.
              <p id="p">
                - В начале 1943 года дедушку казнили, а нас всех отправили в
                железнодорожный пункт в Громы для последующей отправки в лагерь.
                Так мы попали в 9-ый Минский эшелон, где в товарных вагонах
                везли людей из разных городов Витебской области и Беларуси.
                Ехали мы в тяжёлых условиях: в тесноте, без воды, делились едой
                с теми, кто успел её взять. Так мы ехали суток трое,
                останавливаясь только для того, чтобы выбросить умерших. И вот,
                04. 12. 1943 мы с матерью и все родные попали в Освенцим, а
                конкретно в лагерь Аушвиц II - Биркенау. Заключённые сразу
                проходили обработку: их мыли, обривали волосы, одевали в
                полосатую одежду, ставили номер на руку… (Анатолий Владимирович
                показал номер на руке, цифры которого, по мере взросления,
                расползлись на всё запястье).
              </p>
            </p>
          }
        />
        <h2 id="p">
          - Анатолий Владимирович, в то время Вы были ещё совсем мал. Скажите,
          сохранились ли какие-то воспоминания о периоде в лагере.
        </h2>
        <Button onClick={() => audio3.play()}>Слушать</Button>
        <Button onClick={() => audio3.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio3.pause();
            audio3.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Запомнились некоторые эпизоды в лагере. Помню, что большую часть времени мы проводили на нарах, ведь никуда выходить нам не разрешалось. Мать и мои родные  ходили на работы, а я оставался один, ползая по нарам и играя с банками из-под газа «Циклон-Б», которым травили людей в камерах, в этих же банках нам приносили и скудную еду. О нашем нахождении в лагере я, конечно, уже повзрослев,  расспрашивал у матери,  Вот от неё я, например, узнал историю чудесного спасения нас от смерти. Дело в том, что условия в лагере были  невыносимые: голод, холод и болезни. Заболели и мы с матерью брюшным тифом, попали в «ревир-блок» (больницу). Закон там был такой: независимо от заболевания,  людей лечили две недели, если за этот период не выздоровел – в газовую камеру. Так случилось и с нами. Нас уже направили на истребление, но врач-полька, увидев юную мать и совсем маленького ребёнка, подменила документы. Спасённым повезло долечиться и остаться в живых, благодаря женщине-врачу. Мать после войны отыскала эту женщину, встречалась с ней в Польше, отблагодарила за спасение, подружилась с ней…"
        />
        <h2 id="p">
          - Анатолий Владимирович, как произошло, что Вас разлучили с матерью?
        </h2>
        <Button onClick={() => audio4.play()}>Слушать</Button>
        <Button onClick={() => audio4.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio4.pause();
            audio4.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Первого мая 1944 года меня и многих других детей отправили в специальный детский концлагерь Тухенген (немецкое  название) или Константинов (польское название) в пригороде Лодзи. Лагерь был оборудован в стенах бывшей ткацкой фабрики. Находились там дети в возрасте от рождения и до 16 лет. С детьми проводились специальные занятия по немецкому языку, проводили психологическую обработку, хотели детей онемечить. Кроме того, у детей брали кровь, проводили опыты. Особенно запомнились нечеловеческие наказания детей, придуманные комендантом лагеря. Провинившихся детей ставили на колени на горох. Причём,  наказание это проходило на козырьке крыши, на солнцепёке. Рядом с наказуемым сидел охранник – большая чёрная собака, специально обученная следить за малейшим движением ребёнка..."
        />
        <h2 id="p">
          - Расскажите, пожалуйста, каковы были условия жизни в детском лагере?
        </h2>
        <Button onClick={() => audio5.play()}>Слушать</Button>
        <Button onClick={() => audio5.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio5.pause();
            audio5.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Условий особых нам не создавали, надсмотрщиками были эсесовцы, воспитателями  были Власовцы, часто люди с бывшим криминальным прошлым, злые, бессердечные. «Воспитывали» больше ударами и кулаками.  Кушали и одевали мы то, что производили наши старшие дети. Девочки  - готовили (в основном овощи), сами шили одежду. "
        />
        <h2 id="p">
          - С Вами в детском лагере находились и Ваши малолетние родственники,
          тёти и дядя?
        </h2>
        <Button onClick={() => audio6.play()}>Слушать</Button>
        <Button onClick={() => audio6.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio6.pause();
            audio6.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body=" - Да. Бабушка, мать и старшая сестра матери Евгения остались в Аушвиц II. А две мои тёти, Надежда и Валентина, дядя Анатолий и я оказались в детском концентрационном лагере. Но детям-подросткам тоже было не сладко. В отношении их шла постоянная работа для того, чтобы завербовать для диверсионной деятельности. Мой дядя рассказывал, что однажды в лагерь прибыла специальная комиссия Абвера. Им нужно было набрать  60 подростков для подготовки диверсантов. Всех построили, предложили сотрудничество и обучение. Никто не соглашался и  подростки, в ответ лишь запели песню о скором освобождении. Песня эта была придумана узниками лагерей и была очень популярна среди заключённых, поэтому пели её с замкнутыми губами и понять,  кто же конкретно её поёт невозможно. Поэтому всех подростков  быстро удалили в бараки, но ночью без объяснений и  церемоний , 60 подростков увезли. Только в 1958 году мой дядя Войцеховский Анатолий Матвеевич смог рассказать, что же с ним случилось.  Так вот, увезли их в Западную Германию, город Криммичау, на авиационный завод. Там на территории завода подростки выполняли непосильную работу, причём их вообще не кормили. Выживали только благодаря немецкому населению, работающему на заводе. Люди приносили им кое-какую еду. Освободили их в конце войны американцы, они же хотели их забрать к себе в Америку, не сообщив Советскому командованию об освобождённой группе. Но подростки решили устроить побег и сообщить Советскому командованию о данном факте. Двоим товарищам, в числе которых был мой дядя, удалось бежать и сообщить координаты нахождения группы подростков. Мой дядя с товарищем, опьянённые свободой, решили посмотреть мир, ушли от тех и других. Вернулись в Советский Союз где-то в 1947 году. В результате их обвинили, что они, якобы,  дезертировали от Советской Армии и осудили на 10 лет лишения свободы. И вот только в 1958 году мы встретились. На работу здесь  дядю нигде не хотели брать, он уехал в Карелию на лесозаготовки и там трагически погиб… Так свободным практически и не пожив…"
        />
        <h2 id="p">
          - Анатолий Владимирович, давайте вернёмся к тому периоду, когда Вас
          освободили из Тухенгема. Расскажите, пожалуйста, как же это произошло?
        </h2>
        <Button onClick={() => audio7.play()}>Слушать</Button>
        <Button onClick={() => audio7.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio7.pause();
            audio7.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- 22 января 1945 года Советские войска освободили всех узников. Нас погрузили в эшелон и вывезли в Союз. Так,  я оказался в Киевском детском доме № 13, о котором остались у меня и моих родных тёплые воспоминания.  Кстати,  связь с этим детским домом я поддерживал  много лет. У меня есть книга « Родные дети» Оксаны Иваненко,  как раз об этом. Когда  праздновали 60-летие детского дома мы тоже ездили туда."
        />
        <h2 id="p">- А как же Вас нашла мама?</h2>
        <Button onClick={() => audio8.play()}>Слушать</Button>
        <Button onClick={() => audio8.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio8.pause();
            audio8.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Моя тётя Валя написала письмо в Полоцк, где уже, предположительно, находились родные. В 1946 году мать приехала и забрала меня, тётю Надю с детского дома. Тетя Валя осталась пока там, доучиваться.  Вскоре мать вышла вторично замуж за военного.  (*Отец погиб в первые дни войны). Отчима отправили служить в Польшу, где мы пробыли до 1949 года, затем уехали в Новгородскую область. А в 1956 году  мы переехали в городок  Луга, Ленинградской области, где я и закончил 10-й класс средней школы. "
        />
        <h2 id="p"> - И куда же решил пойти выпускник?</h2>
        <Button onClick={() => audio9.play()}>Слушать</Button>
        <Button onClick={() => audio9.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio9.pause();
            audio9.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Пример отца, а затем и отчима, послужил тому, что я мечтал поступить в военное училище. Подавал документы для учёбы в три военных учреждения…Но, такое уж тогда было время, что документы репатриированных даже не рассматривали, не принимали в военные училища…"
        />
        <h2 id="p">- Наверное, переживали по этому поводу?</h2>
        <Button onClick={() => audio10.play()}>Слушать</Button>
        <Button onClick={() => audio10.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio10.pause();
            audio10.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Наверное, переживал. Хотя, с детства я привык видеть косые взгляды детей, насмешки, что я был в плену…Не понимали тогда люди, что не по своей воле я туда попал совсем малышом и хлебнул горя не меньше, чем другие. Помню, мать всегда покупала мне рубашки и сорочки с длинными рукавами, чтобы не привлекать внимания к выбитому номеру на руке…"
        />
        <h2 id="p">
          - Анатолий Владимирович, как же дальше сложилась Ваша судьба?
        </h2>
        <Button onClick={() => audio11.play()}>Слушать</Button>
        <Button onClick={() => audio11.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio11.pause();
            audio11.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Потеряв надежду поступить в военное училище, я уехал к бабушке в Полоцк. Нашего довоенного дома уже не было, в него попала бомба, поэтому жить пришлось в комнатушке, 8м2 . А жили мы втроём: бабушка, тётя Надя и я. Устроился я на работу по ремонту и восстановлению  зданий, освоил практически все рабочие специальности. Вскоре, от военкомата, меня послали учиться мотористом. Так я познакомился с руководством ДОСААФ и военкомата. Они же  и рекомендовали мне опять попробовать поступать в военное училище. И вот, в 1960 году я поступил в Вольское авиационно-техническое училище, которое через полгода стало командно-техническое ракетное училище. В 1963 году уехал служить в ракетные войска в Кострому. Пришлось даже переучиваться в Байконуре на электронщика. Так случилось, что полк наш стали расформировывать. Предлагали другие места службы. К тому времени я был уже женат, с работой для жены было трудно, да и не очень радовали предложения. Поэтому, посовещавшись, решили ехать на Родину, в Полоцк."
        />
        <h2 id="p">
          - Анатолий Владимирович, можете рассказать, где же Вы встретили жену?
        </h2>
        <Button onClick={() => audio12.play()}>Слушать</Button>
        <Button onClick={() => audio12.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio12.pause();
            audio12.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- А вот в Полоцке я её и встретил, когда приезжал в отпуск. Она к тому времени окончила Великолукский педагогический институт…В посёлке Пионерский и поженились…
Так вот из Костромы мы вернулись в Полоцк, вернее уже в Новополоцк. Это был 1965 год. Здесь же сразу нам дали двухкомнатную квартиру. Я устроился в 181-е  управление, слесарем, затем механиком участка. А потом встретил боевых товарищей, которые сагитировали меня в 28-е училище, где и проработал 9 лет мастером. Много занимался педагогической деятельностью, увлекал учащихся радиомеханикой. Ездили даже на выставку в ВДНХ в Москву. Творческой натуре хотелось всё-таки более серьёзной и масштабной работы.  Пошёл устраиваться на «Полимир», который в то время стремительно набирал темпы. Там встретил товарищей, они же предложили интересную работу: наладка машин химической  промышленности. Работать стал от Минского наладочно-монтажного управления. Это было действительно интересно. Каждый день что-то новое, новые разработки, новое оборудование, командировки по различным заводам. Кстати, в 1980 году я заочно закончил Новополоцкий институт, факультет машиностоения. 
Так, практически, я доработал до пенсии. К сожаленью,  начались проблемы по здоровью. После операции на позвоночнике пришлось уйти на отдых.
"
        />
        <h2 id="p">
          - У Вас на столе лежат книги, много всяких документальных материалов.
          Расскажите, пожалуйста, о чём они?
        </h2>
        <Button onClick={() => audio14.play()}>Слушать</Button>
        <Button onClick={() => audio14.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio14.pause();
            audio14.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Эти книги, конечно, связаны с моей судьбой. Здесь вот, например, книга Владимира Литвинова «Поезд в ночи». Это документальная повесть, а сам автор был, можно сказать, непосредственным организатором поиска бывших узников. Лично он нашёл более 900 человек. Здесь в книге указаны все эти фамилии, моя и моих родственников, в том числе. Кстати, он же съездил в Криммичау и нашёл факты о нахождении  там моего дяди в заключении. Вообще, Литвинов был основателем Ассоциации бывших малолетних узников фашизма. Он же организовал первую поездку бывших малолетних узников  в Польшу. Мы проехали все лагеря Освенцима, побывали у всех памятников… Вот лежат у меня  книги об Освенциме, о Нюрнбергском процессе. Я, конечно, постоянно интересовался этой темой, интересуюсь и сейчас. Могу показать вам документальное подтверждение, полученное из Польши, о том, что я находился в Освенциме… Есть пригласительные на семинары, конференции различного уровня, по теме малолетних узников. Вот, например, пригласительный документ на празднование 60-летия освобождения узников Освенцима. Мы ездили туда в 2005 году. Очень запоминающееся событие. Со всех стран приезжали туда люди, бывшие узники, руководители государств. Много у меня хранится различных памятных знаков, сувениров, наград."
        />
        <h2 id="p">
          - Анатолий Владимирович, когда мы с Вами договаривались о встрече, Вы
          сказали, что спешите на компьютерные курсы…
        </h2>
        <Button onClick={() => audio15.play()}>Слушать</Button>
        <Button onClick={() => audio15.pause()}>Пауза</Button>
        <Button
          onClick={() => {
            audio15.pause();
            audio15.currentTime = 0;
          }}
        >
          Стоп
        </Button>
        <Accordions
          title="Читать"
          body="- Да-да, учиться, как известно, никогда не поздно. Хожу на компьютерные курсы, буду с внуком на равных сидеть в интернете! А если серьёзно -   без дела нельзя! Вон у меня какие герани на окнах! Цветоводством люблю заниматься. У меня есть дача, на которой я справляюсь сам. Приезжайте весной полюбоваться тюльпанами, у меня их целая плантация! - Спасибо, уважаемый Анатолий Владимирович, за содержательную и интересную беседу. За то, что Вы прошли в жизни столько испытаний и не утратили ни активной жизненной позиции, ни доброты, ни веры! Нашим учащимся будет чему поучиться у Вас. "
        />
      </motion.div>
    </div>
  );
}

export default AudioDialog;
