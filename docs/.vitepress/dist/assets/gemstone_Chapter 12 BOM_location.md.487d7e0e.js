import{_ as s,c as a,o as n,d as o}from"./app.cebf1889.js";const C=JSON.parse('{"title":"location 对象","description":"","frontmatter":{},"headers":[{"level":2,"title":"查询字符串","slug":"查询字符串","link":"#查询字符串","children":[{"level":3,"title":"解析查询字符串","slug":"解析查询字符串","link":"#解析查询字符串","children":[]},{"level":3,"title":"URLSearchParams","slug":"urlsearchparams","link":"#urlsearchparams","children":[]}]},{"level":2,"title":"操作地址","slug":"操作地址","link":"#操作地址","children":[]}],"relativePath":"gemstone/Chapter 12 BOM/location.md","lastUpdated":1677252307000}'),l={name:"gemstone/Chapter 12 BOM/location.md"},t=o(`<h1 id="location-对象" tabindex="-1">location 对象 <a class="header-anchor" href="#location-对象" aria-hidden="true">#</a></h1><p>难度：⭐️⭐️</p><blockquote><p>💌 <code>location</code> 是<strong>最有用的 BOM 对象之一</strong>，提供了当前窗口中<strong>加载文档的信息</strong>，以及通常的<strong>导航功能</strong>。</p></blockquote><blockquote><p>这个对象独特的地方在于，它既是 <code>window</code> 的属性，也是 <code>document</code> 的属性。也就是说，<code>window.location</code> 和 <code>document.location</code> 指向同一个对象 😉。</p></blockquote><p>假设浏览器当前加载的 URL 是 <a href="http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents%EF%BC%8C" target="_blank" rel="noreferrer">http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents，</a> <code>location</code> 对象的内容如下表所示：</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:center;">说明（if need）</th></tr></thead><tbody><tr><td style="text-align:center;">location.hash</td><td style="text-align:center;">&quot;#contents&quot;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">location.host</td><td style="text-align:center;">&quot;<a href="http://www.wrox.com:80" target="_blank" rel="noreferrer">www.wrox.com:80</a>&quot;</td><td style="text-align:center;">服务器名<strong>及端口号</strong></td></tr><tr><td style="text-align:center;">location.hostname</td><td style="text-align:center;">&quot;<a href="http://www.wrox.com" target="_blank" rel="noreferrer">www.wrox.com</a>&quot;</td><td style="text-align:center;">服务器名</td></tr><tr><td style="text-align:center;">location.href</td><td style="text-align:center;">&quot;<a href="http://www.wrox.com:80/WileyCDA/?q=javascript#contents" target="_blank" rel="noreferrer">http://www.wrox.com:80/WileyCDA/?q=javascript#contents</a>&quot;</td><td style="text-align:center;">当前加载页面的完整 URL（location 的 toString()方法返回这个值）</td></tr><tr><td style="text-align:center;">location.pathname</td><td style="text-align:center;">&quot;/WileyCDA/&quot;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">location.port</td><td style="text-align:center;">&quot;80&quot;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">location.protocol</td><td style="text-align:center;">&quot;http:&quot;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">location.search</td><td style="text-align:center;">&quot;?q=javascript&quot;</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">location.username</td><td style="text-align:center;">&quot;foouser&quot;</td><td style="text-align:center;">域名前指定的用户名</td></tr><tr><td style="text-align:center;">location.password</td><td style="text-align:center;">&quot;barpassword&quot;</td><td style="text-align:center;">域名前指定的密码</td></tr><tr><td style="text-align:center;">location.origin</td><td style="text-align:center;">&quot;<a href="http://www.wrox.com" target="_blank" rel="noreferrer">http://www.wrox.com</a>&quot;</td><td style="text-align:center;">URL 的源地址（只读）</td></tr></tbody></table><h2 id="查询字符串" tabindex="-1">查询字符串 <a class="header-anchor" href="#查询字符串" aria-hidden="true">#</a></h2><h3 id="解析查询字符串" tabindex="-1">解析查询字符串 <a class="header-anchor" href="#解析查询字符串" aria-hidden="true">#</a></h3><p>虽然 <code>location.search</code> 返回了从问号开始直到 URL 末尾的所有内容，但没有办法<strong>逐个访问每个查询参数</strong>。下面的函数解析了查询字符串，并返回一个以每个查询参数为属性的对象：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> getQueryStringArgs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 取得没有开头问号的查询字符串</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">qs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">search</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">search</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 保存数据的对象</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 把每个参数添加到 args 对象</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">qs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&amp;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">kv</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">kv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">decodeURIComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">decodeURIComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>这个函数首先删除了查询字符串开头的问号，当然前提是 <code>location.search</code> 必须有内容。解析后的参数将被保存到 <code>args</code> 对象，这个对象以字面量形式创建。接着，先把查询字符串按照 <code>&amp;</code> 分割成数组，每个元素的形式为 <code>name=value</code>。for 循环迭代这个数组，将每一个元素按照 <code>=</code> 分割成数组，这个数组第一项是参数名，第二项是参数值。参数名和参数值在<strong>使用 <code>decodeURIComponent()</code> 解码</strong>后（这是因为<strong>查询字符串通常是被编码后的格式</strong>）分别保存在 <code>name</code> 和 <code>value</code> 变量中。最后，<code>name</code> 作为属性而 <code>value</code> 作为该属性的值被添加到 <code>args</code> 对象。</p><h3 id="urlsearchparams" tabindex="-1">URLSearchParams <a class="header-anchor" href="#urlsearchparams" aria-hidden="true">#</a></h3><p><code>URLSearchParams</code> 提供了一组标准 API 方法，通过它们可以<strong>检查和修改查询字符串</strong>。给<code>URLSearchParams</code> 构造函数传入一个查询字符串，就可以<strong>创建一个实例</strong>。这个实例上暴露了 <strong><code>get()</code></strong> 、<strong><code>set()</code></strong> 和 <strong><code>delete()</code></strong> 等方法，可以对查询字符串执行相应操作。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> qs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">?q=javascript&amp;num=10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> searchParams </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URLSearchParams</span><span style="color:#A6ACCD;">(qs)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot; q=javascript&amp;num=10&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot; q=javascript&amp;num=10&amp;page=3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">q</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot; num=10&amp;page=3&quot;</span></span>
<span class="line"></span></code></pre></div><p>大多数支持 <code>URLSearchParams</code> 的浏览器也支持将 <code>URLSearchParams</code> 的实例用作<strong>可迭代对象</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> qs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">?q=javascript&amp;num=10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> searchParams </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URLSearchParams</span><span style="color:#A6ACCD;">(qs)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> param </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> searchParams) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">param</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [&quot;q&quot;, &quot;javascript&quot;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [&quot;num&quot;, &quot;10&quot;]</span></span>
<span class="line"></span></code></pre></div><h2 id="操作地址" tabindex="-1">操作地址 <a class="header-anchor" href="#操作地址" aria-hidden="true">#</a></h2><blockquote><p><code>location.assign()</code> <code>window.location</code> <code>location.href</code></p></blockquote><p>可以通过修改 <code>location</code> 对象修改浏览器的地址，有以下三种方法（等价）：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.wrox.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.wrox.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.wrox.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>修改 <code>location</code> 对象的属性也会修改当前加载的页面。其中，hash、search、hostname、pathname 和 port 属性被设置为新值之后都会<strong>修改当前 URL</strong>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 假设当前 URL 为 http://www.wrox.com/WileyCDA/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 把 URL 修改为 http://www.wrox.com/WileyCDA/#section1</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hash </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#section1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 把 URL 修改为 http://www.wrox.com/WileyCDA/?q=javascript</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">search </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">?q=javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 把 URL 修改为 http://www.somewhere.com/WileyCDA/</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">www.somewhere.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>除了 <code>hash</code> 之外</strong>，只要修改 location 的一个属性，就会导致页面<strong>重新加载新 URL</strong>。</p></blockquote><p><code>reload()</code>也可以修改地址，它能重新加载当前显示的页面。调用 <code>reload()</code>而<strong>不传参数</strong>，页面会以<strong>最有效的方式</strong>重新加载。也就是说，如果页面自上次请求以来没有修改过，浏览器可能会<strong>从缓存中加载页面</strong>。如果想<strong>强制从服务器重新加载</strong>，可以像下面这样给 <code>reload()</code>传个 <code>true</code> ：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 重新加载，可能是从缓存加载</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 重新加载，从服务器加载</span></span>
<span class="line"></span></code></pre></div>`,25),e=[t];function p(c,r,y,D,F,i){return n(),a("div",null,e)}const d=s(l,[["render",p]]);export{C as __pageData,d as default};
