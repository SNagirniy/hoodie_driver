function stringToArray(str) {
    return str.split(/\s+/);
  }

const example =  {
    id:'AK1001',
    data:{
        code:'AK1001',
        title: {
            uk:'',
            ru:''
        },
        description: {
            uk: '',
            ru: ''
        },
        price: 100,
        category: '',
        color:[],
        available_colors:[],
        raiting:5,
        imageURL:"https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie.jpg?alt=media&token=4848b210-84af-42d3-acb2-4c4f709dff33",
        images_set: [],
    }
}

const products=[
    {
        id:'HD1001',
        priority: 1000,
        data:{
            code:'HD1001',
            title: {
                uk: stringToArray('Худі на КПП з принтом MILF'.toLowerCase()),
                ru:stringToArray('Худи на КПП з принтом MILF'.toLowerCase())
            },
            description: {
                uk: 'худі для коробки передач у кольорі фуксія зі сміливим принтом. Чудова ідея на подарунок дівчині',
                ru: 'худи для коробки передач в цвете фуксия со смелым принтом. Прекрасная идея на подарок девушке'
            },
            price: 100,
            category: 'hoodie',
            color:["фуксія",'чорний',"білий"],
            available_colors:["фуксія",'чорний',"білий"],
            raiting:5,
            imageURL:"https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie.jpg?alt=media&token=4848b210-84af-42d3-acb2-4c4f709dff33",
            images_set: ["https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc"]
        }
    },
    {
        id:'AK1001',
        data:{
            code:'AK1001',
            priority: 600,
            title: {
                uk:stringToArray('Ланцюжок Gold Light'.toLowerCase()),
                ru:stringToArray('Цепочка Gold Light'.toLowerCase())
            },
            description: {
                uk: 'Стильний ланцюжок для худі на КПП в золотому кольорі. Одягається окремо і за бажанням можна зняти (не пришитий до худі). Такожм ожна замовити підвіски',
                ru: 'Стильная цепочка для худи на КПП в золотом цвете. Одевается отдельно и по желанию можно снять (не пришит к худи). Также можно заказать подвески.'
            },
            price: 40,
            category: 'jewerly_for_hoodie',
            color:[], 
            available_colors:[],
            raiting: 4,
            imageURL:"https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie.jpg?alt=media&token=4848b210-84af-42d3-acb2-4c4f709dff33"
        }
    },
    {
        id:'SE1001',
        data:{
            code:'SE1001',
            priority: 800,
            title: {
                uk:stringToArray('Подарунковий набір для водія.Худі на КПП + ароматизатор + брелок.'.toLowerCase()),
                ru:stringToArray('Подарочный набор для водителя.Худи на КПП + ароматизатор + брелок.'.toLowerCase())
            },
            description: {
                uk: 'Створений для тих, хто звик брати все і одразу ) Що в наборі: Худі на КПП з бажаним лого/фото/написом, парфумований ароматизатор та брелок',
                ru: 'Создан для тех, кто привык брать все и сразу) Что в наборе: Худи на КПП с желаемым лого/фото/надписью, парфюмированный ароматизатор и брелок'
            },
            price: 755,
            category: 'gift_sets',
            color:["чорний"],
            available_colors:["чорний"],
            raiting:4,
            imageURL:"https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie.jpg?alt=media&token=4848b210-84af-42d3-acb2-4c4f709dff33",
            images_set: ["https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc"]
        }
    },
    {
        id:'AM1001',
        data:{
            code:'AM1001',
            priority: 400,
            title: {
                uk:stringToArray('Парфумований ароматизатор для авто "Зебра"'.toLowerCase()),
                ru:stringToArray('Парфюмированный ароматизатор для авто "Зебра"'.toLowerCase())
            },
            description: {
                uk: 'Парфумований ароматизатор для авто з унікальним дизайном від Hoodiedriver. Що відчуєте першим - ваніль, чорна смородина та пачулі Як розкриється пізніше - манго, кориця Особливості: ароматизатор має два отвори, які спроектовані для ідеального проходу потоків повітря з дефлектора (при увімкненій пічці) та кращою летючості аромату, якщо ароматизатор закріплений на дзеркалі. Кріплення: Можна розмістити на дзеркалі заднього виду за допомогою стрічки, а також закріпити на дефлекторі (повітропровіді, вентлияційній решітці). Обидва кріплення в комплекті Аромати створені майстрами у Франції. Ароматизатор створений нашими майстрами в Україні.',
                ru: 'Парфюмерный ароматизатор для авто с уникальным дизайном от Hoodiedriver. Что почувствуете первым – ваниль, черная смородина и пачули Как раскроется позже – манго, корица Особенности: ароматизатор имеет два отверстия, которые спроектированы для идеального прохода потоков воздуха из дефлектора (при включенной печке) и лучшей летучести аромата, если ароматизатор закреплен на зеркале. Крепление: Можно разместить на зеркале заднего вида с помощью ленты, а также закрепить на дефлекторе (воздуховоде, вентиляционной решетке). Оба крепежа в комплекте Ароматы созданы мастерами во Франции. Ароматизатор создан нашими мастерами в Украине.'
            },
            price: 285,
            category: 'flavorings',
            color:["білий"],
            available_colors:["білий","чорний"],
            raiting:5,
            imageURL:"https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie.jpg?alt=media&token=4848b210-84af-42d3-acb2-4c4f709dff33",
            images_set: ["https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc"]
        }
    },
    {
        id:'BR1001',
        data:{
            code:'BR1001',
            priority: 200,
            title: {
                uk:stringToArray('Брелок на ключі з лого БМВ'.toLowerCase()),
                ru:stringToArray('Брелок на ключи из лого БМВ'.toLowerCase())
            },
            description: {
                uk: 'Універсальний брелок на ключі для авто і не тільки',
                ru: 'Универсальный брелок на ключи для авто и не только'
            },
            price: 125,
            category: 'keychains',
            color:["зелений"],
            available_colors:["чорний","червоний",'зелений'],
            raiting:3,
            imageURL: "https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie.jpg?alt=media&token=4848b210-84af-42d3-acb2-4c4f709dff33",
            images_set: ["https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc","https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/custom_image.webp?alt=media&token=b54d2d6d-e49a-4d82-b6d3-5a9c3be146cc"]
        }
    }
];

export default products;