import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
    state: () => {
        return {
            article: {},
            subArticles: [],
            articles: [],
            hotContributors: [],
            viewType: 0
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        fetchArticles() {
            setTimeout(() => {
                this.articles.splice(this.articles.length, 0, ...[
                    {
                        id: 0, title: 'What is some basic knowledge that a scary amount of people do not know?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', content: `This is going to be a massive bitchy rant topic. If you don't like those, this isn't the place for you.
`, isHiden: true, comments: 100, rate: 1020
                    },
                    {
                        title: 'I want my gf to unfollow someone who wears a Nazi ring', contributor: { name: 'Marvel', avatar: '' }, createAt: '12/12/2023', content: `This is going to be a massive bitchy rant topic. If you don't like those, this isn't the place for you.

                    I HATE battle pass systems and I really wish people would stop paying money for that hot ass garbage doodoo water. I've had it with Overwatch 2 a few months ago and it made me stop playing the game. I'm having it with Street Fighter 6 right now where I'm not even spending any money on it, because it's always the same. It doesn't get any more anti-consumer than battle passes. It's shocking to me how much of an anti-customer business practice that is.
                    
                    Basically, you expect me to give you money on a monthly / tri-monthly basis and then
                    
                    1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
                    2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
                    3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
                    4) The grind is only as obscene as it is, because publishers (or more so devs, because they are the ones setting the numbers) want to keep the player engagement and investment high, show that to their investors and get additional money that way,`, isHiden: true, comments: 100, rate: 1020
                    },
                    {
                        id: 1, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: '' }, createAt: '12/12/2023', content: `This is going to be a massive bitchy rant topic. If you don't like those, this isn't the place for you.

                    I HATE battle pass systems and I really wish people would stop paying money for that hot ass garbage doodoo water. I've had it with Overwatch 2 a few months ago and it made me stop playing the game. I'm having it with Street Fighter 6 right now where I'm not even spending any money on it, because it's always the same. It doesn't get any more anti-consumer than battle passes. It's shocking to me how much of an anti-customer business practice that is.
                    
                    Basically, you expect me to give you money on a monthly / tri-monthly basis and then
                    
                    1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
                    2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
                    3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
                    4) The grind is only as obscene as it is, because publishers (or more so devs, because they are the ones setting the numbers) want to keep the player engagement and investment high, show that to their investors and get additional money that way, 
                    I HATE battle pass systems and I really wish people would stop paying money for that hot ass garbage doodoo water. I've had it with Overwatch 2 a few months ago and it made me stop playing the game. I'm having it with Street Fighter 6 right now where I'm not even spending any money on it, because it's always the same. It doesn't get any more anti-consumer than battle passes. It's shocking to me how much of an anti-customer business practice that is.
                    
                    Basically, you expect me to give you money on a monthly / tri-monthly basis and then
                    
                    1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
                    2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
                    3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
                    4) The grind is only as obscene as it is, because publishers (or more so devs, because they are the ones setting the numbers) want to keep the player engagement and investment high, show that to their investors and get additional money that way,`, isHiden: true, comments: 100, rate: 1020
                    }
                ])
            }, 3000);
        },
        fetchContributors() { },
        fetchArticle(articleId) {
            for (const article of this.articles) {
                if (article.id == articleId) {
                    this.article = JSON.parse(JSON.stringify(article))
                    return
                }
            }
            this.article = {
                id: 1, title: 'The dc commic films are so good?', contributor: { name: 'Mark zerebertd', avatar: '' }, createAt: '12/12/2023', content: `This is going to be a massive bitchy rant topic. If you don't like those, this isn't the place for you.

             I HATE battle pass systems and I really wish people would stop paying money for that hot ass garbage doodoo water. I've had it with Overwatch 2 a few months ago and it made me stop playing the game. I'm having it with Street Fighter 6 right now where I'm not even spending any money on it, because it's always the same. It doesn't get any more anti-consumer than battle passes. It's shocking to me how much of an anti-customer business practice that is.
             
             1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
             2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
             3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
             4) The grind is only as obscene as it is, because publishers (or more so devs, because they are the ones setting the numbers) want to keep the player engagement and investment high, show that to their investors and get additional money that way,
             1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
             2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
             3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
             4) The grind is only as obscen
             1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
             2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
             3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
             4) The grind is only as obscen
             1) I still have to invest countless hours into the grind in order to get the rewards I paid money for,
             2) Two thirds of the battle pass are filled with random garbage I have absolutely NO use for like voice lines, sprays or photo mode poses,
             3) If life gets in the way and I can't invest 50 hours into the battle pass, I don't get the rewards I paid for at all (like not even at the end),
             4) The grind is only as obscen`, isHiden: true, comments: 100, rate: 1020
            }
        },
        fetchSubArticles() {
            this.subArticles = [
                {
                    id: 0, title: 'What is some basic knowledge that a scary amount of people do not know?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: `We're two brothers making our first Steam game. It's like Gorogoa meets Monument Valley. Please search for 'Paper Trail' on Steam and wishlist if you like it! `, contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                },
                {
                    id: 0, title: 'The marvel films are so good?', contributor: { name: 'Marvel', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 100, rate: 1020
                },
                {
                    id: 1, title: 'DC commic is perfect choice afjldafjal jaldjf lajfldajfla falkdfjalk', contributor: { name: 'DC studio', avatar: 'https://styles.redditmedia.com/t5_4eeg41/styles/profileIcon_snoo8460fba9-9746-4794-8333-12daf4f03df1-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=22b939023fd586a770d041e080cd2a52a2ddb6b7' }, createAt: '12/12/2023', isHiden: true, comments: 120, rate: 2020
                }
            ]
        }
    },
})
