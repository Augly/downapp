/*
 * @Descripttion : 
 * @version      : 1.0.0
 * @Author       : 
 * @Date         : 2023-08-02 13:49:17
 * @LastEditors  : 
 * @LastEditTime : 2023-09-12 11:22:55
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-18 13:58:41
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 11:15:14
 */
import Loadable from 'react-loadable'
const loadable = (filename) => Loadable({
  loader: () => import(`@/view/${filename}/${filename}.js`),
  loading: () => ('')
});
const routers = [
  {
    path: "/",
    exact: true,
    component: loadable('index')
  },
  {
    path: "/iosdown",
    exact: true,
    component: loadable('iosdown')
  }
]

export default routers