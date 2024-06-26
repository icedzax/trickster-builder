<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { ICharacter } from '../interfaces/character'
// useStore, and computed are automatically imported. See vite.config.ts for details.
const store = useStore()
const props = defineProps<{
  msg: string
  optionalProp?: number
}>()


const character = reactive<ICharacter>({
  characterName: 'Character Name',
  type: 'power',
  level: 1,
  grahp: {
    power: 4,
    magic: 1,
    sense: 1,
    charm: 4
  },
  class: 1,
  className: null,
  thirdClassType: null
})
defineExpose(props)
</script>

<template>
  <div>
    <pre>
      {{ character }}
    </pre>
  </div>
</template>
