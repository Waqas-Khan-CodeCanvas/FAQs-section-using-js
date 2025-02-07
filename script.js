const dataArry=[
    {
        tittle:"Why do web developers always struggle with relationships? 💔",
        detial:"Because they expect perfect alignment, but real life doesn’t support flexbox or grid! 😂 "
    },
    {
        tittle:"Why did the frontend developer break up with the backend developer ? 💔",
        detial:"Because they had too many conflicts and couldn’t find a common API for communication! No matter how many requests were made, the responses were always delayed. 💔"
    },
    {
        tittle:"Why did the CSS developer go to therapy ? 😅",
        detial:"Because he had too many unresolved issues… and z-index: 9999 wasn’t enough to bring his problems to the top! 😅"
    },
    {
        tittle:"Why do web developers hate surprises ? 🤯",
        detial:"Because every time something unexpected happens, it’s either an undefined error or an unexpected token that breaks the whole page! 🤯"
    }
];

const makeHTML=data=>{
    return `<details>
        <summary>${data.tittle}</summary>
        <p>${data.detial}</p>
    </details>`
};

document.body.innerHTML=dataArry.map(dataitem=>makeHTML(dataitem)).join("")