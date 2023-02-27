import{_ as s,c as a,o as n,d as o}from"./app.cebf1889.js";const C=JSON.parse('{"title":"navigator 对象","description":"","frontmatter":{},"headers":[{"level":2,"title":"检测插件","slug":"检测插件","link":"#检测插件","children":[]},{"level":2,"title":"注册处理程序","slug":"注册处理程序","link":"#注册处理程序","children":[]}],"relativePath":"gemstone/Chapter 12 BOM/navigator.md","lastUpdated":1677298006000}'),l={name:"gemstone/Chapter 12 BOM/navigator.md"},p=o(`<h1 id="navigator-对象" tabindex="-1">navigator 对象 <a class="header-anchor" href="#navigator-对象" aria-hidden="true">#</a></h1><p>难度：⭐️</p><blockquote><p><code>navigator</code> 对象中关于<strong>系统能力</strong>的属性将在第 13 章详细介绍 ❤。</p></blockquote><blockquote><p>💌 <code>navigator</code> 现在已经成为客户端标识浏览器的标准。<strong>只要浏览器启用 JavaScript，navigator 对象就一定存在。</strong> 但是与其他 BOM 对象一样，每个浏览器都支持自己的属性。</p></blockquote><p><code>navigator</code> 对象身上有很多属性方法，在此一一不列举了（不太常用）。总之，<code>navigator</code> 对象的属性<strong>通常用于确定浏览器的类型</strong>。</p><h2 id="检测插件" tabindex="-1">检测插件 <a class="header-anchor" href="#检测插件" aria-hidden="true">#</a></h2><p>👉 检测<strong>浏览器是否安装了某个插件</strong>是开发中常见的需求。除 IE10 及更低版本外的浏览器，都可以通过 <code>plugins</code> 数组来确定。这个数组中的每一项都包含如下属性：</p><ul><li><code>name</code>：插件名称。</li><li><code>description</code>：插件介绍。</li><li><code>filename</code>：插件的文件名。</li><li><code>length</code>：由当前插件处理的 MIME 类型数量。</li></ul><p>检测插件就是遍历浏览器中可用的插件，并逐个比较插件的 <code>name</code> ：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 插件检测，IE10 及更低版本无效</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> hasPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">plugins</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 检测 Flash</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">hasPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Flash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 检测 QuickTime</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">hasPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">QuickTime</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="注册处理程序" tabindex="-1">注册处理程序 <a class="header-anchor" href="#注册处理程序" aria-hidden="true">#</a></h2><blockquote><p>🤔 没见过，不知道过时没有。</p></blockquote><p>现代浏览器支持 <code>navigator</code> 上的（在 HTML5 中定义的）<strong><code>registerProtocolHandler()</code></strong> 方法。这个方法可以把一个<strong>网站注册为处理某种特定类型信息应用程序</strong>。随着在线 RSS 阅读器和电子邮件客户端的流行，可以借助这个方法将 <strong>Web 应用程序</strong>注册为像<strong>桌面软件一样的默认应用程序</strong>。</p><p>要使用 <code>registerProtocolHandler()</code>方法，必须传入 3 个参数：<strong>要处理的协议</strong>（如&quot;mailto&quot;或&quot;ftp&quot;）、<strong>处理该协议的 URL</strong>，以及<strong>应用名称</strong>。比如，要把一个 Web 应用程序注册为默认邮件客户端，可以这样做：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerProtocolHandler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mailto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.somemailclient.com?cmd=%s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Some Mail Client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>这个例子为&quot;mailto&quot;协议注册了一个处理程序，这样邮件地址就可以通过指定的 Web 应用程序打开。注意，第二个参数是负责处理请求的 URL，%s 表示原始的请求。</p>`,16),e=[p];function t(c,r,i,F,y,D){return n(),a("div",null,e)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
