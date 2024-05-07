<template>
    <div class="common-layout">
        <el-container>
            <el-header class="nav">
                <div class="nav-item">
                    <div class="logo">
                        <img src="./images/Metabase-logo-m-64px-light.png" alt="">
                        <span>MNT</span>
                    </div>
                    <ul>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#download">DOWNLOAD</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <!-- <li>
              <el-select v-model="language" class="select" @change="change(language)" >
                <el-option
                  v-for="item in options" 
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>             
            </li> -->
                    </ul>
                    <div class="hdNav">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <div class="drop-down" ref="drop">
                    <ul>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#download">DOWNLOAD</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </el-header>
            <el-main class="main">
                <div class="header">
                    <div class="header-item">
                        <h3>Global decentralized digital currency</h3>
                        <p>Based on blockchain technology</p>
                        <el-link href="https://github.com/metabasenet/notice/releases/" target="_self"
                            :underline="false">
                            <el-button type="primary" class="header-itemButton">
                                <img src="./images/header-wallet.png" alt="">
                                <span>Download <br> Wallet</span>
                            </el-button>
                        </el-link>
                    </div>
                </div>
                <div class="main-firstItem" id="about">
                    <el-row class="firstItem-one">
                        <el-col :span="24">What is MNT?</el-col>
                    </el-row>
                    <el-row class="firstItem-two">
                        <el-col :span="24">The MNT cryptocurrency is a peer-to-peer distributed network currency system.
                            She can
                            make payments to any corner of the world instantly and with low transaction fees. MNT is an
                            open source
                            project, a global payment network that does not have any central control node. Strict
                            cryptography
                            protocols enable this network system to fully protect the financial security of every user.
                            Compared with
                            Bitcoin's cryptocurrency system, MNT has faster transaction confirmation time, higher
                            network transaction
                            capacity and efficiency. MNT now has a complete industrial chain and sufficient liquidity,
                            which is enough
                            to prove that it is a mature, safe and stable commercial financial system.</el-col>
                    </el-row>
                    <div class="firstItem-three" justify="space-between">
                        <div class="item-one">
                            <img src="./images/game.png" alt="">
                            <h3>Game</h3>
                            <p>To experience the prototype of the Metaverse in the simplest way with the Game. It can
                                circulate freely
                                between the systems by Game Props item certification on the blockchain, and can be
                                realized or exchanged
                                for items of equivalent value on other platforms . This allows the game to have The
                                value attribute of
                                the Metaverse.
                            </p>
                        </div>
                        <div class="item-two">
                            <img src="./images/shopping.png" alt="">
                            <h3>Shopping</h3>
                            <p>In Metaverse, you can enjoy a visible Shopping experience. Not only can the items be
                                seen, the
                                transaction process can be seen, the traceability of the items can be seen, and even the
                                production
                                process can be seen. Of course, you can initiate arbitration at any time if you are not
                                satisfied with
                                the product. To punish the seller, the ultimate goal is that everything related to the
                                product is
                                transparent to you.
                            </p>
                        </div>
                        <div class="item-three">
                            <img src="./images/sports.png" alt="">
                            <h3>Sports</h3>
                            <p>Enjoy a pleasant virtual sports time with friends by Metaverse Sports. Even if you stay
                                at home, by
                                wearable devices you can also exercise with your friends in the Metaverse. You could be
                                completely
                                immersed in sports during the experience, imagine that with your friends traveled
                                through the Alps for
                                an afternoon together on a stormy night, enjoying the beautiful Alpine afternoon
                                sunshine.
                            </p>
                        </div>
                    </div>
                    <div class="firstItem-four" justify="space-between">
                        <div class="item-one">
                            <img src="./images/meeting-room.png" alt="">
                            <h3>Meeting</h3>
                            <p>Even if you are thousands of mils away, you can still attend the company’s weekly
                                Meetings on time. You
                                can show everyone a perfect image without even wearing a formal dress, and you can
                                participate in any
                                meeting at any location anytime, anywhere.
                            </p>
                        </div>
                        <div class="item-two">
                            <img src="./images/education.png" alt="">
                            <h3>Education</h3>
                            <p>The Metaverse makes Education more vivid. In natural science courses, you can even see
                                animals running
                                and plants growing. You can even visit the planets in person when explaining the solar
                                system or the
                                universe. This must be a enjoy the process of Education.
                            </p>
                        </div>
                        <div class="item-three">
                            <img src="./images/social.png" alt="">
                            <h3>Socialize</h3>
                            <p>When we are still sharing text, pictures and videos, Metaverse will bring a new way of
                                Socializing.
                                Have you ever experienced a real feeling from the sharer? Sunshine, temperature, wind,
                                rain, ground, and
                                even pain, how beautiful the scenery is, how exciting it is to skydiving, these we will
                                all become part
                                of the Metaverse society.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="main-secondItem" id="download">
                    <el-row class="secondItem-one">
                        <el-col :span="24">DownLoad</el-col>
                    </el-row>
                    <el-row class="secondItem-two">
                        <el-col :span="24">#Release Notes&nbsp;|&nbsp;Upgrade Instructions</el-col>
                    </el-row>
                    <div class="secondItem-three" justify="space-between">
                        <div class="item-one">
                            <img src="./images/AI.png" alt="">
                            <div class="one-ri">
                                <h3>VR</h3>
                                <ul>
                                    <li><el-link type="primary"
                                            href="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.6806-6/383497737_1558985647974793_6092499567051103928_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M5t_JWGzf5QAX_5ll2t&_nc_ht=scontent-hkg4-1.xx&oh=00_AfA74q53IAs7CHyfcgPIb6fRdALse767TXb49e5n18NftQ&oe=65FCD98A">Oculus
                                            Development</el-link></li>
                                    <li><el-link type="primary" href="https://partners.playstation.net/">PlayStation VR
                                            Development</el-link></li>
                                    <li><el-link type="primary" href="https://developers.google.com/vr">Google VR
                                            Development</el-link>
                                    </li>
                                    <li><el-link type="primary"
                                            href="https://developer.valvesoftware.com/wiki/Main_Page">Steam Valve
                                            Development</el-link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="item-two">
                            <img src="./images/robot.png" alt="">
                            <div class="two-ri">
                                <h3>AI</h3>
                                <ul>
                                    <li><el-link type="primary" href="https://www.tensorflow.org/">TensorFlow</el-link>
                                    </li>
                                    <li><el-link type="primary" href="https://pytorch.org/">PyTorch</el-link></li>
                                    <li><el-link type="primary" href="https://h2o.ai/">H2O</el-link></li>
                                    <li><el-link type="primary" href="https://www.shogun-toolbox.org/">Shogun</el-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="item-three">
                            <img src="./images/smart-device.png" alt="">
                            <div class="three-ri">
                                <h3>Smart Devices</h3>
                                <el-scrollbar max-height="70px" class="scol">
                                    <ul>
                                        <li><el-link type="primary" href="https://docs.arduino.cc/">Arduino</el-link>
                                        </li>
                                        <li><el-link type="primary"
                                                href="https://openremote.io/developers/">OpenRemote</el-link></li>
                                        <li><el-link type="primary"
                                                href="https://thingsboard.io/docs/">ThingsBoard</el-link></li>
                                        <li><el-link type="primary" href="https://docs.thinger.io/">Thinger</el-link>
                                        </li>
                                        <li><el-link type="primary"
                                                href="https://mainflux.readthedocs.io/en/latest/">MainFlux</el-link>
                                        </li>
                                    </ul>
                                </el-scrollbar>
                            </div>
                        </div>
                    </div>
                    <div class="secondItem-four" justify="space-between">
                        <el-link :underline="false" class="item-one"
                            href="https://github.com/metabasenet/website/blob/master/src/assets/Metabase-GreenPaper-V1.0.pdf">
                            <div class="img"><img src="./images/greenPage.png" alt=""></div>
                            <div class="font">Metabase&nbsp;GreenPaper</div>
                        </el-link>
                        <div class="item-two">
                            <img src="./images/provide-planning.png" alt="">
                            <div class="two-ri">
                                <h3>What we have?</h3>
                                <ul>
                                    <li>Para-Chain Support</li>
                                    <li>Corss-Chain Support</li>
                                    <li>Contract Support</li>
                                    <li>SDK support for Developers</li>
                                    <li>Modular Development</li>
                                </ul>
                            </div>
                        </div>
                        <el-link :underline="false" href="https://github.com/metabasenet" class="item-three">
                            <div class="img"><img src="./images/cat.png" alt=""></div>
                            <div class="font">
                                <h3>Source</h3>
                                <p>MNT Core GitHub</p>
                            </div>
                        </el-link>
                    </div>
                </div>
                <div class="main-thirdItem" id="contact">
                    <el-row class="thirdItem-one">
                        <el-col :span="24">CONTACT US</el-col>
                    </el-row>
                    <el-row class="thirdItem-two">
                        <el-col :span="24">You can contact the MNT project development team at
                            metabasenet@gmail.com</el-col>
                    </el-row>
                </div>
            </el-main>
            <el-footer class="footer">
                <div class="footer-firstItem">
                    <div class="firstItem-one">
                        Copyright © 2011-2024 MNT under LONGPAY FINANCIAL INSTITUTION CO., LTD.
                    </div>
                    <ul>
                        <li><a href="https://twitter.com/Metabasenet"><img src="./images/twitter.png" alt=""></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61557178406261"><img
                                    src="./images/facebook.png" alt=""></a></li>
                        <li><a href="https://t.me/www_metabasenet_club"><img src="./images/telegram.png" alt=""></a>
                        </li>
                    </ul>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
// import useAppStore from './store/app';
import { watchEffect, ref } from 'vue';
import { useRouter} from 'vue-router';
import $ from 'jquery';

let drop = ref(null)
// const router = useRouter();
// let screenWidth = ref(window.innerWidth)
let selectShow = ref(false)
window.addEventListener("scroll", function () {
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
})

$(
    function () {
        $(".hdNav").click(
            function () {
                $(".drop-down").slideToggle()

                $("header").toggleClass("stick")
            }
        )
    }
)



// var targetElement = document.getElementById("drop")
// var hdNav = document.getElementById("select")
// hdNav.addEventListener('click',()=>{
//     targetElement.classList.add("highlight");
// })
// hdNav.addEventListener('click',function () {

// })
// watch(screenWidth,()=>{
//     if (screenWidth <= 992) {
//         window.removeEventListener("scroll", function () {
//             var header = document.querySelector("header")
//             header.classList.toggle("sticky", window.scrollY > 0);
//         })
//     }
// })

// const appStore = useAppStore();

// const { t, locale } = useI18n();

// const language = ref(appStore.language);
// locale.value = language.value;
// const options = [
//     {
//         value: 'zh',
//         label: '中文',
//     },
//     {
//         value: 'en',
//         label: 'English',
//     },
// ]
// function change(v) {
//     locale.value = v;
//     appStore.setLanguage(v);
// }
</script>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 0; 
    display: flex;
    justify-content: center;
    transition: 0.6s;
    z-index: 100000;
}

.nav-item {
    position: relative;
    width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-item .logo img {
    vertical-align: middle;
    margin-right: 3px;
    transition: 0.6s;
}

.nav-item .logo span {
    vertical-align: middle;
    font-size: 28px;
    color: #ffffff;
    transition: 0.6s;
}

.nav-item ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.nav-item ul li {
    list-style: none;
}

.nav-item ul li a {
    text-decoration: none;
    margin-left: 50px;
    font-size: 18px;
    color: #ffffff;
    transition: 0.6s;
}

.nav-item ul li .select {
    margin-top: 2px;
    width: 90px;
    margin-left: 50px;
    transition: 0.6s;
}
.drop-down {
    display: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 50px;
    background-color: #fff;
    /* transition: 0.2s; */
}
header.stick {
    background-color: #fff;
    padding: 5px;
}
.drop-down ul {
    margin: 0 ;
    padding: 0;
    padding-left: 27px;
}
.drop-down ul li {
    list-style: none;
    margin-top: 10px;
}
.drop-down ul li a {
    text-decoration: none;
    font-size: 18px;
    color: #888;
}
.drop-down ul li:hover a {
    color: #88cbf5;
}
.hdNav {
    width: 40px;
    padding: 6px 0 0;
    background-color: #88cbf5;
    display: none;
    cursor: pointer;
}
.hdNav i {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: auto;
    margin-bottom: 6px;
}
header.sticky {
    padding: 42px 0;
    background-color: #ffffff;
}

header.sticky .nav-item .logo img {
    border-radius: 100px;
    background-color: #888888;
}

header.sticky .nav-item .logo span {
    color: #888888;
}

header.sticky .nav-item ul li a {
    color: #888888;
}

.header {
    padding: 0px;
    height: 1020px;
    background: url(./images/header-bg.jpg) no-repeat center;
    background-size: cover;
}

.header-item {
    width: 1140px;
    height: 372px;
    margin: auto;
    text-align: center;
    padding: 300px 0 200px;
}

.header-item h3 {
    font-size: 60px;
    color: #fff;
    margin-bottom: 50px;
}

.header-item p {
    font-size: 40px;
    color: #fff;
    margin-bottom: 25px;
}

.header-item .header-itemButton {
    width: 283px;
    height: 111px;
    background-color: #88cbf5;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 36px;
    display: flex;
    justify-content: flex-start;

}

.header-itemButton img {
    width: 64px;
    height: 64px;
    margin-top: 0;
    margin-left: 35px;
    margin-right: 25px;
}

.header-itemButton span {
    margin-top: 5px;
    font-size: 25px;
    color: #ffffff;
    text-decoration: none;
    line-height: 30px;
}

.main {
    padding: 0px;
}

.main-firstItem {
    width: 1140px;
    margin: auto;
    padding: 150px 0;
}

.firstItem-one {
    text-align: center;
    font-size: 40px;
    color: #222222;
    margin-bottom: 15px;
}

.firstItem-two {
    font-size: 16px;
    color: #777777;
    margin-bottom: 10px;
}

.firstItem-three {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.firstItem-three .item-one {
    width: 360px;
    height: 321px;
    text-align: center;
}

.firstItem-three .item-two {
    width: 360px;
    height: 321px;
    text-align: center;
}

.firstItem-three .item-three {
    width: 360px;
    height: 321px;
    text-align: center;
}

.firstItem-three .item-one h3 {
    font-size: 18px;
    color: #222222;
    margin: 15px 0px;
}

.firstItem-three .item-two h3 {
    font-size: 18px;
    color: #222222;
    margin: 15px 0px;
}

.firstItem-three .item-three h3 {
    font-size: 18px;
    color: #222222;
    margin: 15px 0px;
}

.firstItem-three .item-one p {
    font-size: 14px;
    color: #777777;
    text-align: left;
}

.firstItem-three .item-two p {
    font-size: 14px;
    color: #777777;
    text-align: left;
}

.firstItem-three .item-three p {
    font-size: 14px;
    color: #777777;
    text-align: left;
}

.firstItem-three .item-one img {
    width: 112px;
    height: 112px;
}

.firstItem-three .item-two img {
    width: 112px;
    height: 112px;
}

.firstItem-three .item-three img {
    width: 112px;
    height: 112px;
}

.firstItem-four {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.firstItem-four .item-one {
    width: 360px;
    height: 321px;
    text-align: center;

}

.firstItem-four .item-two {
    width: 360px;
    height: 321px;
    text-align: center;
}

.firstItem-four .item-three {
    width: 360px;
    height: 321px;
    text-align: center;
}

.firstItem-four .item-one h3 {
    font-size: 18px;
    color: #222222;
    margin: 15px 0px;
}

.firstItem-four .item-two h3 {
    font-size: 18px;
    color: #222222;
    margin: 15px 0px;
}

.firstItem-four .item-three h3 {
    font-size: 18px;
    color: #222222;
    margin: 15px 0px;
}

.firstItem-four .item-one p {
    font-size: 14px;
    color: #777777;
    text-align: left;
}

.firstItem-four .item-two p {
    font-size: 14px;
    color: #777777;
    text-align: left;
}

.firstItem-four .item-three p {
    font-size: 14px;
    color: #777777;
    text-align: left;
}

.firstItem-four .item-one img {
    width: 112px;
    height: 112px;
}

.firstItem-four .item-two img {
    width: 112px;
    height: 112px;
}

.firstItem-four .item-three img {
    width: 112px;
    height: 112px;
}

.main-secondItem {
    width: 1140px;
    margin: auto;
    padding: 150px 0;
}

.secondItem-one {
    font-size: 40px;
    color: #222222;
    margin-bottom: 15px;
    text-align: center;
}

.secondItem-two {
    font-size: 16px;
    color: #41acef;
    margin-bottom: 15px;
    text-align: center;
    margin: 20px 0px 75px;
}
.secondItem-three {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.secondItem-three .item-one {
    display: flex;
    justify-content: flex-start;
    width: 293px;
    height: 109px;
    background-color: #88cbf5;
    border-radius: 5px;
}

.secondItem-three .item-one img {
    width: 42px;
    height: 46px;
    margin-top: 30px;
    margin-left: 20px;
}

.secondItem-three .item-one .one-ri {
    margin-left: 55px;
    text-align: left;
}

.one-ri h3 {
    margin: 0;
    margin-bottom: 1px;
    font-size: 18px;
    color: #ffffff;
}

.one-ri ul {
    margin: 0;
    padding: 0;
    width: 200px;
}

.one-ri ul li {
    color: #ffffff;
}

.one-ri ul li a {
    font-size: 14px;
    color: #ffffff;
}

.secondItem-three .item-two {
    display: flex;
    justify-content: flex-start;
    width: 293px;
    height: 109px;
    background-color: #88cbf5;
    border-radius: 5px;
}

.secondItem-three .item-two img {
    width: 42px;
    height: 46px;
    margin-top: 30px;
    margin-left: 20px;
}

.secondItem-three .item-two .two-ri {
    margin-left: 55px;
    text-align: left;
}

.two-ri h3 {
    margin: 0;
    margin-bottom: 1px;
    padding: 0;
    font-size: 17px;
    color: #ffffff;
}

.two-ri ul {
    margin: 0;
    padding: 0;
    width: 150px;
}

.two-ri ul li {
    color: #ffffff;
}

.two-ri ul li a {
    font-size: 14px;
    color: #ffffff;
}

.secondItem-three .item-three {
    display: flex;
    justify-content: flex-start;
    width: 293px;
    height: 109px;
    background-color: #88cbf5;
    border-radius: 5px;
}

.secondItem-three .item-three img {
    width: 42px;
    height: 46px;
    margin-top: 30px;
    margin-left: 20px;
}

.secondItem-three .item-three .three-ri {
    margin-left: 55px;
    text-align: left;
}

.three-ri h3 {
    margin: 0;
    margin-bottom: 1px;
    font-size: 18px;
    color: #ffffff;
}

.three-ri .scol ul {
    margin: 0;
    padding: 0;
    width: 150px;
}

.three-ri ul li {
    color: #ffffff;
}

.three-ri ul li a {
    font-size: 14px;
    color: #ffffff;
}

.secondItem-four {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.secondItem-four  .item-one {
    width: 293px;
    height: 109px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #88cbf5;
    border-radius: 5px;
}


.secondItem-four  .item-one .img img{
    width: 42px;
    height: 46px;
    margin-left: 20px;
}

.secondItem-four  .item-one .font {
    font-size: 20px;
    color: #ffffff;
    margin-left: 40px;
}

.secondItem-four .item-two {
    display: flex;
    justify-content: flex-start;
    width: 293px;
    height: 109px;
    background-color: #88cbf5;
    border-radius: 5px;
}

.secondItem-four .item-two img {
    width: 42px;
    height: 46px;
    margin-top: 30px;
    margin-left: 20px;
}

.secondItem-four .item-two .two-ri {
    margin-left: 55px;
    text-align: left;
}

.secondItem-four .two-ri h3 {
    margin: 0;
    margin-bottom: 1px;
    font-size: 18px;
    color: #ffffff;
}

.secondItem-four .two-ri ul {
    margin: 0;
    padding: 0;
    width: 200px;
}

.secondItem-four .two-ri ul li {
    color: #ffffff;
    font-size: 15px;
}

.secondItem-four .item-three {
    width: 293px;
    height: 109px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #88cbf5;
    border-radius: 5px;
}


.secondItem-four .item-three  .img img {
    width: 42px;
    height: 46px;
    margin-left: 20px;
}

.secondItem-four .item-three  .font{
    font-size: 20px;
    color: #ffffff;
    margin-left: 55px;
}

.secondItem-four .item-three .font h3 {
    font-size: 18px;
    color: #ffffff;
    margin-left: 50px
}


.main-thirdItem {
    height: 420px;
    padding: 150px 0px;
    background: url(./images/map-image.jpg) no-repeat center;
    background-size: cover;
}

.thirdItem-one {
    width: 1140px;
    font-size: 40px;
    color: #ffffff;
    text-align: center;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 15px;
}

.thirdItem-two {
    width: 1140px;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
}
.footer {
    padding: 0px;
}

.footer-firstItem {
    width: 1140px;
    padding: 25px 0px;
    margin: auto;
}

.footer-firstItem .firstItem-one {
    font-size: 14px;
    color: #222222;
    text-align: center;
    margin: auto;
}

.footer-firstItem  ul {
    margin: auto;
    margin-top:  10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.footer-firstItem  ul li {
    list-style: none;
    margin-right: 10px;
}

.footer-firstItem  ul li img {
    width: 32px;
    height: 32px;
    border-radius: 100px;
}

.footer-firstItem  ul li:hover img {
    background-color: #41acef;
}

@media (max-width:992px) {
.nav {
    width: 100%;
    background-color: #fff;
    padding: 0;
    transition: 0.6s;
}

.nav-item {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-item .logo img {
    vertical-align: middle;
    margin-right: 3px;
    transition: 0.6s;
    width: 38px;
    height: 38px;
    border-radius: 100px;
    background-color: #888888;
}

.nav-item .logo span {
    vertical-align: middle;
    font-size: 20px;
    transition: 0.6s;
    color: #888888;
}

.hdNav {
    display: block;
}
header.sticky {
    padding: 5px;
    /* height: 30px !important; */
}
.header {
    width: 100%;
    padding: 0px;
    height: 1020px;
    background: url(./images/header-bg.jpg) no-repeat center;
    background-size: cover;
}

.header-item {
    width: 70%;
    height: 372px;
    margin: auto;
    text-align: center;
    padding: 300px 0 200px;
}
.main-firstItem {
    width: 70%;
    margin: auto;
    padding: 150px 0;
}
.firstItem-three .item-one {
    width: 100%;
    height: 321px;
    text-align: center;

}

.firstItem-three .item-two {
    width: 100%;
    height: 321px;
    text-align: center;
}

.firstItem-three .item-three {
    width: 100%;
    height: 321px;
    text-align: center;
}
.firstItem-four {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.firstItem-four .item-one {
    width: 100%;
    height: 321px;
    text-align: center;

}

.firstItem-four .item-two {
    width: 100%;
    height: 321px;
    text-align: center;
}

.firstItem-four .item-three {
    width: 100%;
    height: 321px;
    text-align: center;
}
.main-secondItem {
    width: 70%;
    margin: auto;
    padding: 150px 0;
}
.secondItem-one {
    width: 100%;
    font-size: 40px;
    color: #222222;
    margin-bottom: 15px;
    text-align: center;
}

.secondItem-two {
    width: 100%;
    font-size: 16px;
    color: #41acef;
    margin-bottom: 15px;
    text-align: center;
    margin: 20px 0px 75px;
}
.secondItem-three .item-one {
    width: 100%;
    margin-bottom: 20px;
}
.secondItem-three .item-two {
    width: 100%;
    margin-bottom: 20px;
}
.secondItem-three .item-three {
    width: 100%;
    margin-bottom: 20px;
}
.secondItem-four .item-one {
    width: 100%;
    margin-bottom: 20px;
}

.secondItem-four .item-two {
    width: 100%;
    margin-bottom: 20px;
}
.secondItem-four .item-three {
    width: 100%;
    margin-bottom: 20px;
}
.main-thirdItem {
    width: 100%;
    background: url(./images/map-image.jpg) no-repeat center;
    background-size: cover;
}
.thirdItem-one {
    width: 70%;
}

.thirdItem-two {
    width: 70%;
}
.footer {
    padding: 0px;
    width: 100%;
}

.footer-firstItem {
    width: 100%;
}
.header-item h3 {
    font-size: 50px;
}
.header-item p {
    font-size: 30px;
}
.nav-item ul {
    display: none;
}
.secondItem-four .item-three .font p {
    font-size: 18px;
}
.secondItem-four .item-one .font {
    font-size: 18px;
} 
}
</style>