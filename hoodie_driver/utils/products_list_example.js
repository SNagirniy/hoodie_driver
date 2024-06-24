

const example =  {
    id:'AK1001',
    data:{
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
        color:"",
        available_colors:[],
        raiting:5,
        imageURL: ' https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie%2Fhoodie.jpg?alt=media&token=53a40413-38b5-4592-8476-82d9f9889c02'
    }
}

const products=[
    {
        id:'AK1001',
        data:{
            title: {
                uk:'Ланцюжок Gold Light',
                ru:'Цепочка Gold Light'
            },
            description: {
                uk: 'Стильний ланцюжок для худі на КПП в золотому кольорі. Одягається окремо і за бажанням можна зняти (не пришитий до худі). Такожм ожна замовити підвіски',
                ru: 'Стильная цепочка для худи на КПП в золотом цвете. Одевается отдельно и по желанию можно снять (не пришит к худи). Также можно заказать подвески.'
            },
            price: 40,
            category: 'jewerly_for_hoodie',
            color:"", 
            available_colors:[],
            raiting: 4,
            imageURL: ' https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie%2Fhoodie.jpg?alt=media&token=53a40413-38b5-4592-8476-82d9f9889c02'
        }
    },
    {
        id:'SE1001',
        data:{
            title: {
                uk:'Подарунковий набір для водія.Худі на КПП + ароматизатор + брелок.',
                ru:'Подарочный набор для водителя.Худи на КПП + ароматизатор + брелок.'
            },
            description: {
                uk: 'Створений для тих, хто звик брати все і одразу ) Що в наборі: Худі на КПП з бажаним лого/фото/написом, парфумований ароматизатор та брелок',
                ru: 'Создан для тех, кто привык брать все и сразу) Что в наборе: Худи на КПП с желаемым лого/фото/надписью, парфюмированный ароматизатор и брелок'
            },
            price: 755,
            category: 'gift_sets',
            color:"чорний",
            available_colors:["чорний"],
            raiting:4,
            imageURL: ' https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie%2Fhoodie.jpg?alt=media&token=53a40413-38b5-4592-8476-82d9f9889c02'
        }
    },
    {
        id:'AM1001',
        data:{
            title: {
                uk:'Парфумований ароматизатор для авто "Зебра"',
                ru:'Парфюмированный ароматизатор для авто "Зебра"'
            },
            description: {
                uk: 'Парфумований ароматизатор для авто з унікальним дизайном від Hoodiedriver. Що відчуєте першим - ваніль, чорна смородина та пачулі Як розкриється пізніше - манго, кориця Особливості: ароматизатор має два отвори, які спроектовані для ідеального проходу потоків повітря з дефлектора (при увімкненій пічці) та кращою летючості аромату, якщо ароматизатор закріплений на дзеркалі. Кріплення: Можна розмістити на дзеркалі заднього виду за допомогою стрічки, а також закріпити на дефлекторі (повітропровіді, вентлияційній решітці). Обидва кріплення в комплекті Аромати створені майстрами у Франції. Ароматизатор створений нашими майстрами в Україні.',
                ru: 'Парфюмерный ароматизатор для авто с уникальным дизайном от Hoodiedriver. Что почувствуете первым – ваниль, черная смородина и пачули Как раскроется позже – манго, корица Особенности: ароматизатор имеет два отверстия, которые спроектированы для идеального прохода потоков воздуха из дефлектора (при включенной печке) и лучшей летучести аромата, если ароматизатор закреплен на зеркале. Крепление: Можно разместить на зеркале заднего вида с помощью ленты, а также закрепить на дефлекторе (воздуховоде, вентиляционной решетке). Оба крепежа в комплекте Ароматы созданы мастерами во Франции. Ароматизатор создан нашими мастерами в Украине.'
            },
            price: 285,
            category: 'flavorings',
            color:"білий",
            available_colors:["білий","чорний"],
            raiting:5,
            imageURL: ' https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie%2Fhoodie.jpg?alt=media&token=53a40413-38b5-4592-8476-82d9f9889c02'
        }
    },
    {
        id:'BR1001',
        data:{
            title: {
                uk:'Брелок на ключі з лого БМВ',
                ru:'Брелок на ключи из лого БМВ'
            },
            description: {
                uk: 'Універсальний брелок на ключі для авто і не тільки',
                ru: 'Универсальный брелок на ключи для авто и не только'
            },
            price: 125,
            category: 'keychains',
            color:"зелений",
            available_colors:["чорний","червоний",'зелений'],
            raiting:3,
            imageURL: ' https://firebasestorage.googleapis.com/v0/b/hoodie-driver-96728.appspot.com/o/hoodie%2Fhoodie.jpg?alt=media&token=53a40413-38b5-4592-8476-82d9f9889c02'
        }
    }
];

export default products;