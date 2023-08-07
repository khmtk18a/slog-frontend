import { defineStore } from 'pinia'

export const useLSidebarStore = defineStore('lSidebar', {
    state: () => {
        return {
            open: false,
            items: []
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        fetchHomeViewItems() {
            this.items = [
                { 'label': 'Trang chủ', 'route': '/', 'type': 'button', 'icon': 'pi-home' },
                { 'label': 'Phổ biến nhất', 'route': '/popular', 'type': 'button' },
                { 'type': 'line' },
                { 'label': 'THỂ LOẠI', 'type': 'title' },
                { 'label': 'Công nghệ thông tin', 'route': '/technology', 'type': 'button' },
                { 'label': 'Trò chơi', 'route': '/game', 'type': 'button' },
                {
                    'label': 'Công nghệ thông tin', 'child': [
                        { 'label': 'C++', 'route': 'cplus' },
                        { 'label': 'Python', 'route': 'python' },
                        { 'label': 'Javascript', 'route': 'javascript' }
                    ], 'type': 'menu', 'open': false
                },
                {
                    'label': 'Công nghệ thông tin', 'route': '/popular', 'child': [
                        { 'label': 'C++' },
                        { 'label': 'Python' },
                        { 'label': 'Javascript' }
                    ], 'type': 'menu', 'open': false, 'icon': 'pi-android'
                },
                { 'label': 'Phổ biến nhất', 'route': '/popular', 'child': [], 'type': 'line' },
                { 'label': 'RESOURCES', 'type': 'title' },
                { 'label': 'About me', 'route': '/about', 'type': 'button' }
            ]
        },

        fetchArticleViewItems() {
            this.fetchHomeViewItems()
        },
        fetchUploadViewItems() {
            this.items = [
                { 'label': 'Trang chủ', 'route': '/', 'type': 'button', 'icon': 'pi-home' },
                { 'label': 'RESOURCES', 'type': 'title' },
                { 'label': 'About me', 'route': '/about', 'type': 'button' }
            ]
        }

    },
})
