import './App.css';
import CustomSlider from './components/Slider/CustomSlider';

function App() {
  return (
    <div className="app">
      <div className="main">
        <svg viewBox="0 0 1161 614" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50 85C22.3858 85 0 107.386 0 135V564C0 591.614 22.3858 614 50 614H348.015C365.556 614 380 582.041 380 564.5C380 531.639 406.639 505 439.5 505H720.5C753.361 505 780 531.639 780 564.5C780 582.041 794.444 614 811.985 614H1111C1138.61 614 1161 591.614 1161 564V135C1161 107.386 1138.61 85 1111 85H985C957.386 85 935 62.1142 935 34.5C935 20.0483 925.078 0 910.626 0H247.374C232.922 0 223 20.0483 223 34.5C223 62.1142 200.614 85 173 85H50Z" fill="url(#paint0_radial_15_1134)"/>
          <defs>
          <radialGradient id="paint0_radial_15_1134" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(580.5 307) rotate(90.0608) scale(471.5 891.55)">
          <stop stop-color="#55E2AF"/>
          <stop offset="1" stop-color="#002A6A"/>
          </radialGradient>
          </defs>
        </svg>
        <img
          id="girl"
          src="https://optim.tildacdn.com/tild6234-3836-4665-b465-626633363930/-/format/webp/_1.png"
          width="1161px"
          height="614px"
        />
        <img 
          src="https://optim.tildacdn.com/tild3963-3265-4233-b237-383232393132/-/resize/210x/-/format/webp/n_konovalov_3D_rende.png"
          width="105px" 
          height="105px"
          id="star_one"
        />
        <img 
          src="https://optim.tildacdn.com/tild3331-3961-4034-a430-623938353534/-/resize/332x/-/format/webp/n_konovalov_3D_rende.png"
          width="166px" 
          height="166px"
          id="star_two"
        />
        <div className="logo-block">
          <img 
            src="https://static.tildacdn.com/tild3065-3833-4163-a636-643830306133/F1ULL_logo_color_bl.svg"
            width="188px" 
            height="21px"
            id="logo"
          />
        </div>
        <div className="menu-block">
          Меню
        </div>
        <div className="title">
          Как использовать нейросети
          <div className="sub-title">в графическом дизайне</div>
        </div>
        <div className="rigth-side-block">
          <div className="title">Бесплатный гайд</div>
          <div className="sub-title">Получите бесплатный гайд 
            по искусственному интеллекту, который поможет улучшить работу графического дизайнера
          </div>
        </div>
        <div className="get-guide">
          Получить гайд
        </div>
      </div>
      <div className="library">Библиотека</div>
      <div className="slider">
        <CustomSlider
          title="Рандомные стили"
          width="423px"
          height="501px"
          data={[
            { 
              img: "https://optim.tildacdn.com/tild3532-6331-4562-b637-633631316366/-/cover/846x1002/center/center/-/format/webp/Rectangle_9_1.png", 
              title: "Fashion ракурсы", 
              subTitle: "Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу."
            },
            {
              img: "https://optim.tildacdn.com/tild3539-3466-4162-b662-366135636162/-/cover/846x1002/center/center/-/format/webp/Rectangle_10_1.png",
              title: "3D объекты",
              subTitle: "Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в трехмерной форме и придать вашим проектам реалистичность."
            },
            {
              img: "https://optim.tildacdn.com/tild6363-6563-4030-b566-663764363961/-/cover/846x1002/center/center/-/format/webp/Rectangle_11_1.png",
              title: "Фоновые изображения",
              subTitle: "Погрузитесь в мир создания фоновых изображений с Midjourney. Узнайте, как подобрать идеальный фон для ваших проектов, чтобы подчеркнуть стиль."
            },
            {
              img: "https://optim.tildacdn.com/tild3863-6339-4330-b763-323038313639/-/cover/846x1002/center/center/-/format/webp/Recta8ngle_16_1.png",
              title: "Портеры",
              subTitle: "Откройте для себя искусство создания портретов с Midjourney. Узнайте, как передать эмоции, характер и стиль персонажа, создавая уникальные образы."
            },
            {
              img: "https://optim.tildacdn.com/tild6538-3634-4361-a263-326332363236/-/cover/846x1002/center/center/-/format/webp/Rectangl8e_12_1.png",
              title: "Персонажи",
              subTitle: "Создавайте захватывающих персонажей с помощью Midjourney. Узнайте, как воплотить в жизнь уникальные образы, придавая им характер и индивидуальность."
            },
          ]}
        />
      </div>
      <div className="footer">
        <img className="image" src='./footer.png' width="100%" height="100%" />
        <div className="block">
          <svg viewBox="0 0 560 534" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M420 43C420 59.5685 433.431 73 450 73H510C537.614 73 560 95.3858 560 123V504C560 520.569 546.569 534 530 534H30C13.4314 534 0 520.569 0 504V30C0 13.4315 13.4315 0 30 0H408.306C415.284 0 420 8.02217 420 15V43Z" fill="#1F1F1F"/>
          </svg>
          <div className="title">
            Использование ИИ
            позволяет значительно
            сэкономить ресурсы
          </div>
          <div className="number">
            01
          </div>
          <div className="sub-title">
            Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или реализацию целого проекта. Для этого дизайнеру нужно разбираться в инструментах и их возможностях.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
