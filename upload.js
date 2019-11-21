var DragUpload = (function () {
    function DragUploadOrg(id, callback) {
        if (!id) return;
        this.preview = document.createElement('div');
        this.preview.innerText = '上传文件(可拖拽)';
        this.preview.className = 'preview';
        this.emelt = document.getElementById(id);
        this.callback = callback;
        this.init();
    }

    DragUploadOrg.prototype = {
        init() {
            this.emelt.appendChild(this.preview);
            this.eventClickInit();
        },
        eventClickInit() {
            var self = this;
            this.emelt.onclick = this.createImageUploadDialog.bind(this);
            this.emelt.addEventListener('dragover', function (e) { self.onDragover(e); });
            this.emelt.addEventListener("drop", function (e) { self.onDrop(e); });
        },
        onDragover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        },
        onDrop(e) {
            e.stopPropagation();
            e.preventDefault();
            var fileList = e.dataTransfer.files;
            if (fileList.length == 0) { return false; }
            if (fileList[0].type.indexOf('image') === -1) { ; return false; }
            if (this.callback) {
                this.callback(fileList);
            }
        },
        createImageUploadDialog() {
            var self = this;
            var fileInput = this.fileInput;
            if (!fileInput) {
                fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.name = 'ime-images';
                fileInput.multiple = true;
                fileInput.onchange = function () {
                    var files = this.files;
                    if (self.callback) {
                        self.callback(files);
                    }
                };
                this.fileInput = fileInput;
            }
            fileInput.click();
        }
    }

    function DragUploadbeget(obj) {
        var F = function () { };
        F.prototype = obj;
        return new F();
    }

    function DragUpload(id, callback) {
        DragUploadOrg.call(this, id, callback);
    }

    var proto = DragUploadbeget(DragUploadOrg.prototype)
    proto.constructor = DragUpload;
    DragUpload.prototype = proto;
    return DragUpload;
})();

if (typeof module === "object") {
    module.exports = DragUpload;
}