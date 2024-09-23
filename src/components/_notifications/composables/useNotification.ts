import { ref } from 'vue'

type NotificationType = 'success' | 'warning' | 'error' | 'info'

const isVisible = ref(false)
const message = ref('')
const type = ref<NotificationType>('info')

function showNotification(newMessage: string, notificationType: NotificationType = 'info') {
  message.value = newMessage
  type.value = notificationType
  isVisible.value = true

  setTimeout(() => {
    hideNotification()
  }, 3000)
}

function hideNotification() {
  isVisible.value = false
  message.value = ''
  type.value = 'info'
}

export default function useNotification() {
  return {
    isVisible,
    message,
    type,
    showNotification,
    hideNotification
  }
}
