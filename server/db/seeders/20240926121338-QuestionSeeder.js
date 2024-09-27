"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          title:
            "Какая гора на территории Кабардино-Балкарии является самой высокой точкой России и Европы?",
          topicId: 1,
          answer: "Гора Эльбрус",
          points: 100,
          img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Mount_Elbrus_May_2008.jpg",
        },
        {
          title:
            "Как называются знаменитые карстовые озёра Кабардино-Балкарии с ярко-голубой водой и большой глубиной, известные как место для дайвинга и отдыха?",
          topicId: 1,
          answer: "Голубые озёра (Церик-Кёль)",
          points: 200,
          img: "https://sannal-mvd.ru/wp-content/uploads/2024/04/czerik-kyol-1.jpg",
        },
        {
          title:
            "Как называется высокогорный район в Кабардино-Балкарии, известный своими минеральными источниками и водопадами, включая водопад 'Султан'?",
          topicId: 1,
          answer: "Джилы-Су",
          points: 300,
          img: "https://cdn.tripster.ru/photos/832d6bcc-2437-4708-abf0-ee5bfc59f355.jpg",
        },
        {
          title:
            "Как называется село в Кабардино-Балкарии, известное своими средневековыми боевыми башнями и некрополями, которое называют 'музеем под открытым небом'?",
          topicId: 1,
          answer: "Село Верхняя Балкария",
          points: 400,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D0%B8%D1%8F.jpg/800px-%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D0%B8%D1%8F.jpg",
        },
        {
          title:
            "Как называется традиционный кодекс чести и поведения кабардинцев и балкарцев, регулирующий социальные нормы и обычаи, передаваемые из поколения в поколение?",
          topicId: 1,
          answer: "Адыгэ хабзэ",
          points: 500,
          img: "https://www.adygi.ru/uploads/posts/2019-02/1549314533_1527141279_4.jpg",
        },
        {
          title: "Что говорит Юра когда уходит из кампуса?",
          topicId: 2,
          answer: "Ребята, всем пока, до завтра",
          points: 100,
          img: "https://i.ibb.co/ZTTvqQp/IMG-5272.jpg",
        },
        {
          title: "Что говорит Юра когда хочет что бы мы начали работать?",
          topicId: 2,
          answer: "Я переживаю за ваши проекты",
          points: 200,
          img: "https://i.ibb.co/DbWYkmG/IMG-5273.jpg",
        },
        {
          title: "Что говорит Влад перед ударом в гонг?",
          topicId: 2,
          answer: "Ребята, ушки",
          points: 300,
          img: "https://i.ibb.co/bNJhnpj/IMG-5274.jpg",
        },
        {
          title: "Что кидает Влад за плохое поведение на лекции?",
          topicId: 2,
          answer: "Кирпич",
          points: 400,
          img: "https://i.ibb.co/RgsmyHB/IMG-5110.jpg",
        },
        {
          title: "Что надевает Юра на шляпный день?",
          topicId: 2,
          answer: "Каска",
          points: 500,
          img: "https://i.ibb.co/1vdd54c/IMG-5275.jpg",
        },
        {
          title:
            "На железных дорогах Японии есть должность 'Осия'. Чем они занимаются?",
          topicId: 3,
          answer: "Запихивают людей в вагоны",
          points: 100,
          img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Oshiya_of_Tokyu.jpg",
        },
        {
          title:
            "В фильмах Джорджа Лукаса его блестяще воплотил бывший санитар Питер Мэйхью семи футов роста (213 см). Назовите имя персонажа.",
          topicId: 3,
          answer: "Чубакка",
          points: 200,
          img: "https://vkplay.ru/hotbox/content_files/Stories/2023/09/20/72f3ecacea2f4634bdee297e6e406f69.jpg",
        },
        {
          title:
            "The Beatles стала первой в истории группой, напечатавшей на обратной стороне обложки альбома именно это. Что?",
          topicId: 3,
          answer: "Тексты песен",
          points: 300,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/The_Beatles_members_at_New_York_City_in_1964.jpg/800px-The_Beatles_members_at_New_York_City_in_1964.jpg",
        },
        {
          title:
            "У осьминогов они прямоугольные — чтобы лучше видеть под водой. О чём речь?",
          topicId: 3,
          answer: "Зрачки",
          points: 400,
          img: "https://i.pinimg.com/736x/be/26/b9/be26b9b1c7d317f1304549aa92a42f89.jpg",
        },
        {
          title:
            "Футболистам‑хулиганам судья показывает жёлтую карточку, недисциплинированным игрокам в хоккей на траве — карточку такого цвета. Какого?",
          topicId: 3,
          answer: "Зелёного",
          points: 500,
          img: "https://luxsolsport.ru/images/article/pravila-igry-khokkeya-na-trave.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
