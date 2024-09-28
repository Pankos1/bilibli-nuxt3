<script setup lang="ts">
import type { VideoItem } from "~/types/video";
// get /api/channel
const { data: channelList } = await useFetch('/api/channel');
const { data: videoList } = await useFetch('/api/video');
// console.log(videoList);

// 显示列表
const list = ref<VideoItem[]>([]);
// 加载状态
const loading = ref(false);
// 结束加载状态
const finished = ref(false)

// 页码
let page = 1;
// 页数
let pageSize = 20;
// 触底触发
const onLoad = () => {
    // 同步设置 loading 为 false，表示数据加载完成
    loading.value = false;

    // 从 videoList 中获取分页数据，当前页为 page，每页大小为 pageSize
    const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize) || [];

    // 将获取的数据添加到 list 中
    if (list.value) {
        list.value.push(...data);
    }

    // 页码加一，为下一次加载更多数据做准备
    page++;

    // 如果 videoList 中的所有数据都已加载到 list 中，则将 finished 设置为 true
    if (videoList.value?.length === list.value?.length) {
        finished.value = true;
    }
};

// 初始化执行获取20条视频列表
onLoad()
</script>

<template>
    <AppHeader></AppHeader>
    <!-- 频道模块 -->
    <van-tabs>
        <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>
    <!-- 视频列表 -->

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="video-list">
            <AppVideo v-for="item in list" :key="item.bvid" :item="item"></AppVideo>
        </div>
    </van-list>

</template>

<style lang="scss" scoped>


// 视频列表
.video-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
}


</style>