ASCENT Student Research Forum 2026 Website
=========================================

整理内容
--------
这版将网站文件整理为更常见的三层结构：

1. index.html
   - 只保留网页内容和页面结构。
   - 不再把大段 CSS 或 JavaScript 直接写在 HTML 里。
   - 每个 section 都有清楚的 id，方便菜单跳转和后续增删内容。

2. style.css
   - 所有视觉样式集中管理。
   - 按照 Design tokens / Base / Layout / Components / Sections / Responsive 的顺序整理。
   - 颜色、字体、宽度、圆角等集中放在 :root 中，后续统一修改更方便。

3. script.js
   - 只放交互功能。
   - 包括手机端菜单、菜单当前 section 高亮、首页轻微动态效果。

上传方法
--------
1. 解压 ZIP。
2. 将 index.html、style.css、script.js 上传到 GitHub repository 根目录并覆盖旧文件。
3. 将 assets 文件夹上传到 repository 根目录。
4. Commit changes。
5. 等待 GitHub Pages 自动更新，或本地预览 index.html。

建议的专业更新流程
------------------
推荐使用 GitHub 的版本管理功能，而不是每次手动保存很多个压缩包。

最基本流程：
1. 修改文件前，确认当前版本已经 commit。
2. 在本地或 GitHub 网页端修改 index.html / style.css / script.js。
3. 修改后先预览。
4. 确认没问题后 commit，并写清楚 commit message。

commit message 可以写：
- Update program section
- Revise contact form wording
- Add timeline image
- Refactor homepage layout
- Fix mobile menu

如果是较大修改，建议创建 branch：
1. 从 main 建立新分支，例如 update-contact-form。
2. 在新分支修改并预览。
3. 没问题后合并回 main。

这样做的好处：
- main 分支一直保存正式公开版本。
- branch 可以用来试改，不会马上影响公开网页。
- 每一次 commit 都是一个历史版本，可以随时查看差异或恢复。

需要恢复旧版本时
----------------
在 GitHub repository 页面：
1. 点击 Commits。
2. 找到想恢复的旧版本。
3. 查看当时的文件内容，或使用 Revert 功能恢复。

文件编辑建议
------------
- 更新文字内容：主要改 index.html。
- 改颜色、间距、字体、卡片样式：主要改 style.css。
- 改菜单开关、动画、高亮等行为：主要改 script.js。
- 图片统一放在 assets 文件夹中，引用路径写成 assets/filename.png。

注意
----
本网页使用 Google Fonts。联网环境下会显示 Inter 字体；如果无法读取 Google Fonts，会自动回退到系统字体。
