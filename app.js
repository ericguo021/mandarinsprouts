/* English lives in index.html so the site is usable without JavaScript.
   Edit the matching Chinese text below to update the second language. */
const chinese = {
  posterCaption:'来自 Dido 老师的一声你好',posterView:'查看完整图片 ↗',skip:'跳转到正文',menu:'菜单',navApproach:'教学特色',navClasses:'课程介绍',navAbout:'认识 Dido 老师',navContact:'联系我',trialShort:'免费体验课',
  heroEyebrow:'从一句中文，发现一个新世界',heroLine1:'小小的你，',heroLine2:'大大的发现。',heroDescription:'在快乐中遇见中文。儿歌、故事和充满趣味的小小冒险，让孩子的好奇心自然萌芽。',trial:'预约免费体验课',explore:'看看我们如何学习',heroNote:'2–6 岁 · 小班教学 · 快乐成长',photoCaption:'真实的课堂，快乐的学习。',
  factAge:'岁的好奇时光',minutes:'分钟',factTime:'的快乐探索',factGroup:'小班教学，用心陪伴',factLanguage:'以中文为主，英文辅助',
  approachEyebrow:'在玩耍中，悄悄成长',approachTitle1:'让学中文，',approachTitle2:'像玩耍一样自然。',approachIntro:'好奇、自在、开心，是孩子学习的起点。每一节课，都用孩子喜欢的方式，让中文变得生动。',
  activity1Title:'唱唱跳跳',activity1Text:'跟着儿歌唱，随着节奏动，让新词语在小小的动作里鲜活起来。',activity2Title:'故事与想象',activity2Text:'有趣的角色，简单的故事，打开语言和想象力的新世界。',activity3Title:'游戏与创造',activity3Text:'做手工、玩游戏，在动手探索和熟悉的生活情境中亲近中文。',activity4Title:'发现中华文化',activity4Text:'认识节日和传统，在适合幼儿的小小探索中，感受语言背后的文化。',
  classEyebrow:'走进我们的课堂',classTitle1:'小小的课堂，',classTitle2:'大大的成长空间。',classIntro:'在温暖、充满互动的环境里，勇敢试着说中文，一点点建立自信，慢慢爱上这门语言。',classLink:'一起找到适合孩子的课程',ageLabel:'适合的小朋友',ageValue:'2–6 岁幼儿',durationLabel:'刚刚好的时长',durationValue:'每节课 30 分钟',sizeLabel:'每个孩子都被看见',sizeValue:'小班教学，关注个体',languageLabel:'温柔的语言启蒙',languageValue:'以中文为主，英文辅助',classFootnote:'带着好奇心，就是一个美好的开始。',
  teacherNoteLabel:'来自老师的一句话',teacherNote:'我希望创造一个温暖、充满互动的环境，让孩子建立自信，对中文和中华文化产生好奇。最重要的是，享受学中文的快乐！',teacherTag:'在小小的游戏里，慢慢长大。',aboutEyebrow:'温暖地说一声：你好',aboutTitle1:'是孩子的老师，',aboutTitle2:'也是成长路上的鼓励者。',aboutHello:'你好！我是 Dido 老师。',aboutText1:'我是一位有教学经验、热爱与幼儿相处的中文老师。我喜欢通过儿歌、故事、游戏、律动和动手活动，让语言学习充满活力。',aboutText2:'在 Mandarin Sprouts，我希望每个孩子都能感到被接纳，敢于尝试，在一个又一个快乐的瞬间里，发现中文和中华文化的魅力。',aboutLink:'和 Dido 老师打个招呼',
  feedbackEyebrow:'孩子的快乐，大人看得见',feedbackTitle:'来自家长和学校的温暖回响。',quote1:'我的孩子非常喜欢中文课，跟着老师学会了很多儿歌和词语。我真的很惊喜！',quote1Source:'幼儿园家长',quote2:'你的课程生动又快乐，我们也一直收到家长们的积极反馈。',quote2Source:'幼儿园园长',quote3:'孩子们喜欢中文，也喜欢你！',quote3Source:'幼儿园老师',
  faqEyebrow:'关于课程，你可能想知道',faqTitle1:'说「你好」之前，',faqTitle2:'先聊一聊。',faqIntro:'想知道课程是否适合孩子？欢迎随时联系我。',faq1Question:'课程适合多大的孩子？',faq1Answer:'Mandarin Sprouts 面向 2–6 岁幼儿。课堂通过适合孩子的儿歌、律动、故事和创意活动，让他们自然接触中文。',faq2Question:'课堂会有英文辅助吗？',faq2Answer:'会的。课堂以中文为主，配合英文辅助，帮助孩子理解并安心参与。欢迎告诉我孩子目前的语言接触情况，我们可以一起讨论适合的安排。',faq3Question:'在哪里上课？具体时间是什么？',faq3Answer:'请联系 Dido 老师，了解最新的上课地点、时间和名额。',emailMe:'给我发邮件 ↗',faq4Question:'如何预约体验课？',faq4Answer:'请填写免费体验课表单，表达你的兴趣并咨询参与安排。',formLink:'打开体验课表单 ↗',
  contactEyebrow:'让我们一起，种下美好的开始',contactTitle1:'孩子的第一句「你好」，',contactTitle2:'从这里开始。',contactIntro:'来认识 Dido 老师，发现原来学中文也可以像玩耍一样快乐。',contactQuestions:'有问题？欢迎联系我。',tagline:'学一门语言，发现一个世界。',footerNote:'小小的脚步，长久的好奇。',backTop:'回到顶部'
};
const textNodes = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(textNodes.map(node => [node.dataset.i18n, node.textContent]));
const languageButton = document.querySelector('.language-toggle');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
let activeLanguage = 'en';
function setLanguage(language) {
  activeLanguage = language === 'zh' ? 'zh' : 'en';
  const isChinese = activeLanguage === 'zh';
  document.documentElement.lang = isChinese ? 'zh-Hans' : 'en';
  textNodes.forEach(node => { node.textContent = (isChinese ? chinese : english)[node.dataset.i18n] ?? english[node.dataset.i18n]; });
  languageButton.innerHTML = isChinese ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
  languageButton.lang = isChinese ? 'en' : 'zh-Hans';
  languageButton.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换为中文');
  navigation.setAttribute('aria-label', isChinese ? '主导航' : 'Main navigation');
  document.querySelector('[data-alt="classPhoto"]').alt = isChinese ? 'Dido 老师和小朋友在课堂上通过律动快乐地学习中文' : 'Ms. Dido and young children learning Mandarin through playful movement in class';
  document.querySelector('[data-alt="teacherPoster"]').alt = isChinese ? '认识 Dido 老师：老师的个人照片、中文教学介绍与可爱的熊猫插画' : 'Meet Ms. Dido: a portrait of your Mandarin teacher, with her introduction and a playful panda illustration';
  document.querySelector('[data-label="teacherPoster"]').setAttribute('aria-label', isChinese ? '查看 Dido 老师的完整介绍海报（在新标签页打开）' : 'View Ms. Dido’s full introduction poster (opens in a new tab)');
  document.title = isChinese ? 'Mandarin Sprouts | 2–6 岁幼儿快乐中文启蒙' : 'Mandarin Sprouts | Joyful Mandarin for Ages 2–6';
  document.querySelector('meta[name="description"]').content = isChinese ? '跟着 Dido 老师，在儿歌、故事、游戏和手工中快乐学中文。适合 2–6 岁幼儿的小班课程，欢迎预约免费体验课。' : 'A happy first step into Mandarin. Join Ms. Dido for small-group classes for ages 2–6, filled with songs, stories, games, and creativity. Book a free trial.';
  try { localStorage.setItem('mandarin-sprouts-language', activeLanguage); } catch { /* Storage is optional. */ }
}
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
languageButton.addEventListener('click', () => setLanguage(activeLanguage === 'en' ? 'zh' : 'en'));
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 621px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
try { if (localStorage.getItem('mandarin-sprouts-language') === 'zh') setLanguage('zh'); } catch { /* Default to English. */ }
