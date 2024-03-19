import { defineStore } from "pinia";

const useAppStore = defineStore('app', {
    state () {
        return {
            language: navigator.language,
        }
    },
    actions: {
        setLanguage (value) {
            this.language = value
        }
    }
})
export default useAppStore;