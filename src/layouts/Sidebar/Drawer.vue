<template>
  <!-- <a-drawer
    placement="left"
    id="sidebar-wrap"
    :closable="false"
    :visible="drawerVisible"
    :z-index="98"
    :width="width"
    :body-style="{ paddingTop: '60px', paddingLeft: 0, paddingRight: 0, paddingBottom: 0, height: '100%' }"
    @close="handleClose">
    <products-list @route-change="handleClose" :active-menu="activeMenu" :popover-align="{ offset: [5, 5] }" />
  </a-drawer> -->
  <div>
    <div id="sidebar-wrap" class="fixed-sidebar" :class="{ 'w-0': !l2MenuVisibleForStore }">
      <products-list :active-menu="activeMenu" :popover-align="{ offset: [5, 5] }" />
    </div>
  </div>
</template>

<script>
// import get from 'lodash/get'
// import { mapGetters } from 'vuex'
import ProductsList from '@/sections/ProductsList'

export default {
  name: 'Sidebar',
  components: {
    ProductsList,
  },
  props: {
    activeMenu: Object,
  },
  // computed: {
  //   l2MenuVisibleForStore () {
  //     return this.$store.state.setting.l2MenuVisible
  //   },
  // },
  // data () {
  //   return {
  //     width: 200,
  //   }
  // },
  // computed: {
  //   ...mapGetters(['common']),
  //   sidebar () {
  //     return this.common.sidebar
  //   },
  //   drawerVisible () {
  //     return get(this.common, 'sidebar.drawerVisible', false)
  //   },
  // },
  // methods: {
  //   handleClose () {
  //     this.$store.dispatch('common/updateObject', {
  //       name: 'sidebar',
  //       data: {
  //         drawerVisible: false,
  //       },
  //     })
  //   },
  // },
}
</script>
<style scoped>
.fixed-sidebar {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 200px;
  height: 100vh;
  z-index: 1000;
  background: #fff;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.1);
  /* &.w-0 {
      width: 0;
    } */
}
</style>
