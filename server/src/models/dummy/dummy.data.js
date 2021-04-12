import bcrypt from 'bcrypt';
export const dummydb = [
  {
    id:1,
    title:'Dummy Title Data',
    description: 'This is when sweetness meets awesomeness'
  },

  {
    id:2,
    title:'Adam and Eve',
    description: 'Eve was the first naked woman, Adam saw all her nakedness just after eating the apple which opened his eyes. when he saw her naked butt Adam said oh my lover lover!!,give me that big luba luba. Hehe!!! The devil was the first to tell Eve she was naked. Yeah right!!! the devil saw her butt and just couldnt stop yelling. wishing he was adam just because he was just a snake. Man that hurts!!So long Mr devil keep yelling while adam just keep on rocking.. Butt looker !!! it doest belong to you !!'
  }
];

export const userdb = [
  {
    username:"Adam",
    email:"adam@gmail.com",
    password: bcrypt.hashSync("apple",10),
    firstname:"Adam",lastname:"Adam",
    //othername: string,
    user_type:"Individual",phoneNumber:"08130870416"

  },
  {
    username:"Eve",
    email:"eve@gmail.com",
    password: bcrypt.hashSync("apple",10),
    firstname:"Adam",lastname:"Adam",
    //othername: string,
    user_type:"Individual",phoneNumber:"08130870416"
  }
]
