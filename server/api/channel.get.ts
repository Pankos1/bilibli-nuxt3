// get /api/channel
import chnnel from "~/database/chnnel"
// 限制数据结构接口
import { ChnnelItem } from "@/types/datatypes";


// 通过 defineEventHandler 定义接口
export default defineEventHandler(async () => {
    return chnnel as Array<ChnnelItem>
});


