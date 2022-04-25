file="./serve/serve.vue"
if [ ! -e "$file" ]; then
    touch "$file"
    cat >"$file" <<EOL
<script>
  export default {
    name: 'ServeDev',
    data() {
      return {}
    }
  }
</script>
<template>
  <div id="app"></div>
</template>
EOL
fi