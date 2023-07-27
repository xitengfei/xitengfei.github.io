export default {
  name: '郗腾飞',
  title: '前端开发工程师',
  experience: '8年',
  avatar: require('@/pages/Resume/images/avatar1.jpg'),
  breifDesc: `八年web前后端开发经验，熟练掌握ReactJs/es6/Typescript，熟练掌握Html5/Css3响应式web开发，有丰富的微前端实战经验，熟悉公共组件库的建设，擅长组件封装并实现代码重用。善于研究和探索，有较强解决问题的能⼒，对代码质量和产品性能有较⾼的要求。`,
  metaInfo: [
    { title: '电话', value: '15652203404', icon: 'icon-telephone' },
    { title: '邮箱', value: 'tengfei.xi@qq.com', icon: 'icon-youxiang1' },
    { title: '地址', value: '北京·昌平', icon: 'icon-location' },
    { title: '个人主页', value: 'http://xitengfei.github.io', icon: 'icon-github' }
  ],
  workExperience: [
    {
      period: '2020.7 — 今',
      name: '广联达科技股份有限公司',
      role: '高级软件开发工程师',
      description: `
      <h5>负责数据中台项目前端架构以及研发工作</h5>
      <ol>
        <li>负责产品需求的分析，设计实现、开发，并解决项目中遇到的技术难题</li>
        <li>完成了基于qiankun的微前端升级改造工作</li>
        <li>基于father+dumi建立了前端公共组件库，并封装了一系列的公共组件，提高了项目的质量和开发效率</li>
        <li>基于内部业务特性封装高级目录树组件，并支持分级加载/滚动加载，解决大数据量下的性能问题</li>
        <li>不断重构旧的代码，增强产品的稳定性和可维护性</li>
        <li>与产品经理协作优化用户体验</li>
      </ol>`,
    },
    {
      period: '2018.12 — 2020.7',
      name: '⽤友网络科技股份有限公司',
      role: '⾼级前端开发⼯程师',
      description: `
      <h5>开发智能分析产品，主要⼯作内容 </h5>
      <ol>
          <li>根据业务需求开发核心功能模块</li>
          <li>解决项目中存在的各种问题，保障项目顺利上线</li>
          <li>整体把控产品质量，优化/重构代码，增强产品的稳定性和可维护性</li>
          <li>帮助团队中的前端伙伴，提供解决问题的思路</li>
          <li>协助架构师完成微前端微服务的拆分</li>
      </ol>`,
    },
    {
      period: '2015.3 — 2018.12',
      name: '北京华美汉盛信息技术有限公司',
      role: '前后端开发工程师',
      description: `
        <h5>服务于美国三大电音节品牌之一的Insomniac公司，担任Technical lead，主要工作内容</h5>
        <ol>
            <li>前端公共组件开发</li>
            <li>Wordpress主题和插件开发</li>
            <li>对接AWS, Google, SalesForce, MailChimp等各种第三方服务</li>
            <li>Code Review团队成员提交的代码, 部署上线，还有一些运维工作</li>
            <li>研究和使用新的技术并用到项目中来</li>
            <li>培养团队新成员</li>
        </ol>
        `,
//       achievement: `
//             <p>
//             在这份⼯作中，负责客户公司旗下各个不同的项目，技术广度得较⼤拓展。前端⽅⾯有Gulp, Nodejs, 
// React, Angular以及Sass, canvas, svg等, 后端⽅⾯有Wordpress, Laravel, GoLang等。同时还获得了很多
// 与第三⽅服务对接的经验，包括AWS, Google, SalesForce, MailChimp, 微信等。更重要的，英语⽔平得到了
// 很⼤提升，能⽐较轻松地阅读英⽂⽂档，与客户⽤英⽂通过gmail和slack等进⾏交流。
//             </p>
//             `,
    },
    {
        period: '2014.6 — 2015.02',
        name: '莱客创新（北京）科技有限公司',
        role: 'PHP工程师/组长',
        description: `
        <p>在该公司期间，担任后端开发工程师，使用PHP的Yii框架，主要负责移动端API和后台管理系统的开发，
        数据库设计等⼯作，另外还有开发爬虫进行数据抓取，在开发过程中还用到了Mongodb，Memcache，队列，定时任务等技术。
        </p>`,
    },
  ],
  projectExperience: [
    {
      name: '数据中台项目',
      company: '广联达科技股份有限公司',
      role: '⾼级软件开发⼯程师',
      period: '2020.07 — 今',
      description: `
        这是一个由微前端和后端微服务组织起来的数据中台项目，前端技术栈是react。接手这个项目后，我首先对微前端架构进行了调整，将登陆校验等逻辑以及页面上的公共部分统一放在基座应用上，子应用可以只关注自身业务逻辑。后来又利用father+dumi的技术建立了前端公共组件库。在该项目中，全面使用react的函数式组件进行开发，同时配合typescript，再加上自定义hook等，使项目开发效率和质量得到进一步提高。`,
    },
    {
      name: '⽤友云智能分析项目',
      company: '用友网络科技股份有限公司',
      role: '⾼级前端⼯程师',
      period: '2018.12 — 2020.07',
      description: `
        这是⼀个报表分析类的项目，提供数据可视化等丰富的功能，在这个项目中主要负责筛选器等相关功能的开发，筛选器是整个产品的数据交互纽带，在开发相关功能的同时需要和其它模块做好融合，需要更多地从架构的⾓度去设计开发和解决问题。在开发这个产品的过程中，对于复杂的功能需求，不断尝试将相关的代码逻辑进⾏提取，抽取出服务，⾏为，模型等，并运⽤react的⾼阶组件对⼀些重复的代码进⾏封装。`,
    },
    {
      name: 'Intranet',
      company: '北京华美汉盛信息技术有限公司',
      role: '前后端⼯程师',
      period: '2018.08 - 2018.12',
      description: `
      Intranet是客户公司内部使⽤的项目, 有数据表格, 账单审批, 还有⼀些业务上的辅助功能. 技术栈上后端是Go语⾔, 前端是React全家桶配合Ant Design和TypeScript , 同时还对接了Google, AWS等第三⽅服务, 包括Google联合登陆, Gmail发送邮件, AWS S3服务等. 接⼿这个项目的时候还没有Go语⾔的相关经验,⼀边学习的同时⼀边做新的功能和修复Bug, 同时将⾃⼰的React技能运⽤到了项目中。`,
    },
    {
      name: 'Meme Generator',
      company: '北京华美汉盛信息技术有限公司',
      role: '前后端⼯程师',
      period: '2017.06 — 2017.06',
      description: `
      这是⼀个利⽤canvas技术做的在线合成图⽚的应⽤，⽤户可以上传的⾃⼰的图⽚, 然后放⼤缩⼩或拖动，输⼊⾃定义⽂字并改变⽂字样式，然后点击按钮将合成的图⽚分享到Facebook和Twitter，也可以直接在线下载。为减轻服务器的压⼒，全部功能都是纯粹在浏览器端完成的，为实现分享功能, 图⽚也是直接从浏览器端先上传到S3存储服务上，并对所有的JS和CSS代码使⽤前端构建⼯具gulp进⾏了合并和压缩。`,
    },
    // {
    //   name: 'Sound Cloud ⾳乐播放器',
    //   company: '北京华美汉盛信息技术有限公司',
    //   role: '前后端⼯程师',
    //   period: '2016.04 — 2016.04',
    //   description: `开发⼀个基于Sound Cloud Javascript API的⾳乐播放器插件，要安装在客户所有的Festival站点上，并且需要实
    //         现切换⻚⾯时⾳乐播放不被打断的效果。解决⽅案是对全站开启了Ajax模式，从⽽实现切换⻚⾯⾳乐播放不暂停。
    //         由于Ajax模式的开启产⽣了很多问题， 然后将相关的⼀问题逐个进⾏了修复。今年⼜对代码进⾏了重构，借鉴了
    //         Angular的思想将js代码模块化，优化过后的代码结构更加清晰，也易于扩展和维护。`,
    // },
  ],
  education: [
    {
      name: '许昌学院',
      company: '计算机科学与技术系',
      role: '计算机科学与技术系 -- 本科',
      period: '2010.09 — 2014.07',
      description: '',
    },
  ],
  icomments: [
    '熟练掌握ReactJS、ES6、TypeScript, 对于JS⾯向对象开发有⾃⼰的⼼得',
    '熟练掌握各种Web前端技术（HTML5/CSS/Javascript等)和跨浏览器、跨终端的开发',
    '有良好的代码习惯，⼀直保持简介的代码⻛格，并时刻考虑代码的性能',
    '有丰富的后台开发经验，熟悉Linux, Apache, Mysql, PHP',
    '熟练使⽤Git / Svn 进⾏代码管理',
    '有丰富的API接⼝开发经验和多种开放平台对接经验',
    '有微信⼩程序，Electron等开发经验',
    '有较好的英⽂读写能⼒，喜欢在stackoverflow找问题的答案',
  ]
}