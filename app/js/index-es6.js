import 'babel-polyfill';

import Lottery from './lottery'

const syy = new Lottery();

/**
 * 性能优化
 * 1. 多使用内存，缓存
 * 2. 减少网络请求
 * 3. 静态资源压缩合并，静态资源缓存
 * 4. 使用cdn让资源加载更快
 * 5. 使用SSR后端渲染
 * 6. css放前面，js放后面
 * 7. 懒加载
 * 8. 减少DOM查询，对DOM查询做缓存
 * 9. 减少DOM操作，多个操作合并在一起
 * 10. 事件节流
 * 11. 尽早执行操作
 */
