<template>
  <Sidebar/>
  <div class="about">
    <h1 class="container-center">This is an about page with sth</h1>
  </div>
</template>
<script>
import MasterView from "@/App";
import Sidebar from "@/components/Sidebar";
export default {
  components: {Sidebar, MasterView}
}
</script>

<!--<style>-->
<!--.vertical-center {-->
<!--display: flex;-->
<!--align-items: center;-->
<!--}-->
<!--</style>-->

<style>
/*.cetner-element{*/
/*  display: flex;*/
/*  align-items: center;*/
/*}*/

.container-center {
  /*display: flex;*/
  justify-content: center;
  align-items: center;
}

</style>
