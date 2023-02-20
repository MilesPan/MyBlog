<template>
  <div class="blog pb-10">
    <Navigation></Navigation>
    <canvas class="m-0 p-0 absolute bg-slate-600 -z-50" id="cvs"></canvas>
    <main
      class="front bg-stone-300 md:shadow-md md:mt-5 m-auto md:w-[1000px] p-5 md:rounded-md"
    >
      <router-view v-if="$route.path === '/category/manage'"></router-view>
      <template v-else>
        <CategoryBar></CategoryBar>
        <router-view></router-view>
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
// let { clientWidth: width, clientHeight: height } = document.documentElement;
let width = ref(document.documentElement.clientWidth);
let height = ref(document.documentElement.clientHeight);
onMounted(() => {
  const cvs = document.getElementById("cvs") as HTMLCanvasElement;
  const ctx = cvs?.getContext("2d")!;

  cvs.width = width.value - 5;
  cvs.height = height.value;
  ctx.fillStyle = "#fff";
  let bgColors = Array.from(new Array(400)).map(() => {
    return {
      x: Math.random() * width.value - 5,
      y: Math.random() * height.value,
      step: Math.random() * 2 + 0.2,
    };
  });
  const render = () => {
    ctx.clearRect(0, 0, width.value, height.value);
    ctx.beginPath();
    if (cvs.width > document.documentElement.clientWidth) {
      width.value = document.documentElement.clientWidth;
      cvs.width = width.value - 5;
    }
    if (cvs.height !== document.documentElement.offsetHeight) {
      height.value =
        document.documentElement.offsetHeight <
        document.documentElement.clientHeight
          ? document.documentElement.clientHeight
          : document.documentElement.offsetHeight;
      cvs.height = height.value;
    }
    ctx.fillStyle = "#fff";
    bgColors.forEach((v) => {
      v.y = v.y > height.value ? 0 : v.y + v.step;
      ctx.rect(v.x, v.y, 3, 3);
    });
    ctx.fill();
    requestAnimationFrame(render);
  };
  render();
  window.onresize = _.debounce(() => {
    return (() => {
      width.value = document.documentElement.clientWidth;
      height.value = document.documentElement.clientHeight;
      cvs.width = width.value - 5;
      cvs.height = height.value;
      ctx.fillStyle = "#fff";
      bgColors = Array.from(new Array(400)).map(() => {
        return {
          x: Math.random() * width.value - 2,
          y: Math.random() * height.value,
          step: Math.random() * 2 + 0.2,
        };
      });
    })();
  }, 500);
});
</script>
<style scoped lang="scss"></style>
