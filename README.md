# CandleCommerce

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

To deploy:

1. Fork and clone repositoty
2. npm i from inside server folder
3. npm i from inside client folder
4. call the command 'nodemon' --> from server folder
5. call the command 'npm start' --> from client folder

To add products use PostMan: --
url: http://localhost:3001/newProduct --
JSON is as follows --
{
"pic_one": "url_string",
"pic_two": "url_string",
"price": number,
"description": "string",
"title": "string",
"colours": [
{"colour":"Black","scents":["Baltic Amber and Clove","Bubblegum", "French Pear", "French Vanilla", "Fresh Linen","Pomegranate Noir"]},
]
}

The project can now be used as a template for an online store
