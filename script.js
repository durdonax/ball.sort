let data = [
    {id: 1, name: "Ali", ball: "85"},
    {id: 2, name: "Omar", ball: "59"},
    {id: 3, name: "Zayn", ball: "93"},
    {id: 4, name: "Noah", ball: "39"},
    {id: 5, name: "Liam", ball: "81"},
    {id: 6, name: "Musa", ball: "92"},
    {id: 7, name: "Ahmed", ball: "40"},
    {id: 8, name: "Eren", ball: "77"},
    {id: 9, name: "Yusuf", ball: "48"},
    {id: 10, name: "Ilyas", ball: "84"},
    {id: 11, name: "Harun", ball: "71"},
];

data.sort(( a, b) => b.ball - a.ball);
console.log(data);

