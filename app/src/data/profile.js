const profile = {
    skills:[
        {
            title:'Professional Skills',
            items:[
                {name:'Comunication', score:80, color:'default'},
                {name:'Comunication', score:80, color:'default'},
            ]
        },
        {
            title:'Code Skills',
            items:[
                {name:'ReactJS', score:90, color:'red'},
                {name:'H5/Css3', score:80, color:'yellow'},
                {name:'Js/jQuery', score:80, color:'green'},
                {name:'PHP', score:70, color:'default'},
            ]
        },
        {
            title:'Other Skills',
            items:[
                {name:'Mysql', score:60, color:'default'},
                {name:'Linux', score:60, color:'default'},
                {name:'Git', score:80, color:'default'},
            ]
        },
    ],
    cases: [
        {
            title: '京津冀一卡通助手',
            cover: require('@/assets/img/abcd.jpg'),
            link: 'https://travelcard.chunni360.com/',
            target: '_blank',
        }
    ]
}

export default profile;