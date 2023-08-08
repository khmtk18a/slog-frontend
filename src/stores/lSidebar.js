import { defineStore } from 'pinia'

export const useLSidebarStore = defineStore('lSidebar', {
    state: () => {
        return {
            open: false,
            items: [],
            allTags: [
                { 'label': 'Tag 1', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 2', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 3', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 4', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 5', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 6', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 7', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 8', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 9', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 10', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 11', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' },
                { 'label': 'Tag 12', 'route': '/about', 'type': 'button', 'icon': 'pi-hashtag' }
            ],
            showTags: [
                { 'label': 'Tag 1', 'route': '/about', 'type': 'button', 'icon': 'hashtag' },
                { 'label': 'Tag 2', 'route': '/about', 'type': 'button', 'icon': 'hashtag' },
                { 'label': 'Tag 3', 'route': '/about', 'type': 'button', 'icon': 'hashtag' },
                { 'label': 'Tag 4', 'route': '/about', 'type': 'button', 'icon': 'hashtag' },
            ],
            tags: []
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        fetchTags() {
            this.items = [
                { 'label': 'Trang chủ', 'route': '/', 'type': 'button', 'icon': 'pi-home' },
                { 'label': 'Phổ biến nhất', 'route': '/popular', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'type': 'line' },
                { 'label': 'THỂ LOẠI', 'type': 'title' },
                ...this.showTags,
                { 'label': 'Xem Thêm', 'type': 'toggle', 'callback': this.fetchAllTags },
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
        fetchAllTags() {
            this.items = [
                { 'label': 'Trang chủ', 'route': '/', 'type': 'button', 'icon': 'pi-home' },
                { 'label': 'Phổ biến nhất', 'route': '/popular', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'type': 'line' },
                { 'label': 'THỂ LOẠI', 'type': 'title' },
                ...this.allTags,
                { 'label': 'Ẩn bớt', 'type': 'toggle', 'callback': this.fetchTags },
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

        fetchHomeViewItems() {
            this.items = [
                { 'label': 'Trang chủ', 'route': '/', 'type': 'button', 'icon': 'pi-home' },
                { 'label': 'Phổ biến nhất', 'route': '/popular', 'type': 'button', 'icon': 'pi-arrow-up-right' },
                { 'type': 'line' },
                { 'label': 'THỂ LOẠI', 'type': 'title' },

                { 'label': 'Xem thêm', 'type': 'toggle', 'callback': this.uploadToggle },
                { 'label': 'Ẩn bớt', 'type': 'toggle', 'callback': this.uploadToggle },

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
                { 'label': 'Tổng quan', 'route': '/sumary', 'type': 'button', 'icon': 'pi-desktop' },
                { 'type': 'line' },
                { 'label': 'Bài viết', 'type': 'title' },
                { 'label': 'Thêm bài viết', 'route': '/upload', 'type': 'button', 'icon': 'pi-plus' },
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
        },
        uploadToggle(action) {
            console.log(action)
        }

    },
})
