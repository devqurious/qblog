---
title: "Hosting this blog"
date: 2021-03-05T08:10:51+05:30
thumb_image: "/images/pi/UnboxingPi.jpg"
omit_header_text: true
draft: false
tags: ["hugo", "netrlify"]
categories: ["Etc"]
---

This is a static blog using Hugo and hosted on Netlify. Hugo and Netlify work great together. To create your own site like this, follow these steps. 

## Build the static website. 

The ananke theme is *fine*.

```
hugo new site my_blog
cd my_blog
git init
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
```

## Check your git

Test your [github connection](https://docs.github.com/en/github/authenticating-to-github/testing-your-ssh-connection) and if its not setup correctly, upload your SSH key to your account.

## Create a new repo in github

Click the New Repository button and give it a nice name. Then follow the instructions to add your hugo site code into this repo.

## Deploy on Netlify

Follow [this guide](https://gohugo.io/hosting-and-deployment/hosting-on-netlify) to now deploy the hugo site to Netlify. Once this is done, everytime you `git push` your code to github, Netlify will automatically pull the latest content and publish it on its servers. Very smooth. 

The important bit is to add a new `netlify.toml` file with the following contents:

```
[build]
publish = "public"
command = "hugo --gc --minify"

[context.production.environment]
HUGO_VERSION = "0.75.1"
HUGO_ENV = "production"
HUGO_ENABLEGITINFO = "true"

[context.split1]
command = "hugo --gc --minify --enableGitInfo"

[context.split1.environment]
HUGO_VERSION = "0.75.1"
HUGO_ENV = "production"

[context.deploy-preview]
command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

[context.deploy-preview.environment]
HUGO_VERSION = "0.75.1"

[context.branch-deploy]
command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"

[context.branch-deploy.environment]
HUGO_VERSION = "0.75.1"

[context.next.environment]
HUGO_ENABLEGITINFO = "true"
```

Push the changes, and confirm that the site builds fine on Netlify. The first publish might fail, but the second one should pass...

![](/images/etc/netlify.png)

Edit the sitename to something better...like golfstories.netlify.app.

## Customize the theme

Create some basic structure into the site. Edit the config.toml.

```
[taxonomies]
    tag = "tags"
    category = "categories"

[menu]

  [[menu.main]]
    identifier = "Home"
    name = "Home"
    pre = "<i class='fa fa-heart'></i>"
    url = "/"
    weight = -30

  [[menu.main]]
    name = "Menu1"
    post = "<span class='alert'>New!</span>"
    pre = "<i class='fa fa-road'></i>"
    url = "/categories/homecloud/"
    weight = -10

  [[menu.main]]
    name = "Menu2"
    post = "<span class='alert'>New!</span>"
    pre = "<i class='fa fa-road'></i>"
    url = "/categories/comics/"
    weight = -10
  
  [[menu.main]]
    identifier = "about"
    name = "About"
    pre = "<i class='fa fa-heart'></i>"
    url = "/corner/"
    weight = -1
```

Slowly, your site is taking shape.

![](/images/etc/blog.png)

## Setup your CMS

Obviously, if you are a developer, then you don't need this - your git workflow is fine, and you can publish straight from your IDE. But say you want to publish from some other machine which does not have your git environment. Or, if you want your friend to co-blog with you, and he's not the tech kind. Then you need a CMS, and [Netlify has that covered](https://www.netlifycms.org/docs/add-to-your-site/).


Add `static/admin/index.html` and `static/admin/config.yml` with the appropriate content.

Enable the "Identity" Setting for your site in the Netlify dashboard. And Enable Git Gateway. When you're done with this, deploy again and then open up /admin (for example, )

## Go back and customize your Ananke theme

Set the [site logo](https://github.com/theNewDynamic/gohugo-theme-ananke) which is used in the page-header.html | site-navigation.html partials.

```
[params]
site_logo = "/images/logo.png"
```



