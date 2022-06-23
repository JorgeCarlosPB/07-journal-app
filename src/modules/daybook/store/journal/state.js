
//el state es reactivo y cuando cambie se notifica a todos los lugres que estèn escucando el state
// export default () =>({
    
// })

export default()=>({
    idLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Ut aliqua veniam nisi anim. Aute tempor sit exercitation nulla est commodo proident veniam dolor sit.Quis minim ipsum consequat et magna minim. In laboris ex culpa reprehenderit nisi. Culpa ex occaecat ullamco amet id sint.',
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Tempor in aute cupidatat pariatur. Et dolore occaecat anim est sunt duis sint ex. Pariatur incididunt labore elit sit non incididunt ad eu do. In excepteur ex culpa incididunt fugiat. Est dolor enim voluptate deserunt minim esse aute. Quis cupidatat sit exercitation labore exercitation veniam labore excepteur. Est sit dolor excepteur minim dolore irure.',
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Occaecat sunt aute esse elit qui. Pariatur tempor officia velit commodo. Sint id incididunt minim veniam ipsum laborum tempor. Amet dolore ut est occaecat ad ipsum cupidatat velit aliqua aliqua occaecat aliquip. Excepteur occaecat eu nostrud laborum ad nisi amet in nulla in.',
            picture: null,
        },
    ]

})