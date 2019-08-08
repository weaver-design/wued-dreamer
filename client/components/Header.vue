<template>
  <div class="header header-homebg">
  <!-- 菜单部分 -->
  <div class="navBox">
    <div id="menunav_dark2">
      <!-- 搜索页面 -->
      <nav id="navbar" class="navbar navbar-default navbar-static-top" style="background-color: #000000;">
        <div class="container" style="position: relative;">
          <!-- nav btn -->
          <div class="navbar-header">
            <button id="button" type="button" class="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#navbarmore2" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/" style="z-index: 9999;">
              <img v-bind:src="logo" alt="logo"/>
            </a>
          </div>
          <div class="Mnavbarinfo">
            <div class="navbar_search">
              <a href="javascript:void(0);">
                <img v-bind:src="searchIcon" alt="searchIcon"/>
              </a>
            </div>
            <div class="navbarSignin navbar-Signin-btn2">
              <a href="#">
                登录
              </a>
            </div>
            <div class="navbar_register">
              <a href="#">
                注册
              </a>
            </div>
          </div>
          <div class="Mnavbarinfo" style="display:none;">
            <div class="navbar_search">
              <a href="javascript:void(0);">
                <img src="/images/icon_search2.png">
              </a>
            </div>
            <div class="navbar_news2">
              <a href="javascript:void(0);" target="_blank">
                <img src="/images/icon_news2.png">
              </a>
            </div>
            <div class="navbar_upload">
              <a href="/function/new/picture.html" target="_blank">
                <img src="/images/icon_upload2.png">
              </a>
            </div>
            <div class="navbar_userinfo">
              <a href="/user/newusers.html" target="_blank">
                <img src="/images/img_userhead_default.jpg">
              </a>
            </div>
          </div>
          <div id="navbarmore2" class="navbar-collapse collapse">
            <div class="menu-container">
              <div id="menu" class="menu">
                <ul class="nav navbar-nav">
                  <!-- class="dropdown" -->
                  <li>
                    <a href="javaScript:void(0);" _link="/" class="active">
                      发现
                    </a>
                    <div class="menudropdown">
                      <ul>
                        <li>
                          <a href="">作品</a>
                        </li>
                        <li>
                          <a href="">文章</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javaScript:void(0);" _link="/user/userlist.html">
                      设计师
                    </a>
                    <div class="menudropdown">
                      <ul>
                        <li>
                          <a href="">设计师</a>
                        </li>
                        <li>
                          <a href="">工作室</a>
                        </li>
                        <li>
                          <a href="">企业组织</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javaScript:void(0);" _link="/material/">
                      素材
                    </a>
                    <div class="menudropdown">
                      <ul>
                        <li>
                          <a href="">图片</a>
                        </li>
                        <li>
                          <a href="">字体</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javaScript:void(0);" _link="/sites/">
                      网站主题
                    </a>
                  </li>
                  <li>
                    <a href="javaScript:void(0);" _link="/Help/">
                      网址推荐
                    </a>
                  </li>
                  <li>
                    <a href="javaScript:void(0);">
                      ...
                    </a>
                    <div class="menudropdown">
                      <ul>
                        <li>
                          <a href="">帮帮忙</a>
                        </li>
                        <li>
                          <a href="">活动</a>
                        </li>
                        <li>
                          <a href="">职位</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--/.nav-collapse -->
        </div>
      </nav>
    </div>
  </div>
  <div class="banner">
    <div class="container">
      <div class="maininfo">
        <span class="maininfo-title-home">My · Dreamer</span>
        <span class="maininfo-text-home">一群爱做梦的人、一群不切实际的人。我们爱幻想，我们为改变这个世界而存在...</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import logo from '~/assets/images/logo2.png';
import searchIcon from '~/assets/images/icon_search2.png';

export default {
  data() {
    return {
      logo: logo,
      searchIcon: searchIcon
    }
  },
}
</script>

<style>

</style>

