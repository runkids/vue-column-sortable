import { icon } from "@fortawesome/fontawesome-svg-core";
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

let callBackSortClass;
let defaultOptions = {
  showIcon: true
}

const initialElementStyle = function (parent) {
  if(defaultOptions.showIcon) parent.appendChild(icon(faSort).node[0]);
  parent.style.cursor = 'pointer';
  parent.classList.add('v-sortable');
};

const getValueByPath = function (object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

const changeSortClass = function (sortKey, vnode, data) {
  let addIcon;
  const childrenClass = this.children[0].getAttribute('class');

  Array.from(document.querySelectorAll('.v-sortable > svg:not(.fa-sort)')).forEach(ele=>{
    const parentNode = ele.parentNode
    if(parentNode!=this){
      parentNode.removeChild(ele);
      parentNode.appendChild(icon(faSort).node[0]);
    }
  })

  if(defaultOptions.showIcon){
    if (!!childrenClass.match('fa-sort')){
      addIcon = icon(faSortUp).node[0]
    }
    if (!!childrenClass.match('fa-sort-up')) {
      addIcon = icon(faSortDown).node[0]
    } 
    if (!!childrenClass.match('fa-sort-down')) {
      addIcon = icon(faSort).node[0]
    } 
    this.removeChild(this.children[0])
    this.appendChild(addIcon);
  }

  vnode.context.orderBy((a, b) => {
    const [keyA, keyB] = [getValueByPath(a, sortKey), getValueByPath(b, sortKey)];
    return (Object(keyA) > Object(keyB))
      ?  !!childrenClass.match('fa-sort-up') ? 1 : -1
      : (
        (Object(keyB) > Object(keyA))
          ?  !!childrenClass.match('fa-sort-down') ? -1 : 1
          : 0
      );
  });
};

export function setOptions(options){
  defaultOptions = Object.assign({}, defaultOptions, options)
}

export default {
  bind(el, binding, vnode) {
    initialElementStyle(el);
    vnode.context.$nextTick(()=>{
      const modifiers = Object.keys(binding.modifiers).join('.');
      const sortKey = binding.arg + (modifiers ? `.${modifiers}` : '');
      callBackSortClass = changeSortClass.bind(el, sortKey, vnode, binding.value);
      el.addEventListener('click', callBackSortClass);
    })
  },
  unbind(el) {
    el.removeEventListener('click', callBackSortClass);
  },
};
