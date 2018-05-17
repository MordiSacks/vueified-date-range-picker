# vueified-date-range-picker
Vueified Date Range Picker

### Screenshot
![Screenshot](https://i.imgur.com/X5m1vM3.png)

## Installation
Run  
`yarn add vueified-date-range-picker` or `npm install vueified-date-range-picker` 

## Usage
```js
import VueifiedDateRangePicker from 'VueifiedDateRangePicker';

Vue.use(VueifiedDateRangePicker);
```  

Then in your template
```html
<vueified-date-range-picker @selected="cb"></vueified-date-range-picker>
```  

cb example
```js
/**
* 
* @param dateRange {{string: string, start: dayjs, end: dayjs}}
*/
function cb(dateRange){
    console.log(dateRange.start);
    console.log(dateRange.end);
    console.log(dateRange.string);
}
```
