<template>
  <header class="app-header">
    <div class="header-container">
      <a class="home-link" href="/">
        <img class="logo" :src="images.logo" />
        <span>Lowell</span>
      </a>
      <ul class="right-list">
        <li class="list-item" v-for="(item, index) in links" :key="index">
          <router-link class="item-link" :class="{ 'active': current === item.link }" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
      <img class="menu" :src="images.menu" @click="toggleMenu()" />
    </div>
    <div class="menu-mask" :class="{ 'open': opened }">
      <ul class="menu-list">
        <li class="menu-item" v-for="(item, index) in links" :key="index">
          <a @click="toRouter(item.link)" class="menu-link" :class="{ 'mobile-active': current === item.link }">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/images/logo.png'
import menu from '@/assets/images/menu.png'

export default {
  name: 'header',
  props: {
    current: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      images: {
        logo,
        menu
      },
      links: [
        { name: 'News', link: '/' },
        { name: 'Tags', link: '/tags' },
        { name: 'Archives', link: '/archives' },
        { name: 'About', link: '/about' }
      ],
      opened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened
    },
    toRouter(to) {
      this.$router.push(to)
      if (this.opened) {
        this.toggleMenu()
      }
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
  z-index: 200;
}
.header-container {
  max-width: 1200px;
  height: 40px;
  margin: 0 auto;
  padding: 10px 60px;
  position: relative;
}
.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.home-link {
  display: flex;
  align-items: center;
  float: left;
  font-weight: 600;
}
.right-list {
  list-style: none;
  float: right;
  padding: 0;
}
.list-item {
  display: inline-block;
  margin: 0 8px;
}
.item-link {
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  color: #34495e;
  padding-bottom: 3px;
}
.item-link:hover {
  border-bottom: 3px solid #42b983;
}
.active {
  border-bottom: 3px solid #42b983;
}
.menu {
  display: none;
  float: right;
  width: 24px;
  height: 24px;
  margin-top: 8px;
}
.menu-mask {
  display: none;
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 99;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  background: #ffffff;
  -webkit-transition: max-height .4s ease;
  transition: max-height .4s ease;
}
.open {
  max-height: 300px;
  transition-delay: 0s;
}
.menu-list {
  padding: 0;
}
.menu-item {
  position: relative;
  list-style: none;
  text-align: center;
  padding: 10px 0;
}
.menu-item:after {
  content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	border-bottom: 1px solid #e5e5e5;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}
.menu-link {
  text-decoration: none;
  color: #34495e;
}
.mobile-active {
  color: #42b983;
}
@media screen and (max-width: 480px) {
  .header-container {
    padding: 10px 20px;
    position: relative;
  }
  .right-list {
    display: none;
  }
  .menu-mask {
    display: block;
  }
  .menu {
    display: block;
  }
}
</style>
