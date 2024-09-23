<template>
  <v-container fluid>
    <v-row class="bg-screen2 rounded">
      <v-col cols="12">
        <v-card class="pa-10" variant="text">
          <v-card-title class="text-h5 text-center"> </v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-card-text class="bg-primary2 border rounded-lg d-flex flex-column fill-height">
                <h2 class="font-weight-bold text-center mb-7">{{ summaryText.title }}</h2>
                <p
                  v-for="(text, index) in summaryText.description"
                  :key="index"
                  class="text-justify px-5"
                >
                  <v-icon
                    class="custom-bg-icon"
                    icon="mdi-format-quote-close"
                    color="white"
                  ></v-icon>
                  {{ text }}
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <v-card-text
                class="bg-primary2 border rounded-lg d-flex flex-column fill-height px-5"
              >
                <h2 class="font-weight-bold mb-4">Key highlights include:</h2>

                <v-chip
                  v-for="(highlight, index) in summaryText.highlights"
                  :key="index"
                  class="ma-1 text-justify"
                  :prepend-icon="highlight.icon"
                  variant="elevated"
                  color="screen2"
                  :style="{ animationDelay: `${index + 1 * 0.5}s` }"
                  @click.stop=""
                >
                  {{ highlight.text }}
                </v-chip>
              </v-card-text>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <strong>{{ summaryText.lastWord }}</strong>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <template v-for="link in links">
                <v-btn
                  class="mx-2 my-1"
                  variant="tonal"
                  color="plink"
                  :icon="link.icon"
                  size="small"
                  :href="link.url"
                  target="_blank"
                  v-tooltip="`Visit my ${link.title}`"
                >
                </v-btn>
              </template>
            </v-col>
            <v-col cols="12" class="d-flex justify-center align-center flex-column mt-10">
              <v-icon size="30" color="dark" class="scroll-icon scroll"> mdi-mouse </v-icon>
              <p class="text-xs font-weight-black scroll">Scroll</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { summaryText } from '@project/constants/Summary'
import { links } from '@project/constants/links'
</script>
<style scoped>
@keyframes shine {
  0%,
  100% {
    opacity: 1;
    box-shadow: none;
  }
  50% {
    opacity: 0.1;
    box-shadow:
      0 0 12px rgb(255, 255, 255),
      0 0 20px rgb(255, 255, 255);
  }
}

@keyframes scrollMouse {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }
}

.v-chip {
  animation: shine 0.4s ease-in-out 2;
  animation-fill-mode: forwards;
}

.scroll {
  opacity: 0.8;
  animation: scrollMouse 2.5s ease-in-out infinite;
}

.custom-bg-icon {
  position: absolute;
  top: 110px;
  left: 120px;
  transform: translate(-50%, -50%);
  font-size: 200px;
  opacity: 0.1;
  z-index: 0;
}
</style>
