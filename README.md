# CandleCommerce

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
