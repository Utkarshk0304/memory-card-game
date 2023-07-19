const section=document.querySelector("section");
const playerLivesCount=document.querySelector("span");
let playerLives=6;

playerLivesCount.textContent=playerLives;

const getData=()=>
    [
        {imgSrc:"./images/cake.jpg",name:"cake"},
        {imgSrc:"./images/cat.jpg",name:"cat"},
        {imgSrc:"./images/dog.jpg",name:"dog"},
        {imgSrc:"./images/flower.jpg",name:"flower"},
        {imgSrc:"./images/human.jpg",name:"human"},
        {imgSrc:"./images/nature.jpg",name:"nature"},
        {imgSrc:"./images/samosa.jpg",name:"samosa"},
        {imgSrc:"./images/sunset.jpg",name:"sunset"},
        {imgSrc:"./images/cake.jpg",name:"cake"},
        {imgSrc:"./images/cat.jpg",name:"cat"},
        {imgSrc:"./images/dog.jpg",name:"dog"},
        {imgSrc:"./images/flower.jpg",name:"flower"},
        {imgSrc:"./images/human.jpg",name:"human"},
        {imgSrc:"./images/nature.jpg",name:"nature"},
        {imgSrc:"./images/samosa.jpg",name:"samosa"},
        {imgSrc:"./images/sunset.jpg",name:"sunset"}
    ];

const randomize=()=>{
    const cardData=getData();
    cardData.sort(()=>Math.random()-0.5);
    return cardData;
};

const cardGenerator=()=>{
    const cardData=randomize();
    

    cardData.forEach((item)=>{
        const card=document.createElement("div");
        const face=document.createElement("img");
        const back=document.createElement("div");
        card.classList="card";
        face.classList="face";
        back.classList="back";

        face.src=item.imgSrc;
        card.setAttribute("name",item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click",(e)=>{
            card.classList.toggle("toggleCard");
            checkCards(e);
        });

    });
};
const checkCards=(e)=>{
    const clickedCard=e.target;
    clickedCard.classList.add("flipped");
    const flippedCards=document.querySelectorAll(".flipped");
    const toggleCard=document.querySelectorAll(".toggleCard");
    
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name")===flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped");
                card.style.pointerEvents="none";
            });
        }
        else{
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped");
                setTimeout(()=>
                card.classList.remove("toggleCard"),1000


                );
            
            });
            playerLives--;
            playerLivesCount.textContent=playerLives;
            if (playerLives===0) {
                restart("LOST! Try again");
            }
        }
        
    }
    if (toggleCard.length===16) {
        restart("you won!");
    }
};
const restart=(text)=>{
    let cardData=randomize();
    let faces=document.querySelectorAll(".face");
    let cards=document.querySelectorAll(".card");
    section.style.pointerEvents="none";
    cardData.forEach((item,index)=>{
        cards[index].classList.remove("toggleCard");
        setTimeout(()=>{
            cards[index].style.pointerEvents="all";
            faces[index].src=item.imgSrc;
            cards[index].setAttribute("name",item.name);
            section.style.pointerEvents="all";
        },1000);
        

    });
    playerLives=6;
    playerLivesCount.textContent=playerLives;
    setTimeout(()=>
    window.alert(text),100
    );
};


cardGenerator();
