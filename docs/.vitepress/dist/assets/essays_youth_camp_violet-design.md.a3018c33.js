import{_ as e,c as t,o,d as r}from"./app.cebf1889.js";const u=JSON.parse('{"title":"violet-design 组件库","description":"","frontmatter":{},"headers":[{"level":2,"title":"文章初衷","slug":"文章初衷","link":"#文章初衷","children":[]},{"level":2,"title":"技术选型（at the beginning）","slug":"技术选型-at-the-beginning","link":"#技术选型-at-the-beginning","children":[]},{"level":2,"title":"关于团队协作 💎","slug":"关于团队协作-💎","link":"#关于团队协作-💎","children":[{"level":3,"title":"git 流程","slug":"git-流程","link":"#git-流程","children":[]},{"level":3,"title":"css 样式","slug":"css-样式","link":"#css-样式","children":[]},{"level":3,"title":"开发规范","slug":"开发规范","link":"#开发规范","children":[]}]},{"level":2,"title":"后期工作","slug":"后期工作","link":"#后期工作","children":[{"level":3,"title":"部署文档站","slug":"部署文档站","link":"#部署文档站","children":[]},{"level":3,"title":"发布 npm","slug":"发布-npm","link":"#发布-npm","children":[]},{"level":3,"title":"CICD","slug":"cicd","link":"#cicd","children":[]}]}],"relativePath":"essays/youth_camp/violet-design.md","lastUpdated":1677418936000}'),s={name:"essays/youth_camp/violet-design.md"},n=r('<h1 id="violet-design-组件库" tabindex="-1">violet-design 组件库 <a class="header-anchor" href="#violet-design-组件库" aria-hidden="true">#</a></h1><blockquote><p>第五届字节跳动青训营（冬季）发布了三个项目选题：组件库、掘金站点（SSR）以及 数据可视化。我们组选择的是组件库。</p></blockquote><p align="center"><img src="https://github.com/zhaoyuuu/blog/blob/master/docs/assets/violet-logo.PNG?raw=true"></p><p>相关链接：</p><ul><li><a href="https://github.com/zhaoyuuu/violet-design" target="_blank" rel="noreferrer">Github 地址</a></li><li><a href="https://zhaoyuuu.github.io/violet-design/" target="_blank" rel="noreferrer">文档站地址</a></li><li><a href="https://www.npmjs.com/package/violet-desig" target="_blank" rel="noreferrer">npm 地址</a></li></ul><h2 id="文章初衷" tabindex="-1">文章初衷 <a class="header-anchor" href="#文章初衷" aria-hidden="true">#</a></h2><p>向你展示我们是怎么<strong>从 0 到 1 开发组件库</strong>的（魔鬼都在细节中~），如果你觉得我们做得不错、或者对你有所启发的话，请给我们的仓库一个 <code>star</code> ，这对我们来说帮助很大 🙏。</p><blockquote><p>如果你想快速的了解<code>violet-design</code>，我们录制了<a href="https://www.bilibili.com/video/BV1fR4y1v7VU/?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click" target="_blank" rel="noreferrer">精美的视频</a>供你选择。</p></blockquote><h2 id="技术选型-at-the-beginning" tabindex="-1">技术选型（at the beginning） <a class="header-anchor" href="#技术选型-at-the-beginning" aria-hidden="true">#</a></h2><p>🔮 我们选择 <code>React18 + TS</code> 的组合作为 JS 开发框架 👉 使用 <a href="https://create-react-app.dev/" target="_blank" rel="noreferrer"><code>create-react-app</code></a> 初始化项目。</p><hr><blockquote><p>虽然 Vite 是冉冉升起的新星、相对于 webpack 有很多优势，但是如果你之前没有 <strong>从 0 到 1</strong> 构建项目，我更推荐你使用 <code>create-react-app</code> 初始化项目。通过这一行命令，你基本上不需要再手动配置 webpack 。</p></blockquote><hr><p>🎖 由于该项目性质的特殊性，我们需要<strong>保证组件的质量</strong>。我们使用 <code>create-react-app</code> 之后项目开箱急用的<strong>单元测试</strong>工具：<a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" rel="noreferrer"><code>React-testing-library</code></a>。</p><hr><p>🎈 一般的，你需要一个站点来<strong>展示你的组件</strong>。我们选用 <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">storybook</a> 来构建文档站，它的优势很明显：</p><ul><li>跟其他的生成文档站工具相比，你在开发组件的时候就可以结合它进行调试，很方便</li><li>而且 storybook 可以内嵌在当前 react 项目里，不需要另建一个项目用来开发文档（回避了 monorepo）</li></ul><blockquote><p>虽然它的缺点也很明显..就是 UI 很丑..不过为了在有限的时间里，将我们更多的精力放在组件库本身，我们还是选择了它，并且感到庆幸 🤗。</p></blockquote><hr><p>🎯 现代的前端开发样式越来越复杂，一般的，你需要选择一种 <strong>css 预处理器</strong>（<code>less</code> / <code>scss</code> / ...）。我们选择了 <code>scss</code> 。</p><hr><p>✨ 我们使用 webpack 作为项目的构建工具，但是在项目后期打包的时候，我们使用 <strong><code>Rollup</code> 打包</strong>，因 <code>Rollup</code> 设计之初就是面向 ES Module 的，构建出<strong>结构扁平、性能出众</strong>的<strong>类库</strong>。而我们的组件库正好就是它所说的“类库”。</p><hr><p>🌸 在项目之初我们就指定了<strong>科学、规范</strong>的<strong>目录结构</strong>，在此仅展示<code>src</code>下的目录结构：<br> src -- 项目的源代码<br> ├─index.tsx -- js 打包入口文件<br> ├─assets -- 静态资源<br> ├─hooks -- 自定义 hook 文件夹<br> ├─stories -- stories 相关的文件夹<br> │ <br> ├─<strong>components</strong> -- 项目各组件源码<br> │ Affix（举例，以展示<strong>组件文件格式</strong>）<br> │ _style.scss -- 组件样式<br> │ index.tsx -- 暴露组件<br> │ affix.test.tsx -- 单元测试<br> │ affix.tsx -- 组件实现<br> │ affix.stories.tsx -- 组件 story<br> │ <br> ├─styles -- 汇总项目样式的文件夹<br> │ index.scss -- 项目样式的入口文件<br> │ _animation.scss -- 一些统一动画的样式<br> │ _mixin.scss -- scss mixin<br> │ _reboot.scss -- 统一浏览器样式<br> │ _variables.scss -- 样式变量<br> │ <br> └─_utils -- 工具<br></p><br><blockquote><p>完整技术选型相关链接：<a href="https://ecve7bk5mc.feishu.cn/docx/YLv2dHs0DoUzwUxFBGhcxXs3nzc" target="_blank" rel="noreferrer">violet-design 技术选型文档</a></p></blockquote><h2 id="关于团队协作-💎" tabindex="-1">关于团队协作 💎 <a class="header-anchor" href="#关于团队协作-💎" aria-hidden="true">#</a></h2><blockquote><p>作为没有工作经验的大学生，团队协作是很容易被忽视的一块（<strong>但其实非常重要 ❗️</strong>）。我们队内有同学实习过，接触过实际工作中的团队协作，然后加上我们对这一块的重视，我认为我们在协作这方面做得不错。</p></blockquote><p>接下来，我将从 <strong>git 流程</strong>、<strong>css 样式</strong> 以及 <strong>开发规范</strong> 三个方面来展示我们的团队协作。</p><h3 id="git-流程" tabindex="-1">git 流程 <a class="header-anchor" href="#git-流程" aria-hidden="true">#</a></h3><ol><li>将需求拆分至<strong>更小</strong>的模块, 同时也尽可能不损失<strong>清晰的语义</strong>, 避免多人提交代码时的冲突</li><li>在 local repository 中通过 <code>git checkout -b &lt;BRANCHNAME&gt; origin/master</code> 创建分支, 并将需求提交至分支</li><li>git commit 提交代码, <code>commit</code>信息尽量遵循 <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer">conventioanl commits</a>, 如果有 <code>lint 错误</code>或者<code>测试不通过</code>, 修复之后进行下一步</li><li><code>git push origin &lt;BRANCHNAME&gt;</code> 提交代码至远程仓库</li><li>在 github 上发起 <code>pr</code> , 通过 <code>code review</code> 之后，将当前 branch 合并至 master 分支</li><li>如果该分支之后大概率不会被用到，使用<code>git push origin --delete &lt;BRANCHNAME&gt;</code>删除分支</li></ol><blockquote><p>虽然和大厂里的 git 流程相比，我们还是省去了一些环节，但是主要的（重要的）环节都保留了。对于我们这个小团队（7 个人，而且有同学对 git 不熟悉）来说，这个流程能够非常好的运作。</p></blockquote><h3 id="css-样式" tabindex="-1">css 样式 <a class="header-anchor" href="#css-样式" aria-hidden="true">#</a></h3><p>👉 <strong><em>css 命名</em></strong></p><p>前端团队的 <strong>css 命名规范</strong> 是十分重要的，而且对于组件库来说，更需要团队制定一套 css 规范 以产出<strong>统一、规范</strong>的 css 代码。具体的规范细节如下 👇</p><ul><li>遵循 <a href="http://getbem.com/naming/" target="_blank" rel="noreferrer">BEM 约定</a>, 以减少 CSS 冲突和覆盖的可能（我们采取了 <code>bem</code> 的设计思路，在此基础上自定义了<code>b</code>/<code>e</code>/<code>m</code>之间的连接符号）</li><li>命名同时遵从 <strong>小驼峰</strong> 命名法</li><li>添加组件库统一前缀 <code>violet</code></li></ul><p>最终， css 命名的示例如下：</p><ul><li><code>violetSearchBar__input--disabled</code></li><li><code>violetModal__footer__confirmButton--show</code></li></ul><p>👉 <strong><em>样式交互的统一</em></strong></p><p>一般成熟的组件库都有统一的样式、交互（设计风格，参考 <a href="https://ant.design/docs/spec/introduce-cn" target="_blank" rel="noreferrer">antd</a>），我们也为此做出了一些努力。<br> 相关链接：<a href="https://y6gbjg9hbn.feishu.cn/docx/YILYdhh2jo4SR1xrFLAcwr5cnie" target="_blank" rel="noreferrer">violet-design 组件设计</a></p><h3 id="开发规范" tabindex="-1">开发规范 <a class="header-anchor" href="#开发规范" aria-hidden="true">#</a></h3><p>为了统一我们团队的开发行为、减少“低质量”代码，我们在开发阶段制定了一些规范，同时也使用到一些工具来帮助我们：</p><ul><li><p>统一<code>Nodejs</code>版本：<code>16.x</code></p></li><li><p>使用 <a href="https://eslint.org/" target="_blank" rel="noreferrer"><code>Eslint</code></a> 检查 JS 代码，帮助团队的开发人员避免代码中的常见错误和不规范的用法。</p><blockquote><p>相关链接：<a href="https://blog.logrocket.com/12-essential-eslint-rules-react" target="_blank" rel="noreferrer">12 essential ESLint rules for React</a>（宝藏文章，很推荐！）</p></blockquote></li><li><p>使用 <a href="https://prettier.io/docs/en/index.html" target="_blank" rel="noreferrer"><code>Pretter</code></a> 格式化代码，统一团队代码风格</p><blockquote><p>一键自动格式化真的上头，我现在每个项目都会接入<code>Prettier</code>😂</p></blockquote></li><li><p>借助 <a href="https://typicode.github.io/husky/#/" target="_blank" rel="noreferrer">Husky</a> + <a href="https://www.npmjs.com/package/lint-staged" target="_blank" rel="noreferrer">Lint-staged</a> 在 <code>pre-commit</code> 的时候运行 <strong>单元测试</strong> 和 <strong><code>npx lint-staged</code></strong>，防止不合格的代码进入远程仓库</p><blockquote><p><code>Lint-staged</code> 官网原话，可以说很直白了：<code>Run linters against staged git files and don&#39;t let 💩 slip into your code base</code>😂</p></blockquote><blockquote><p>使用 <code>Husky</code> 一定去看官网！最近新版本的 <code>Husky</code> 的使用方法变动很大。</p></blockquote></li></ul><h2 id="后期工作" tabindex="-1">后期工作 <a class="header-anchor" href="#后期工作" aria-hidden="true">#</a></h2><blockquote><p>以上说的都是<strong>项目初期</strong>我们注意的点，可以看到注意事项还是比较多的。<strong>项目中期</strong>的工作其实就比较 normal 了，无非是学习技术、并遵循上面制定的规则去录入组件。</p></blockquote><p>而到<strong>项目后期</strong>，似乎又有那么一点不一样（有意思）了 😋。</p><h3 id="部署文档站" tabindex="-1">部署文档站 <a class="header-anchor" href="#部署文档站" aria-hidden="true">#</a></h3><p>借助 storybook 构建的文档站大致成型，我们想要互联网上所有人都可以通过一个链接访问我们的文档站，这时候就需要我们<strong>部署文档站</strong>。<br> 我们是借助 <a href="https://pages.github.com/" target="_blank" rel="noreferrer"><code>github-pages</code></a> 来部署的，同样推荐的解决方案还有 <a href="https://vercel.com/" target="_blank" rel="noreferrer">vercel</a> 。</p><blockquote><p><code>github-pages</code> 文档写的非常好！<code>vercel</code>比起 <code>github-pages</code> 更加“自动”，但是生成的网址似乎对<strong>访问者的网络</strong>有更高的要求。</p></blockquote><p>我们借助 <a href="https://www.npmjs.com/package/@storybook/storybook-deployer" target="_blank" rel="noreferrer"><code>@storybook/storybook-deployer</code></a>帮助我们打包、部署 storybook。</p><h3 id="发布-npm" tabindex="-1">发布 npm <a class="header-anchor" href="#发布-npm" aria-hidden="true">#</a></h3><ul><li><strong>想要发布包到 npm 上，首先你需要把你想要的文件打包在一起。</strong> 我们借助 <code>Rollup</code> 来打包，<code>Rollup</code> 配置可以在 <code>/rollup</code> 文件夹下看到。最后我们打包生成三个我们想要的文件：<strong>esm 格式的 JS 文件</strong>、<strong>umd 格式的 JS 文件</strong>，以及 <strong>css 样式文件</strong>。</li></ul><blockquote><p>注意，打包的入口文件在 <strong>目录结构</strong> 里也提到了，即：<code>src/index.tsx</code> 是 JS 入口文件，<code>src/styles/index.scss</code> 是样式入口文件。</p></blockquote><ul><li>接下来就是把这些打包生成的文件上传到 npm：<a href="https://docs.npmjs.com/creating-and-publishing-scoped-public-packages" target="_blank" rel="noreferrer">npm 发包官方教程</a></li></ul><blockquote><p><strong><code>package.json</code> 文件中有很多跟 npm 相关的配置项</strong>，所以写好 <code>package.json</code> 可以让你的包在 npm 上显示得更加丰满。推荐：<a href="https://juejin.cn/post/7161392772665540644" target="_blank" rel="noreferrer">package.json 配置完全解读</a></p></blockquote><h3 id="cicd" tabindex="-1">CICD <a class="header-anchor" href="#cicd" aria-hidden="true">#</a></h3><p>CICD 即持续部署、持续交付。<br> 我们采用 <a href="https://github.com/features/actions" target="_blank" rel="noreferrer"><code>github-actions</code></a> 进行 cicd，实现以下自动化流程：</p><ul><li><code>release</code> 新版本的时候自动更新远程 npm</li><li>push 新代码到 <code>master</code> 分支的时候自动部署、更新文档站。</li></ul><blockquote><p>github 的文档写的太好了，点赞 🥰！<br> <code>violet-design</code>相关自动化脚本源码看<a href="https://github.com/zhaoyuuu/violet-design/tree/master/.github/workflows" target="_blank" rel="noreferrer">这里</a></p></blockquote><p>相关链接：<a href="https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">GitHub Actions 入门教程（阮一峰）</a></p><hr><p>🎉 以上就是 <code>violet-design</code> 的全部内容了，本文并没有“手把手”教你怎么开发，而是向你展示我们在每个阶段都做了什么。<br> ✨ <code>violet-design</code> 所有的开发路线、技术亮点 我们都已经毫无保留地将它呈现给你了。还有夹杂在这篇文章中、随处可见的每一个超链接，都是我们在 开发这个组件库的过程中 寻找到的宝石 💎，希望它们（一定）可以帮助到你。<br><br></p><p>如果你不介意的话，还请给 <code>violet-design</code> 一个 star⭐，这对我们帮助很大，<a href="https://github.com/zhaoyuuu/violet-design" target="_blank" rel="noreferrer">violet-design -- github</a>。</p>',63),c=[n];function i(a,l,d,g,h,p){return o(),t("div",null,c)}const k=e(s,[["render",i]]);export{u as __pageData,k as default};
