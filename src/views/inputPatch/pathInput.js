



import { Input } from "element-ui";
const InputPatched = {
  extends: Input,
  data() {
    return {
      resetMaxLength: 0,
    };
  },
  mounted() {
    if (this.$attrs.maxlength) {
      this.resetMaxLength = this.$attrs.maxlength;
      return;
    }
    setTimeout(() => {
      console.log(this);
      if (this._props.type == "textarea") {
        if (this.$refs.textarea) {
          this.$refs.textarea.setAttribute("maxlength", 30);
          this.resetMaxLength = 30;
        }
      } else {
        if (this.$refs.input) {
          this.$refs.input.setAttribute("maxlength", 20);
          this.resetMaxLength = 20;
        }
      }
    }, 3000);
  },
  computed: {
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.resetMaxLength &&
        (this.type === "text" || this.type === "textarea") &&
        !this.inputDisabled &&
        !this.readonly &&
        !this.showPassword
      );
    },
    upperLimit() {
      return this.resetMaxLength;
    },
  },
  destroyed() {},
  methods: {},
};

export default {
  install(Vue) {
    Vue.component(Input.name, InputPatched);
  },
};
