---
title: FAQS
---

::: details What roles does the system have and what can they do?
- 超级管理员：Manages all resources in the system platform, <b>but not allowed to delete itself. </b>
- 平台管理员：Manages most resources in the system platform, <b>but does not allow deleting users. </b>
- 平台运维员：Manage the operation and maintenance resources in the platform, and view most of the resources in the system platform.
- 平台观察员：View all <b>non-confidential</b> resources in the system platform.
- 游客：View all <b>non-confidential</b> resources in the system platform except the background.
:::

::: details Why can't the super administrator delete it?
The super administrator is the highest authority user of the system. If you allow yourself to be deleted, it will <b>make the system unmanageable. </b> At the same time, we have also intercepted and judged at the back end. 
If you directly operate the database, then you are happy!
:::

::: details What are the deployment methods?
It is currently planned to adopt containerized deployment, and it is a front-end and back-end separation deployment. 
Of course, we also support the way of <b>👉<a href="/en/deploy/compose.html">deploying the front and back ends together</a></b>.
However, the front end already supports deployment on Edge Networks such as Netlify and Vercel. Of course, Nginx is also no problem, and the back end can be deployed anywhere that supports containers. 
It is one of our development goals to facilitate users to deploy for free!
:::

::: details Is your program open source and free?
<b>Open Source</b>! We promise that the program will be <b>perpetually free</b>, and we will provide <b>comprehensive documentation</b> for you to read!
In other words, you <b>never need to spend money</b> to use this program like other open source software, of course, if you are willing to participate in the improvement, that would be great!
This program is a free and open source project, designed to share network disk files, easy to download and learn Java and Vue, please abide by relevant laws and regulations when using, please do not abuse!
:::

::: details What features do you plan to support?
As you can see, the background management function is still being added gradually. We will develop it according to the needs of users. If you have any good suggestions, please share them with us!
The file list and preview on the home page will be gradually improved. Currently, it supports video playback, audio playback, picture preview, text preview, etc. Other previews will be followed up in subsequent development!
:::
