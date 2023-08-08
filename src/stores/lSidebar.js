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
                { 'label': 'Phổ biến nhất', 'route': '/popular', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'type': 'line' },
                { 'label': 'THỂ LOẠI', 'type': 'title' },
                { 'label': 'Chưa cập nhật', 'route': '/technology', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Chưa cập nhật', 'route': '/game', 'type': 'button', 'icon': 'pi-hashtag' },
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
                { 'label': 'Tổng quan', 'route': '/popular', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'type': 'line' },
                { 'label': 'Bài viết', 'type': 'title' },
                { 'label': 'Tổng quan', 'route': '/sumary', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'label': 'Thêm bài viết', 'route': '/upload', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'label': 'RESOURCES', 'type': 'title' },
                { 'label': 'About me', 'route': '/about', 'type': 'button' }
            ]
        },
        fetchSumaryView() {
            this.items = [
                { 'label': 'Trang chủ', 'route': '/', 'type': 'button', 'icon': 'pi-home' },
                { 'label': 'Tổng quan', 'route': '/sumary', 'type': 'button', 'icon': 'pi-desktop' },
                { 'type': 'line' },
                { 'label': 'Bài viết', 'type': 'title' },
                { 'label': 'Thêm bài viết', 'route': '/upload', 'type': 'button', 'icon': 'pi-plus' },
                { 'label': 'RESOURCES', 'type': 'title' },
                { 'label': 'About me', 'route': '/about', 'type': 'button' }
            ]
        }

    },
})
