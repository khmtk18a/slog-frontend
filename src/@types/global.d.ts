declare type Contributor = {
    name: string
    avatar: string
};

declare type Article = {
    id: number
    title: string
    content: string
    createAt: string
    contributor: Contributor
    isHidden: boolean
};
