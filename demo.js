$(function() {

    $('.fg-img .custom-file-input').on('change', function () {
        fileLoad($(this), $(this).parents('.input-group').find('.img-uploaded'), 'FileReader', 'image');
    });

    function fileLoad(input_obj, img_obj, f_type, f_file_type) {
        switch (f_type) {
            case 'test':
                var file_prop = input_obj.prop('files')[0];
                console.log('test fileLoad...');
                console.log('input_obj.val(): [' + input_obj.val() +'] this is a fake variable');
                console.log('type: ' + file_prop.type);
                console.log('name: ' + file_prop.name);
                console.log('size: ' + file_prop.size);
                console.log('lastModified: ' + file_prop.lastModified);
                console.log('webkitRelativePath: ' + file_prop.webkitRelativePath);
                break;
            case 'createObjectURL':
                var file = input_obj.prop('files')[0];
                var img = URL.createObjectURL(file);
                console.log(img);
                img_obj.attr('src', img);
                break;
            case 'FileReader':
                if (!window.FileReader) {
                    return alert('FileReader API is not supported by your browser.');
                }
                var $i = input_obj,
                    input = $i[0];
                if (input.files && input.files[0]) {
                    var file = input.files[0];
                    fr = new FileReader();
                    fr.onload = function () {
                        // Do stuff on onload, use fr.result for contents of file
                        if (f_file_type == 'text') {
                            img_obj.after(fr.result);
                        } else if (f_file_type == 'image') {
                            img_obj.attr('src', fr.result);
                        }
                    };
                    if (f_file_type == 'text') {
                        fr.readAsText(file);
                    } else if (f_file_type == 'image') {
                        fr.readAsDataURL(file);
                    }
                } else {
                    alert("File not selected or browser incompatible.")
                }
                break;
            default:
                console.log('Something went wrong...');
        }
    }

})
