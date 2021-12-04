![Step 1](https://github.com/NightCodeProtocol/Get-Input-Data/raw/main/help/poster.png)

# Get Input Data
Get Files From Input Type File Using jQuery

## Info

This is a simple script for previewing an image selected using an input-file, but not yet uploaded.

- Step 1

![Step 1](https://github.com/NightCodeProtocol/Get-Input-Data/raw/main/help/step-1.jpg)

- Step 2

![Step 2](https://github.com/NightCodeProtocol/Get-Input-Data/raw/main/help/step-2.jpg)

## Code

The code of the script using jQuery is in the file [demo.js](https://github.com/NightCodeProtocol/Get-Input-Data/blob/main/demo.js)

### Use cases

1. Output file information to the console

> `fileLoad($(this), $(this).parents('.input-group').find('.img-uploaded'), 'test');`

2. Assign the image address in the src property to the <img> element with the ".img-uploaded" class
The URL.createObjectURL() method is used. This is an experimental technology. For more information, [see the documentation](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#browser_compatibility)

> `fileLoad($(this), $(this).parents('.input-group').find('.img-uploaded'), 'createObjectURL');`

3. Assign the image address in the src property to the <img> element with the ".img-uploaded" class
(In base64 format)

> `fileLoad($(this), $(this).parents('.input-group').find('.img-uploaded'), 'FileReader', 'image');`

4. Inserts the contents of the selected text file on the page, after the element with the class ".img-uploaded"

> `fileLoad($(this), $(this).parents('.input-group').find('.img-uploaded'), 'FileReader', 'text');`