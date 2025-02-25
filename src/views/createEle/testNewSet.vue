<template></template>

<script>
export default {
  created() {
    const setb = new Set([1,2,3,3,4]);
    console.log([...setb])

    // [{ a: 1 }, { a: 1 }, { b: 1 }]
    const setA = new Map();
    setA.set("a", 1);
    setA.set("a", 2);
    console.log({...setA});
  },
};
</script>

<style></style>
