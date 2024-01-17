<template>
    <section class="landing-page22-inner">
      <div class="frame-parent">
        <div class="frame-group">
          <div class="who-we-are-wrapper">
            <h1 class="who-we-are">Who we are?</h1>
          </div>
          <img
            class="image-79-icon"
            loading="eager"
            alt=""
            src="/image-79@2x.png"
          />
        </div>
        <div class="welcome-to-the-container">
          <p class="welcome-to-the">
            Welcome to the dynamic world of TRYmetriX, where gaming and esports
            enthusiasts converge to explore the latest in competitive
            Counter-Strike: Global Offensive (CS:GO) and beyond. At TRYmetriX, we
            strive to capture the essence of the gaming culture, providing a
            platform where players, teams, and fans unite to celebrate the
            excitement of professional esports.
          </p>
          <p class="blank-line">&nbsp;</p>
          <p class="blank-line1">&nbsp;</p>
          <p class="as-a-premier">
            As a premier destination for CS:GO news, live scores, and in-depth
            analysis, TRYmetriX brings you closer to the heart of the gaming
            action. Whether you're a seasoned esports veteran or a newcomer eager
            to delve into the thrilling universe of competitive gaming, TRYmetriX
            is your go-to source for breaking news, engaging features, and
            comprehensive event coverage
          </p>
          <p class="blank-line2">&nbsp;</p>
          <p class="blank-line3">&nbsp;</p>
          <p class="join-us-on">
            Join us on this exhilarating journey through the realms of virtual
            competition, where skill, strategy, and teamwork collide to create
            moments of unparalleled excitement. At TRYmetriX, we're not just
            reporting on esports – we're immersed in the pulse-pounding world of
            CS:GO, celebrating the players, the matches, and the community that
            make this gaming phenomenon truly extraordinary
          </p>
          <p class="blank-line4">&nbsp;</p>
          <p class="blank-line5">&nbsp;</p>
          <p class="embrace-the-thrill">
            Embrace the thrill, stay informed, and experience the essence of
            gaming with TRYmetriX – because in this fast-paced world of esports,
            understanding how we are is key to unlocking the full potential of the
            gaming experience.
          </p>
        </div>
      </div>
    </section>
  </template>
  <script>
    import { defineComponent } from "vue";
    import '@/assets/global.css';
  
    export default defineComponent({
      name: "LandingPageView",
    });
  </script>
  <style scoped>
    .who-we-are {
      margin: 0;
      top: -15px;
      right: -120px;
      font-family: Arimo;
      color: #000;
      position: relative;
      font-size: 22px;
      font-weight: 700;
      font-family: Arimo;
      z-index: 1;
    }
    .who-we-are-wrapper {
      width: 500px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      padding: 0px var(--padding-xl);
      box-sizing: border-box;
      max-width: 100%;
    }
    .image-79-icon {
      align-self: stretch;
      position: relative;
      left:-50px;
      border-radius: var(--br-31xl) var(--br-31xl) 0px 0px;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .frame-group {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      gap: var(--gap-7xs);
      max-width: 100%;
    }
    .welcome-to-the {
      margin: 0;
    }
    .blank-line {
      margin: 0;
    }
    .blank-line1 {
      margin: 0;
    }
    .as-a-premier {
      margin: 0;
    }
    .blank-line2 {
      margin: 0;
    }
    .blank-line3 {
      margin: 0;
    }
    .join-us-on {
      margin: 0;
    }
    .blank-line4 {
      margin: 0;
    }
    .blank-line5 {
      margin: 0;
    }
    .embrace-the-thrill {
      margin: 0;
    }
    .welcome-to-the-container {
      align-self: stretch;
      position: relative;
      left: -1px;
      color: #000;
      font-family: Source Sans Pro;
      font-size: 17px;
      text-align: center;
      display: inline-block;
      height: 424px;
      flex-shrink: 0;
      z-index: 1;
      padding-top: 40px;
    }
    .frame-parent {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      gap: var(--gap-55xl);
      max-width: 100%;
    }
    .landing-page22-inner {
      width: 1296px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-13xl) 0px var(--padding-xl);
      box-sizing: border-box;
      max-width: 100%;
      text-align: left;
      font-size: var(--font-size-36xl);
      color: var(--color-black);
      font-family: var(--font-arimo);
    }
  
    @media screen and (max-width: 750px) {
      .who-we-are {
        font-size: var(--font-size-25xl);
      }
    }
    @media screen and (max-width: 675px) {
      .frame-parent {
        gap: var(--gap-18xl);
      }
    }
    @media screen and (max-width: 450px) {
      .who-we-are {
        font-size: var(--font-size-14xl);
      }
  
      .welcome-to-the-container {
        font-size: var(--font-size-base);
      }
  
      .frame-parent {
        gap: var(--gap-lg);
      }
    }
  </style>
  