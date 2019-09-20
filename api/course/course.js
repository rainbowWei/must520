import axios from '~/config/axios'

// 获取课程列表
export const apiCourseLists = (params = {}) => {
  return axios({
    method: 'get',
    params,
    url: '/api/courseLists'
  })
}

//获取课程分类的数据

export const getCourseClassify = (params = {}) =>{
  return axios({
    url:'/course/getcoursecate',
    method: 'get',
    params
  })
}

//获取课程列表

export const getCourseLists = (params = {}) =>{
  return axios({
    url: '/course/getcourse',
    method: 'get',
    params
  })
}

//获取讲师数据

export const getCourseTeacher = (params = {}) =>{
  return axios({
    url: '/course/getCourseTeacher',
    method: 'get',
    params
  })
}


//获取课程目录
 export const getCourseChapter = (params = {}) =>{
   return axios({
     url: '/course/getCourseChapter',
     method: 'get',
     params
   })
 }

 //获取课程详情
 export const getCourseDetail = (params = {}) =>{
   return axios({
     url:'/course/getCourseDetail',
     method: 'get',
     params
   }) 
 }

 //获取点评列表
 export const getCourseComment = (params = {}) =>{
   return axios({
     url: '/course/getCourseComment',
     method: 'get',
     params
   })
 }

 //获取点赞数

 export const getCommentPraise = (params = {}) =>{
   return axios({
     url: '/commentPraise',
     method: 'get',
     params
   })
 }


//视频播放
export const getCourseWatch = (params = {}) =>{
  return axios({
    url: '/course/watch',
    method: 'get',
    params
  })
}
 
//评论以及回复
export const getCommentAnswer = (params = {}) =>{
  return axios({
    url: '/getcomment',
    method: 'get',
    params
  })
}
