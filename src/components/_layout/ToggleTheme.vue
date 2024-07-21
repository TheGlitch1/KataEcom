<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { useColorMode } from '@vueuse/core'
import type { Ref } from 'vue'

const vuetifyTheme = useTheme()
const themeMode = useColorMode() as Ref<'dark' | 'light'>

const toggleTheme = () => {
  themeMode.value = themeMode.value === 'dark' ? 'light' : 'dark'
  vuetifyTheme.global.name.value = themeMode.value
}
</script>

<template>
  <div :class="themeMode">
    <div class="switch-theme">
      <input
        id="switch-theme__input"
        :checked="themeMode === 'dark'"
        class="switch-theme__input"
        name="switch-theme__input"
        type="checkbox"
        @click.stop="toggleTheme"
      />
      <label class="switch-theme__label" for="switch-theme__input">
        <span class="switch-theme__icon">
          <svg class="moon" viewBox="0 0 32 32">
            <path
              d="M24.633,22.184c-8.188,0-14.82-6.637-14.82-14.82c0-2.695,0.773-5.188,2.031-7.363 C5.02,1.968,0,8.188,0,15.645C0,24.676,7.32,32,16.352,32c7.457,0,13.68-5.023,15.648-11.844 C29.82,21.41,27.328,22.184,24.633,22.184z"
            ></path>
          </svg>
          <svg class="sun" viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="139"></circle>
            <path
              d="m256 81.643c8.284 0 15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15s-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15z"
            ></path>
            <path
              d="m497 241h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
            ></path>
            <path
              d="m256 430.357c-8.284 0-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15s15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15z"
            ></path>
            <path
              d="m81.643 256c0-8.284-6.716-15-15-15h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15z"
            ></path>
            <path
              d="m389.896 137.104c3.839 0 7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.93 2.93 6.769 4.394 10.607 4.394z"
            ></path>
            <path
              d="m400.502 379.29c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l36.518 36.517c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.465 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z"
            ></path>
            <path
              d="m111.497 379.289-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.856-5.858-15.355-5.858-21.212 0z"
            ></path>
            <path
              d="m111.498 132.71c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-36.517-36.517c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z"
            ></path>
            <path
              d="m322.912 94.993c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.179-7.65-.445-16.429-8.095-19.608-7.649-3.178-16.428.444-19.608 8.095l-19.818 47.688c-3.178 7.651.446 16.43 8.095 19.609z"
            ></path>
            <path
              d="m484.303 334.636-47.688-19.818c-7.651-3.179-16.429.444-19.608 8.095-3.179 7.65.445 16.429 8.095 19.608l47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.649-.445-16.428-8.095-19.607z"
            ></path>
            <path
              d="m189.088 417.007c-7.651-3.178-16.429.444-19.608 8.095l-19.818 47.688c-3.179 7.65.445 16.429 8.095 19.608 1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.178-7.649-.446-16.428-8.095-19.607z"
            ></path>
            <path
              d="m27.697 177.364 47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.65-.445-16.429-8.095-19.608l-47.688-19.817c-7.65-3.177-16.429.445-19.608 8.095s.445 16.429 8.095 19.608z"
            ></path>
            <path
              d="m417.163 189.465c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139l47.734-19.707c7.657-3.161 11.303-11.931 8.142-19.589-3.162-7.658-11.934-11.302-19.589-8.141l-47.734 19.707c-7.658 3.162-11.303 11.932-8.142 19.589z"
            ></path>
            <path
              d="m342.124 425.304c-3.161-7.658-11.933-11.301-19.589-8.141-7.658 3.161-11.303 11.931-8.142 19.589l19.707 47.735c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.932 8.142-19.589z"
            ></path>
            <path
              d="m94.837 322.535c-3.161-7.657-11.929-11.304-19.589-8.141l-47.735 19.707c-7.657 3.161-11.303 11.931-8.142 19.589 2.389 5.785 7.978 9.28 13.871 9.28 1.906 0 3.846-.366 5.718-1.139l47.735-19.707c7.658-3.162 11.303-11.932 8.142-19.589z"
            ></path>
            <path
              d="m169.876 86.696c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.931 8.142-19.589l-19.707-47.735c-3.162-7.658-11.934-11.302-19.589-8.141-7.658 3.161-11.303 11.932-8.142 19.589z"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  </div>
</template>

<style scoped>
div.light {
  --bg: #ffc107;
  --light-bg: rgba(196, 240, 240, 0.3);
  --contrast-bg: #f4f4f4;
  --text: #1c3335;
  --contrast-text: #2895a0;
  --title: #1f7079;
  --contrast-title: #2895a0;
  --focus: rgba(196, 240, 240, 0.5);
  --link: #1f7079;
  --contrast-link: #2895a0;
  --focus-contrast-link: #1e6f77;
  --secondary-bg: #1f7079;
  --secondary-contrast-bg: rgba(28, 51, 53, 0.2);
  --contrast: #c4f0f0;
  --icon-opacity: 0.5;
  --table-odd: #f9f9f9;
  --search-placeholder: rgba(21, 28, 30, 0.4);
  --code-background: #f7f7f7;
  --code-base: #333;
  --code-comment: #969896;
  --code-string: #183691;
  --code-tag: #63a35c;
  --code-boolean: #0086b3;
  --code-selector: #795da3;
  --code-url: #a71d5d;
}

div.dark {
  --bg: #1a237e;
  --light-bg: rgba(31, 112, 121, 0.3);
  --contrast-bg: #151c1e;
  --text: #fff;
  --contrast-text: #f4f4f4;
  --title: #2fc1c1;
  --contrast-title: #c4f0f0;
  --focus: #1f7079;
  --link: #2fc1c1;
  --contrast-link: #c4f0f0;
  --focus-contrast-link: #9be6e6;
  --secondary-bg: #1c3335;
  --secondary-contrast-bg: rgba(31, 112, 121, 0.2);
  --contrast: #1f7079;
  --logo-bg: #c4f0f0;
  --icon-opacity: 1;
  --table-odd: #36393e;
  --search-placeholder: hsla(0, 0%, 100%, 0.5);
  --code-background: #202a2d;
  --code-base: #a9b7c6;
  --code-comment: grey;
  --code-string: #6a8759;
  --code-tag: #e8bf6a;
  --code-boolean: #6897bb;
  --code-selector: #cc7832;
  --code-url: #287bde;
}

.switch-theme {
  display: flex;
}

.switch-theme input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}

button,
input {
  overflow: visible;
}

.switch-theme .switch-theme__label {
  position: relative;
  display: block;
  width: 30px;
  height: 16px;
  border-radius: 20px;
  background: #dcdcdc;
  cursor: pointer;
}

.switch-theme .switch-theme__icon {
  box-shadow:
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  padding: 5px;
  border-radius: 50%;
  background: #717171;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: left 0.5s ease;
}

.switch-theme input[type='checkbox'] + label .switch-theme__icon {
  left: 0;
}

.switch-theme input:checked + label .switch-theme__icon {
  left: 100%;
}

.switch-theme .switch-theme__icon .moon,
.switch-theme .switch-theme__icon .sun {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 75%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
}

div.dark .switch-theme .switch-theme__icon .sun {
  transform: translate(-50%, -50%) scale(0) rotate(90deg);
}

div.light .switch-theme .switch-theme__icon .moon {
  transform: translate(-50%, -50%) scale(0) rotate(-90deg);
}

.switch-theme .switch-theme__icon .moon path,
.switch-theme .switch-theme__icon .sun circle,
.switch-theme .switch-theme__icon .sun path {
  fill: var(--bg);
}

svg:not(:root) {
  overflow: hidden;
}
</style>
