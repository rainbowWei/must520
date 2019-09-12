import axios from '@/config/axios'

// 新闻列表分类
export const getNewsList = (params = {}) => axios({
  url: '/article/getarticlecate',
  method: 'get',
  params
})

// 新闻列表
export const getNewsArticle = (params = {}) => axios({
  url: '/article/getarticle',
  method: 'get',
  params
})

