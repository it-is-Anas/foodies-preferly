import foodImage from '../assets/food1.png';

interface meal { id: number,title:string,slug:string,image: any ,summary: string ,creator:string };


const meals: meal[] = [
    {
        id: 1,
        title: 'Donatelos choclate!',
        slug: 'xchjk',
        image: foodImage,
        summary: 'a delicouse food here you can see delicouse food here you can see delicouse food here you can see ...',
        creator: 'Me',
    },
];



export default meals;