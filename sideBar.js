Vue.component("side-bar", {
    template: `<div class="sidebar" >       
      <ul>
        <li v-if="true"><router-link to="/">基本信息</router-link></li>
        <li v-if="true"><router-link to="/details">区域管理</router-link></li>
        <li v-if="true"><router-link to="/">应用管理</router-link></li>
        <li v-if="true"><router-link to="/details">系统配置</router-link></li>
        <li v-if="false"><router-link to="/">首页</router-link></li>
        <li v-if="false"><router-link to="/details">详情页</router-link></li>
        <li v-if="false"><router-link to="/">首页</router-link></li>
        <li v-if="false"><router-link to="/details">详情页</router-link></li>
        <li v-if="false"><router-link to="/">首页</router-link></li>
        <li v-if="false"><router-link to="/details">详情页</router-link></li>
        <li v-if="false"><router-link to="/">首页</router-link></li>
        <li v-if="false"><router-link to="/details">详情页</router-link></li>
        <li v-if="false"><router-link to="/">首页</router-link></li>
        <li v-if="false"><router-link to="/details">详情页</router-link></li>
        <li v-if="false"><router-link to="/">首页</router-link></li>
        <li v-if="false"><router-link to="/details">详情页</router-link></li>
      </ul>   
    </div>`

  })