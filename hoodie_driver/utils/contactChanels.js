

const chanels = {
    instagram: {title:'instagram',
        type: 'text',
        defaultVal: '',
        regEx: /^([A-Za-z0-9._](?:(?:[A-Za-z0-9._]|(?:\.(?!\.))){2,28}(?:[A-Za-z0-9._]))?)$/,
    },
    telegram: {title:'telegram',
        type: 'tel',
        defaultVal: '+380',
        regEx: /^(\+|\d)[0-9]{9,16}$/,
    },
    viber: {title:'viber',
        type: 'tel',
        defaultVal: '+380',
        regEx: /^(\+|\d)[0-9]{9,16}$/,
    },
    email: {title:'email',
        type: 'email',
        defaultVal: '',
        regEx: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    }
};

export default chanels;