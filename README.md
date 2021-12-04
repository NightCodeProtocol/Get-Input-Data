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

____

<a href="https://jsfiddle.net/k59hgupr/"><img src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2Fdocs.jsfiddle.net%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-28427.appspot.com%2Fo%2Fspaces%252F-L9jXGYtvV0gDWqyZIc-%252Favatar.png%3Fgeneration%3D1539250045463064%26alt%3Dmedia"></a>
<a href="https://jsfiddle.net/k59hgupr/">Live example on JSFiddle</a>