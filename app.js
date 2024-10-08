document.addEventListener('DOMContentLoaded', function () {
    /*let bgm = document.getElementById("backgroundMusic");*/
    var bgm = new Audio('https://github.com/SaranTungsagul/SaranTungsagul.github.io/raw/refs/heads/main/music/Blue%20Archive%20OST%2021.%20Midnight%20Trip_compress.flac');

    bgm.volume = 0;
    const mute = document.getElementById('muteBtn')

    mute.addEventListener('mousedown', function(){
        if(bgm.volume == 0){
            bgm.volume = 0.2;
            bgm.play();
            bgm.loop = true;
            mute.style.backgroundColor = 'rgba(0,0,0,0.7)';
        }
        else{
            bgm.pause();
            bgm.volume = 0
            mute.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    });
    const imgSrcMelon = [
        './images/portfolio/Melon_1.png',
        './images/portfolio/Melon_2.png',
        './images/portfolio/Melon_3.png',
        './images/portfolio/Melon_4.png',
        './images/portfolio/Melon_5.png',
        './images/portfolio/Melon_6.png',
        './images/portfolio/Melon_7.png',
        './images/portfolio/Melon_8.png',
        './images/portfolio/Melon_9.png',
        './images/portfolio/Melon_10.png',
        './images/portfolio/Melon_11.png',
        './images/portfolio/Melon_12.png',
        './images/portfolio/Melon_13.png',
        './images/portfolio/Melon_14.png',
        './images/portfolio/Melon_15.png',
    ];

    const imgSrcCode = [
        './images/portfolio/Melon_Player_1.png',
        './images/portfolio/Melon_Player_2.png',
        './images/portfolio/Melon_Player_3.png',
        './images/portfolio/Melon_Player_4.png',
        './images/portfolio/Melon_Code_2.png',
        './images/portfolio/Melon_Code_3.png',
        './images/portfolio/Melon_Code_4.png',
        './images/portfolio/Melon_Code_5.png',
        './images/portfolio/Melon_Code_6.png',
        './images/portfolio/Melon_Code_7.png',
        './images/portfolio/Melon_Code_8.png',
    ];

    const rotatingImage1 = document.getElementById('rotateImg1');
    const rotatingImage2 = document.getElementById('rotateImg2');
    const nextButton1 = document.getElementById('nextBtn1')
    const nextButton2 = document.getElementById('nextBtn2')
    const reverse1 = document.getElementById('revBtn1')
    const reverse2 = document.getElementById('revBtn2')

    let currentIndex1 = 0;
    let currentIndex2 = 0;

    let interval1;
    let interval2;

   
    function changeImg1(){
        rotatingImage1.src = imgSrcMelon[currentIndex1];
        currentIndex1 = (currentIndex1 + 1) % imgSrcMelon.length;
    }

    function changeImg2(){
        rotatingImage2.src = imgSrcCode[currentIndex2];
        currentIndex2 = (currentIndex2 + 1) % imgSrcCode.length;
    }

    function backImg1(){
        if(currentIndex1 == 0){
            rotatingImage1.src = imgSrcMelon[currentIndex1];
            currentIndex1 = currentIndex1 + imgSrcMelon.length-1;
        }
        else{
            rotatingImage1.src = imgSrcMelon[currentIndex1];
            currentIndex1 = (currentIndex1 - 1)
        }
    }

    function backImg2(){
        if(currentIndex2 == 0){
            rotatingImage2.src = imgSrcCode[currentIndex2];
            currentIndex2 = currentIndex2 + imgSrcCode.length-1;
        }
        else{
            rotatingImage2.src = imgSrcCode[currentIndex2];
            currentIndex2 = (currentIndex2 - 1)
        }
        
    }


    interval1 = setInterval(changeImg1, 5000);
    interval2 = setInterval(changeImg2, 5000);

    rotatingImage1.addEventListener('mouseover', function(){
        clearInterval(interval1);
    });

    rotatingImage1.addEventListener('mouseout', function(){
        interval1 = setInterval(changeImg1, 5000);
    });

    rotatingImage2.addEventListener('mouseover', function(){
        clearInterval(interval2);
    });

    rotatingImage2.addEventListener('mouseout', function(){
        interval2 = setInterval(changeImg2, 5000);
    });

    nextButton1.addEventListener('mousedown', function(){
        changeImg1();
    });

    nextButton2.addEventListener('mousedown', function(){
        changeImg2();
    });

    reverse1.addEventListener('mousedown', function(){
        backImg1();
    });

    reverse2.addEventListener('mousedown', function(){
        backImg2();
    });

});