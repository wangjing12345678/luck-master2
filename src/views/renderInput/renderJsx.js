export default {
  props: {
    value: {},
  },
  data() {
    return {
      arr: [
        {
          name: "ll",
          id: 1,
        },
        {
          name: "pp",
          id: 2,
        },
      ],
    };
  },
  methods:{
    hhh(){
      this.render()
    }
  },
  render(h) {
    return (
      <div>
        {this.arr.map((column) => (
          <span on-click={this.hhh}>{column.name}</span>
        ))}
      </div>
    );
  },
};
