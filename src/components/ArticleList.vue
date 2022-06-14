<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      :success-text="reFreshText"
      :success-duration="1500"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :error.sync="error"
        error-text="请求失败,点击重新加载"
      >
        <!-- <van-cell v-for="(article,index) in list" :key="index" :title="article.title" /> -->
        <ArticleItem v-for="(article,index) in list" :key="index" :article="article" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article.js'
import ArticleItem from './article-item/index.vue'
export default {
  name: 'article-list',
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中loading状态
      finished: false, // 控制数据加载结束的状态
      timestamp: null, // 请求获取下一页数据的时间戳
      error: false, // 控制列表加载失败的提示状态
      isLoading: false, // 控制下拉刷新的loading状态
      reFreshText: '刷新成功' // 下拉刷新成功提示文本
    }
  },
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      try {
        // 1.请求获取数据
        const { data } = await getArticles({
          channel_id: this.channel.id, // 频道id
          timestamp: this.timestamp || Date.now() // 时间戳
        })
        // 2.把请求数据结果放到list数组中
        const { results } = data.data
        // 数组的展开操作符
        this.list.push(...results)
        // 3.本次数据加载结束之后把加载状态设置为结束
        this.loading = false
        // 4.判断数据是否全部加载完成
        if (results.length) {
          // 更新获取下一页数据的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 没有数据了，将finished设置为true，不再load更多
          this.finished = true
        }
      } catch (error) {
        console.log('请求失败')
        this.loading = false // 加载关闭
        this.error = true // 开启错误提示
      }
    },
    async onRefresh () {
      try {
        // 1.请求获取数据
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now() //  下拉刷新，每次请求获取最新数据
        })
        // 2.将数据追加到列表的顶部
        const { results } = data.data
        this.list.unshift(...data.data.results)
        // 3.关闭下拉刷新的loading状态
        this.isLoading = false
        // 更新下拉刷新成功提示的文本
        this.reFreshText = `刷新成功，更新了${results.length}条数据`
      } catch (error) {
        this.isLoading = false
        this.reFreshText = '刷新失败'
      }
    }
  }
}
</script>

<style lang="less">
.article-list {
  height: 79vh;
  overflow-y: auto;
}
</style>
