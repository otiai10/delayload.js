# Very Thanks To
http://jsdo.it/itahana/eA4V

# Purpose
まあ今後も使うだろうなぁと思って

# Usage

```html
<head>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js">
  <script type="text/javascript" src="http://otiai10.com/delayload/delayload.js">
  <script>
    $(function(){ // or any other init process
      enableDelayLoad();
    });
  </script>
</head>
<body>
  <img class="delayload" src="" data="http://your.domain/YOUR/IMAGE/PATH">
  <img class="delayload" src="" data="http://your.domain/YOUR/IMAGE/PATH">
  <img class="delayload" src="" data="http://your.domain/YOUR/IMAGE/PATH">
  <img class="delayload" src="" data="http://your.domain/YOUR/IMAGE/PATH">
  <img class="delayload" src="" data="http://your.domain/YOUR/IMAGE/PATH">
  <img class="delayload" src="" data="http://your.domain/YOUR/IMAGE/PATH">
</body>
```
# Option

|    name     |  type                  | description                       | default    |
|:-----------:|:----------------------:|:---------------------------------:|:----------:|
| duration    | integer                | fadeIn effect duration (msec)     | 800        |
| baseDOM     | DOM Element or TagName | base frame element of 'offset'    | window     |
| selector    | string                 | delayload target element selector | .delayload |
| doFade      | boolean                | fadeIn or simple show()           | true       |
| immediately | boolean                | fixing bug :sweat_smile:          | false      |

# Sample
```javascript
var option = {
  duration    : 1000,
  baseDOM     : 'body',
  selector    : '.anyselector',
  doFade      : false,
  immediately : true, 
};

enableDelayLoad(option);
```
