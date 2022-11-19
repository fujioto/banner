"use strict"

const firstCup =  document.getElementById('cup1');
const secondCup =  document.getElementById('cup2');
const thirdCup =  document.getElementById('cup3');
const closeBtn = document.getElementById('close');
const closeBtn2 = document.getElementById('close2');
const closeBtn3 = document.getElementById('close3');
const loginBtn = document.getElementById('lgn');
const loginBtn2 = document.getElementById('lgn2');
const loginBtn3 = document.getElementById('lgn3');
let res = 0

function getPromoPrice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    res = Math.floor(Math.random() * (max - min + 1)) + min;
    res = Math.floor(res/100) * 100;
    return res
};


firstCup.addEventListener('click', () => {
    document.querySelector('.cup_img1').style = 'display: none';
    document.querySelector('.cup_img2').style = 'display: none';
    document.querySelector('.cup_img3').style = 'display: none';
    document.getElementById('win_2k').style = 'display: block';
    let priceTemp = getPromoPrice(500, 2000);
    document.getElementById('price').innerHTML =  priceTemp + ' ' + 'РУБЛЕЙ';
    document.querySelector('.square').style = 'display: block';
})

secondCup.addEventListener('click', () => {
    document.querySelector('.cup_img1').style = 'display: none';
    document.querySelector('.cup_img2').style = 'display: none';
    document.querySelector('.cup_img3').style = 'display: none';
    document.getElementById('win_1k').style = 'display: block';
    let priceTemp = getPromoPrice(500, 2000);
    document.getElementById('price2').innerHTML =  priceTemp + ' ' + 'РУБЛЕЙ';
    document.querySelector('.square').style = 'display: block';
})

thirdCup.addEventListener('click', () => {
    document.querySelector('.cup_img1').style = 'display: none';
    document.querySelector('.cup_img2').style = 'display: none';
    document.querySelector('.cup_img3').style = 'display: none';
    document.getElementById('win_500').style = 'display: block';
    let priceTemp = getPromoPrice(500, 2000);
    document.getElementById('price3').innerHTML =  priceTemp + ' ' + 'РУБЛЕЙ';
    document.querySelector('.square').style = 'display: block';
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.promocode').style = 'display: block';
    document.getElementById('win_2k').style = 'display: none';
    document.querySelector('.square').style = 'display: none';
})

closeBtn2.addEventListener('click', () => {
    document.querySelector('.promocode').style = 'display: block';
    document.getElementById('win_1k').style = 'display: none';
    document.querySelector('.square').style = 'display: none';
})

closeBtn3.addEventListener('click', () => {
    document.querySelector('.promocode').style = 'display: block';
    document.getElementById('win_500').style = 'display: none';
    document.querySelector('.square').style = 'display: none';
})

loginBtn.addEventListener('click', () => {
    document.querySelector('.promocode').style = 'display: block';
    document.getElementById('win_2k').style = 'display: none';
    document.querySelector('.square').style = 'display: none';
})

loginBtn2.addEventListener('click', () => {
    document.querySelector('.promocode').style = 'display: block';
    document.getElementById('win_1k').style = 'display: none';
    document.querySelector('.square').style = 'display: none';
})

loginBtn3.addEventListener('click', () => {
    document.querySelector('.promocode').style = 'display: block';
    document.getElementById('win_500').style = 'display: none';
    document.querySelector('.square').style = 'display: none';
})

