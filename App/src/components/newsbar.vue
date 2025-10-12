<template>
  <section class="news-bar" aria-label="新闻滚动条">
    <router-view></router-view>
    <div
      ref="wrap"
      class="news-bar__wrap"
      @mouseenter="pause"
      @mouseleave="resume"
    >
      <ul ref="list" class="news-bar__list" :style="listStyle">
        <li
          v-for="(item, idx) in data"
          :key="item.id ?? idx"
          class="news-bar__item"
        >
          <span v-if="item.tag" class="news-bar__tag">{{ item.tag }}</span>
          <a
            v-if="item.link"
            class="news-bar__link"
            :href="item.link"
            target="_blank"
            rel="noopener"
            @click="$emit('click', item)"
          >
            {{ item.title }}
          </a>
          <span v-else class="news-bar__text">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export interface NewsItem {
  id?: string | number
  title: string
  link?: string
  tag?: string
}

const props = withDefaults(defineProps<{
  data: NewsItem[]
  speed?: number          // 动画速度，像素/秒
  hoverPause?: boolean    // 鼠标悬停暂停
  delay?: number          // 开始滚动前的延迟（ms）
}>(), {
  speed: 50,
  hoverPause: true,
  delay: 1000
})

const emit = defineEmits<{
  click: [item: NewsItem]
}>()

const wrap = ref<HTMLDivElement>()
const list = ref<HTMLUListElement>()
const listWidth = ref(0)
const wrapWidth = ref(0)
const offset = ref(0)
let timer = 0
let reqId = 0
let startTime = 0
let paused = false

const needScroll = computed(() => listWidth.value > wrapWidth.value)

const listStyle = computed(() => ({
  transform: `translateX(${-offset.value}px)`,
  whiteSpace: 'nowrap'
}))

function measure() {
  if (!wrap.value || !list.value) return
  wrapWidth.value = wrap.value.offsetWidth
  listWidth.value = list.value.scrollWidth
}

function step() {
  if (!needScroll.value || paused) return
  const now = performance.now()
  const elapsed = now - startTime
  offset.value = (props.speed * elapsed / 1000) % (listWidth.value + wrapWidth.value)
  reqId = requestAnimationFrame(step)
}

function start() {
  if (!needScroll.value) return
  startTime = performance.now()
  reqId = requestAnimationFrame(step)
}

function pause() {
  if (!props.hoverPause) return
  paused = true
  cancelAnimationFrame(reqId)
}

function resume() {
  if (!props.hoverPause) return
  paused = false
  start()
}

function reset() {
  cancelAnimationFrame(reqId)
  offset.value = 0
  nextTick(() => {
    measure()
    setTimeout(start, props.delay)
  })
}

watch(() => props.data, reset, { deep: true })

onMounted(() => {
  measure()
  reset()
  window.addEventListener('resize', measure)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(reqId)
  window.removeEventListener('resize', measure)
})
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.news-bar {
  width: 100%;
  height: 40px;
  background: #fff3e0;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 14px;
  color: #333;
}

.news-bar__wrap {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.news-bar__list {
  display: inline-block;
  will-change: transform;
}

.news-bar__item {
  display: inline-block;
  margin-right: 48px;
  line-height: 40px;
}

.news-bar__tag {
  display: inline-block;
  padding: 2px 6px;
  margin-right: 6px;
  background: #ff9800;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
}

.news-bar__link,
.news-bar__text {
  color: #333;
  text-decoration: none;
}

.news-bar__link:hover {
  color: #ff5722;
  text-decoration: underline;
}
</style>