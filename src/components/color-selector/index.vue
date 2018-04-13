<template>
<div class="color-selector__ih5">
  <div
    :class="[
        'el-color-picker',
        colorDisabled ? 'is-disabled' : '',
        colorSize ? `el-color-picker--${ colorSize }` : ''
    ]"
    v-clickoutside="sureAndHide">
    <div class="colorselector-panel" :style="{'background-color': backgroundColor}">
      <ul class="colorselector-colors">
        <li class="selector-color selector-color-none"
            @click="pickColorNone">
          <i class="icons slash"></i>
          <div class="select-dot"
               v-show="color.value == null">
          </div>
        </li>
        <li class="selector-color"
            v-for="item in defaultColors" :key="item"
            :class="{'selector-color__white': item === '#FFFFFF'}"
            :style="{'background-color': item}"
            @click="pickColor(item)">
          <div class="select-dot"
               :class="{'select-dot--black': item === '#FFFFFF'}"
               v-show="item == color.value">
          </div>
        </li>
        <li class="selector-color selector-color-more"
            style="background-color: #000;"
            @click="handleTrigger"
        >
          <i class="icons colors"></i>
        </li>
      </ul>
    </div>
    <picker-dropdown
      ref="dropdown"
      :class="['el-color-picker__panel', 'ih5-color-dropdown__selector', popperClass || '']"
      :style="{'zoom': scale, 'background-color': backgroundColor}"
      v-model="showPicker"
      @pick="confirmValue"
      @clear="clearValue"
      :color="color"
      :show-alpha="showAlpha"
      :predefine="predefine">
    </picker-dropdown>
  </div>
</div>
</template>

<script>
import { ColorPicker } from "element-ui";

const defaultColors = [
    '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
    '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
    '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400',
    '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
    '#ec6db3', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
    '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E',
    '#C237FF',
];

export default {
    name: "colorSelector",
    extends: ColorPicker,
    props: {
      scale: Number,
      backgroundColor: String,
    },
    components: {

    },
    data() {
        return {
            defaultColors,
            showNone: false,

        };
    },
    computed: {

    },
    methods: {
        sureAndHide () {
            this.showPicker = false;
        },
        pickColor (item) {
            this.color.value = item;
            this.color.fromString(this.color.value);
            this.$emit('input', this.color.value);
            this.$emit('change', this.color.value);
        },
        clearValue () {
            this.$emit('input', null);
            this.$emit('change', null);
            this.showPanelColor = false;
            this.showPicker = false;
            this.resetColor();
            this.color.value = null;
        },
        pickColorNone () {
            this.clearValue();
        }

    },

};
</script>

<style lang='scss'>
@import './color-selector.scss';
</style>


