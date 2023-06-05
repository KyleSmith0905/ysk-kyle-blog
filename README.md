Hey GitHub users!\
I don't know how to best introduce my blog, so I have pasted the blog article that introduces my blog.

```
Greetings everyone, to my blog! I often wish I had a platform that I could talk about anything whenever I can. For example, I couldn't find any blogs that were *too good* that I could refer to when setting up an S3 storage bucket.
```

# The Start of YSK Kyle Blog 👋
Welcome everyone, to my blogging platform! I often wish I had a platform that I could monologue about anything.

For example:
- I couldn't find any blogs that were *too good* that I could refer to when setting up an **S3 storage bucket**. I would've loved to have a blog to document my process of assigning user access, setting bucket rules, etc.
- I am using a new stack to make this site, called [Sidebase](https://sidebase.io/). I would love to document my journey to share, or warn anyone of this new stack!
- I would love to bring up tech drama. I recently got into a Twitter argument _(which I shouldn't be participating in)_, where I argued that not using `rem` is an accessibility concern compared to `px`. Refer to the drama [here](https://twitter.com/KyleSmith0905/status/1659801623533690883).

## About The Design
I went with a mood colorful design due to some experimenting around with different styles. My decision to use this colorful design is irrelevant to pride month _(I always forget when it is, just discovered a few days ago, lol)_.

I hope to add comments to this site so readers can give feedback on things like the design.

### Site Snapshot
Here's an image of the site _(so I can cherish this forever ~~and test if images work~~)_.
![Hello](https://pub-0ec37b26b8774822908b3349fcb3cf85.r2.dev/meta-ysk-kyle-blog-start.webp)

## About The Development
As I mentioned, I started using a new stack to develop this site called [Sidebase](https://sidebase.io/). It is a "batteries included" stack meaning it made a ton of decisions for you _(and it did make some good decisions)_.

However, I had an error with the stack that should not be entirely my fault? Two things developed for the Sidebase app doesn't work when with each other? I'm 50% know for a fact I'm doing it wrong, yet 50% know for a fact that I'm doing it correct, lol. Sidebase's authentication breaks the typesafety of `$fetch` when I added it to the Sidebase default stack???

That Sidebase issue aside, this website is [opensource on GitHub](https://github.com/KyleSmith0905/ysk-kyle-blog). I will not be accepting pull requests since this platform is a representation of the development I am capable of. However, since I don't have a comment system, feel free to use issues to suggest changes. 👍

## Next Steps
I didn't spend much time designing this site, my lack of design consideration is because my blog will be with me and my name forever. I tend to come up with really creative graphics and webpages when given enough time. For instance, I integrated through so many designs with my portfolio site, [YSK Kyle]https://yskkyle.com).

1) Initially, I had a standard static page website made with Wordpress.
2) A few months later, I had the idea of floating circles with text on a white background.
3) Slowly over a few months I did small changes, such as adding some subtle lines to the white background to help orient the reader.
4) Later, inspired by Vercel's workflow page, I developed a space-themed background that shows stars and clouds shooting by as you navigate pages.
5) A few months after setting up the space-themed background, I received an accessibility concern form someone that they couldn't follow along with the text. I created a separate page focused on accessibility that the user can optionally enter.
6) After noticing performance issues relating to the three.js space-themed page being initialized when not used _(while still respecting that most users use my space-themed portfolio site, and loading it slower isn't a good idea either)_. I decided to spice things up by going back to white-background and implementing an infinite canvas design. Now the user can drag their mouse across the page to move _(instead of using the scroll wheel)_.
