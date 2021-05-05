# AppVelox - Server
---

## Ссылка на проект
[Appvelox-server](https://lit-lake-46564.herokuapp.com/)

## Технологии
1. NodeJS
2. ExpressJS
3. MongoDB
4. bcrypt
5. JsonWebToken
6. ejs
7. Mongoose
   
## О проекте
Сервер для тестового задания для компании AppVelox

Сервер лежит на *heroku*

Пока имею очень мало опыта в разработке backend, но мне нравится это направление, поэтому стараюсь как можно чаще тренироваться, этот проект не стал исключением

Авторизация работает с помощью jwt, так как проект не большой и ссесия тут не нужна, как мне кажется (интересно будет услышать фльтернативное мнение)

Также есть возможность добовлять докторов, можно протестировать [тут](https://lit-lake-46564.herokuapp.com/)

**Возврощяемые и получаемые данные**

    // получение записей /getrecords
    doctorId: {type: Schema.Types.ObjectId},
    date: Date,
    userId: {type: Schema.Types.ObjectId}

    // получение докторов
    name: {type: String, required: true},
    surname: {type: String, required: true},
    patronymic: String,
    address: String,
    specialization: String,

## Полезные ссылки

[Я в ВК](https://vk.com/bewels)

[Я в telegram]()

[Ссылка на проект](https://lit-lake-46564.herokuapp.com/)

[Ссылка на репозиторий с клиентом](https://github.com/bewels/appvelox)

### Спасибо!
