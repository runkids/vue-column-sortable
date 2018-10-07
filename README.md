# vue-column-sortable
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![npm](https://img.shields.io/npm/v/vue-column-sortable.svg)](https://www.npmjs.com/package/vue-column-sortable) 

vue-column-sortable is an data sortable directive for vue.js.

### Demo
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jvj47rxz33?module=%2Fsrc%2FApp.vue)

### Install

- In ES2015
  ```Bash
  npm install vue-column-sortable --save
  ```
  ```JavaScript
  //globally
  import columnSortable from 'vue-column-sortable'
  Vue.use(columnSortable)

  //for a single instance
  import columnSortable from 'vue-column-sortable'
  new Vue({
    directives: {columnSortable}
  })
  ```

- Direct include

  ```html
    <script src="https://cdn.jsdelivr.net/npm/vue-column-sortable@0.0.1/dist/vue-column-sortable.js"></script>
  ```

### Usage

- Step 1
  - Use v-column-sortable:{ data key } in HTML
  ```html
    <table>
      <thead>
        <th v-column-sortable:name>Name</th>
        <th v-column-sortable:age>Age</th>
        .
        .
      </thead>
    </table>
  ```
- Step 2
  - copy method: orderBy

  ```javascript
    new Vue({
      el: '#app',
      data: {
        userArray: [
          { name: 'John', age: 20 },
          { name: 'Peter', age: 22 },
        ]
      },
      directives: {columnSortable},
      methods:{
        orderBy(sortFn) {
          // sort your array data like this.userArray
          this.userArray.sort(sortFn);
        },
      }
    })
  ```
  #### Options

  ###### showIcon
  Default `true`
  Show sort icon with `fortawesome` svg

  ```javascript
  Vue.use(columnSortable, {
    showIcon: false,
  });
  ```

### Code Example

<img src="https://github.com/runkids/vue-column-sortable/blob/master/demo/column-sortable.gif?raw=true"/>

```html
<template>
  <div class="about">
    <table border="1">
      <thead>
        <th>#</th>
        <th v-column-sortable:name>Name</th>
        <th v-column-sortable:birthday>Date of Birth</th>
        <th v-column-sortable:point>Point</th>
        <th v-column-sortable:address.country>Country</th>
        <th v-column-sortable:address.city>City</th>
      </thead>
      <tbody>
        <tr v-for="(d,index) in dataArray" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ d.name }}</td>
          <td>{{ d.birthday }}</td>
          <td>{{ d.point }}</td>
          <td>{{ d.address.country }}</td>
          <td>{{ d.address.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```
```javascript
<script>
import columnSortable from 'vue-column-sortable'

export default {
  data() {
    return {
      dataArray: [
        {
          name: 'Jimmy Rutherford',
          birthday: '1945-5-6',
          point: 100,
          address: {
            country: 'United States of America',
            city: 'South Ryann',
          },
        },
        {
          name: 'Camila Gutmann',
          birthday: '1950-11-16',
          point: 230,
          address: {
            country: 'Taiwan',
            city: 'Lake Destinview',
          },
        },
      ],
    };
  },
  methods: {
    orderBy(fn) {
      this.dataArray.sort(fn);
    },
  },
  directives: {
    columnSortable,
  },
};
</script>
```

### License

MIT