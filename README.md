### Deployment  

Deployment status  
[![Netlify Status](https://api.netlify.com/api/v1/badges/e398b4ca-4c59-4364-93f0-404a1c863a0a/deploy-status)](https://app.netlify.com/sites/guestready-guides/deploys)

- If deployment fails, try to build the project locally, you should get better error messages this way.
- This project is deployed to http://guestready-guides.netlify.com

### Running the project locally
```
git clone https://github.com/guestready/guide-website.git
cd guide-website
yarn
yarn start
```

### Gatsby
- This project uses [Gatsby](https://www.gatsbyjs.org/docs/)

### Admin
- Access the admin panel at `http://localhost:8000/admin`
- The admin panel is from [Netlify CMS](https://www.netlifycms.org/docs/intro/)

> (TODO: add more info about configuration & CMS)

### Styling
- All styles are in https://github.com/guestready/guide-website/blob/master/src/index.scss
- Styling is mobile-first, then overridden at breakpoints `480px`, `720px` and `1080px`
- Mixins exist for text (sizes `s`, `m`, `l` and `xl`), and headings (sizes `s`, `m` and `l`), use them as follows:
```scss
.my-text {
  @include text(s);
}

// evaluates to
.my-text {
  font-size: 1.2rem,
  line-height: 1.6rem,
  letter-spacing: 0.02rem,
}
```
