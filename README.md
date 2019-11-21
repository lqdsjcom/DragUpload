# DragUpload
javascript图片上传（可拖拽）

# 方法1：
<script src="../upload.js"></script>

# 方法2：
import DragUpload from 'DragUpload';

var callback = function (res) {
    files = res[0];
    console.log(files);
}

new DragUpload("upload", callback); //id&回调事件


# 效果图
![效果图](https://github.com/lqdsjcom/DragUpload/blob/master/demo/demo.jpg)

