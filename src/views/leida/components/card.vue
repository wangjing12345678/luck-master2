<template>
  <div class="main-card">
    <section>
      <div :data-before="oVal" :data-after="nVal" class="card"></div>
      <div :data-before="oVal" :data-after="nVal" class="card card-second" :class="{ fanzhuan: flag }" ref="needFanzhuan"></div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: [String, Number],
    },
  },
  data() {
    return {
      flag: false,
      nVal: "",
      oVal: "",
    };
  },
  watch: {
    num: {
      handler(nVal, oVal) {
        this.nVal = nVal;
        this.oVal = oVal;
        if (oVal === undefined) {
          this.nVal = nVal;
          this.oVal = nVal;
        } else {
          this.flag = true;
          setTimeout(() => {
            this.oVal = this.nVal;
            this.flag = false;
          }, 500);
        }
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../css/card.scss";
$width: 80px;
$height: 140px;
.main-card {
  width: $width;
  position: relative;
  margin-right: 10px;
}
section {
  width: $width;
  height: $height;
}
.card {
  position: absolute;
  width: $width;
  height: $height;
  //   overflow: hidden;

  &::before,
  &::after {
    // content: "2";
    display: block;
    color: #fff;
    background: $background;
    width: $width;
    height: $height/2;
    border-radius: 12px;
    font: bold $height/2 * 1.5 arial;
    text-align: center;
    overflow: hidden;
  }
  &::before {
    line-height: $height;

    content: attr(data-after);
  }
  &::after {
    content: attr(data-before);
    line-height: 0;
  }
}
.card-second {
  width: $width;
  height: $height/2;
  transform-style: preserve-3d;
  //   backface-visibility: hidden;
  transform-origin: bottom;

  &::before {
    transform: rotateX(180deg);
    backface-visibility: hidden;

    line-height: 0;
  }
  &::after {
    backface-visibility: hidden;

    transform: translateY(-100%);
    line-height: $height;
  }
}
section {
  perspective: 200px;
}
.card-second.fanzhuan {
  transition: 0.5s;

  transform: rotateX(-180deg);
}
</style>
