<template>
    <div class="landing-page22">
      <div class="landing-page22-child" />
      <section class="log-in-parent">
        <div class="log-in">
          <div class="ellipse-parent">
            <div class="frame-child" />
            <img
              class="image-74-icon"
              loading="eager"
              alt=""
              src="/image-74@2x.png"
            />
            <div class="welcome-to-trymetrix-container">
              <span>Welcome to </span>
              <b>tryMetrix</b>
              <span
                >, where you will be able to follow step by step your favorite
                team in detail</span
              >
            </div>
          </div>
          <router-link to="/login">
          <button class="join-us">
            <b class="join-us1">JOIN US</b>
            <div class="arrow">
              <img class="vector-icon"/>
              <img class="vector-icon1"/>
            </div>
          </button>
        </router-link>
          <div class="explore-trymetrix">
            <span class="explore">Explore </span>
            <b>TRYmetriX!</b>
          </div>
          <div class="log-in-child" />
          <div class="to-access-the-container">
            <p class="to-access-the">
              To access the full range of features and personalized content, we
              invite you to log in to your account. Whether you're a returning
              user or a new visitor, logging in ensures a seamless and secure
              experience tailored just for you.
            </p>
            <p class="come-join-us">Come join us and have fun with us!</p>
          </div>
          <div class="log-in-item" />
          <div class="wrapper-line-7">
            <img
              class="wrapper-line-7-child"
              loading="eager"
              alt=""
              src="/line-7.svg"
            />
          </div>
        </div>
      </section>
      <LandingPageView/>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
    import LandingPageView from "../views/LandingPageView.vue";
    import '@/assets/global.css';
  
    export default defineComponent({
      name: "LandingPage",
      components: { LandingPageView },
    });
  </script>
  <style scoped>
    .landing-page22-child {
      align-self: stretch;
      position: relative;
      background-color: #fff8f0;
      height: 1024px;
      display: none;
    }
    .frame-child {
      position: absolute;
      top: 0px;
      right: 100px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 10px 10px 4px rgba(57, 47, 90, 0.25);
      width: 100%;
      height: 100%;
    }
    .image-74-icon {
      position: absolute;
      top: 59px;
      left: 20px;
      width: 374px;
      height: 540px;
      object-fit: cover;
      z-index: 1;
    }
    .welcome-to-trymetrix-container {
      color: #392f5a;
      font-family: Arimo;
      position: absolute;
      top: 97px;
      left: 230px;
      white-space: pre-wrap;
      display: inline-block;
      width: 218px;
      z-index: 2;
    }
    .ellipse-parent {
      position: absolute;
      top: 183px;
      left: 666px;
      width: 658px;
      height: 658px;
      font-family: Arimo;
    }
    .join-us1 {
      position: absolute;
      top: 16px;
      left: 179px;
      font-size: 15px;
      font-family:Arimo;
      color: #fff8f0;
      text-align: left;
    }
    .vector-icon {
      position: relative;
      width: 55px;
      height: 0px;
    }
    .vector-icon1 {
      position: relative;
      width: 7px;
      height: 14px;
      margin-left: -5px;
    }
    .arrow {
      position: absolute;
      top: 17.5px;
      left: 219.5px;
      display: none;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .join-us {
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: #392f5a;
      position: absolute;
      top: 746px;
      left: 15px;
      border-radius: 7px;
      width: 419px;
      height: 49px;
    }
    .explore {
      font-weight: 300;
    }
    .explore-trymetrix {
      position: absolute;
      color: black;
      font-family: Arimo;
      top: 711px;
      left: 175px;
      font-size: 17px;
    }
    .log-in-child {
      position: absolute;
      top: 1024px;
      left: 95px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-top: 1px solid black;
      box-sizing: border-box;
      width: 1242px;
      height: 1px;
    }
    .to-access-the {
      margin: 0;
    }
    .come-join-us {
      margin: 0;
    }
    .to-access-the-container {
      position: absolute;
      top: 299px;
      font-family: Source Sans Pro;
      color: black;
      left: 50px;
      font-size: 24px;
      display: inline-block;
      width: 409px;
      height: 222px;
    }
    .log-in-item {
      position: absolute;
      top: 4px;
      left: 5px;
      background-color: var(--color-gray-100);
      width: 100%;
      height: 100%;
      display: none;
    }
    .wrapper-line-7-child {
      width: 100%;
      height: 100%;
      z-index: 5;
      object-fit: contain;
      position: absolute;
      left: -50px;
      top: 0px;
      transform: scale(Infinity);
    }
    .wrapper-line-7 {
      position: relative;
      top: 90px;
      left: 200px;
      width: 2000px;
      height: 0px;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .log-in {
      position: absolute;
      top: 9px;
      left: 0px;
      background-color: var(--color-gray-100);
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: 0.88;
      z-index: 3;
    }
    .try-removebg-preview-1-icon {
      position: absolute;
      top: 0px;
      left: -5px;
      width: 244px;
      height: 129px;
      object-fit: cover;
      z-index: 4;
    }
    .log-in-parent {
      align-self: stretch;
      position: relative;
      height: 1033px;
      text-align: left;
      font-size: var(--font-size-xl);
      color: var(--color-black);
      font-family: var(--font-source-sans-pro);
    }
    .landing-page22 {
      position: relative;
      background-color: var(--color-white);
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 36px 0px 84px;
      box-sizing: border-box;
      gap: 107px;
      letter-spacing: normal;
    }
  
    @media screen and (max-width: 750px) {
      .landing-page22 {
        gap: 53px;
      }
    }
    @media screen and (max-width: 450px) {
      .welcome-to-trymetrix-container {
        font-size: 15px;
      }
  
      .to-access-the-container {
        font-size: 19px;
      }
  
      .landing-page22 {
        gap: 27px;
      }
    }
  </style>
