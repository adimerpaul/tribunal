import { ref, type Ref } from 'vue'

export function useHandleService<T>(serviceParam: () => Promise<T>, initialValue: T) {
  const isLoading = ref(false)
  const response = ref(initialValue) as Ref<T>
  const executeService = async () => {
    isLoading.value = true
    const responseLocal = await serviceParam()
    response.value = responseLocal
    isLoading.value = false
  }

  return { isLoading, executeService, response }
}
